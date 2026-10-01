"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SRC = (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/music.mp3"; // basePath-aware; falls back to a generated pad if missing
const MAX_VOL = 0.55;
const START = 42.72; // start in the silent gap; "First" attack hits at 42.80

type Mode = "file" | "gen" | null;

export default function SoundToggle() {
  const [ready, setReady] = useState(false);
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState(false);
  const [hintHidden, setHintHidden] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const genGainRef = useRef<GainNode | null>(null);
  const genNodesRef = useRef<OscillatorNode[]>([]);
  const modeRef = useRef<Mode>(null);
  const autoDoneRef = useRef(false);

  useEffect(() => {
    setReady(true);
    const a = new Audio(SRC);
    a.loop = false; // repeat manually so it restarts from START, not 0
    a.volume = 0;
    a.preload = "auto";
    audioRef.current = a;

    const onEnded = () => {
      a.currentTime = START;
      a.play().catch(() => {});
    };
    a.addEventListener("ended", onEnded);

    return () => {
      if (fadeRef.current) window.clearInterval(fadeRef.current);
      a.removeEventListener("ended", onEnded);
      a.pause();
      genNodesRef.current.forEach((n) => {
        try {
          n.stop();
        } catch {}
      });
      ctxRef.current?.close().catch(() => {});
    };
  }, []);

  const fadeAudio = (target: number, done?: () => void, ms = 900) => {
    const a = audioRef.current;
    if (!a) return;
    if (fadeRef.current) window.clearInterval(fadeRef.current);
    const tick = 20;
    const steps = Math.max(1, Math.round(ms / tick));
    const step = (target - a.volume) / steps;
    fadeRef.current = window.setInterval(() => {
      const next = a.volume + step;
      if ((step >= 0 && next >= target) || (step < 0 && next <= target)) {
        a.volume = Math.max(0, Math.min(1, target));
        if (fadeRef.current) window.clearInterval(fadeRef.current);
        done?.();
      } else {
        a.volume = Math.max(0, Math.min(1, next));
      }
    }, tick);
  };

  const buildGen = () => {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 760;
    filter.Q.value = 0.6;
    filter.connect(master);
    master.connect(ctx.destination);

    [110, 164.81, 220, 329.63].forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 ? "triangle" : "sine";
      osc.frequency.value = f;
      osc.detune.value = (i - 1.5) * 4;
      const voice = ctx.createGain();
      voice.gain.value = 0.16 / 4;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.05 + i * 0.017;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.06 / 4;
      lfo.connect(lfoGain);
      lfoGain.connect(voice.gain);
      osc.connect(voice);
      voice.connect(filter);
      osc.start();
      lfo.start();
      genNodesRef.current.push(osc, lfo);
    });
    ctxRef.current = ctx;
    genGainRef.current = master;
  };

  const fadeGen = (target: number) => {
    const ctx = ctxRef.current;
    const g = genGainRef.current;
    if (!ctx || !g) return;
    const now = ctx.currentTime;
    g.gain.cancelScheduledValues(now);
    g.gain.setValueAtTime(g.gain.value, now);
    g.gain.linearRampToValueAtTime(target, now + (target > 0 ? 2.2 : 1.1));
  };

  const startSound = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.currentTime = START;
      a.volume = 0;
      await a.play();
      fadeAudio(MAX_VOL, undefined, 140); // quick fade so "First" lands at full punch
      modeRef.current = "file";
      autoDoneRef.current = true;
      setOn(true);
    } catch {
      try {
        if (!ctxRef.current) buildGen();
        if (ctxRef.current!.state === "suspended") await ctxRef.current!.resume();
        fadeGen(0.5);
        modeRef.current = "gen";
        autoDoneRef.current = true;
        setOn(true);
      } catch {
        /* blocked until a gesture; the first-interaction listener handles it */
      }
    }
  };

  const stopSound = () => {
    if (modeRef.current === "file") fadeAudio(0, () => audioRef.current?.pause());
    else fadeGen(0);
    setOn(false);
  };

  // Browsers block audio until a real user gesture. Mouse-move and scroll do
  // NOT count — only click / tap / keypress do. So start on the first real
  // gesture, and keep the listeners armed until playback actually succeeds.
  useEffect(() => {
    const events = ["pointerdown", "click", "keydown", "touchend"];
    const kick = async () => {
      if (autoDoneRef.current) return;
      await startSound();
      if (autoDoneRef.current) {
        events.forEach((e) => window.removeEventListener(e, kick));
      }
    };
    // best-effort autoplay on load (works only where the browser allows it)
    const id = window.setTimeout(() => {
      if (!autoDoneRef.current) startSound();
    }, 150);
    events.forEach((e) => window.addEventListener(e, kick, { passive: true }));
    return () => {
      window.clearTimeout(id);
      events.forEach((e) => window.removeEventListener(e, kick));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    autoDoneRef.current = true; // manual control takes over
    if (on) stopSound();
    else startSound();
  };

  if (!ready) return null;

  const expanded = on || hover;
  const showHint = !on && !hintHidden;

  return (
    <>
      {/* one-time hint: tells the visitor there's music, points at the button */}
      <AnimatePresence>
        {showHint && (
          <motion.button
            key="sound-hint"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              if (!on) startSound();
              setHintHidden(true);
            }}
            className="fixed bottom-[74px] right-5 z-50 flex items-center gap-2 border-2 border-ink bg-flame px-3 py-2 text-ink shadow-hard-sm"
          >
            <div className="eq" aria-hidden>
              <span className="eq-bar" style={{ animationDelay: "0s" }} />
              <span className="eq-bar" style={{ animationDelay: "0.2s" }} />
              <span className="eq-bar" style={{ animationDelay: "0.1s" }} />
            </div>
            <span className="mono text-[10px] font-bold">
              This site has music · click to play
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setHintHidden(true);
          toggle();
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={on ? "Mute sound" : "Play sound"}
        className={`group fixed bottom-5 right-5 z-50 flex h-11 items-center gap-2 overflow-hidden border-2 border-ink px-3 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-sm ${
          on ? "bg-flame text-paper" : "bg-paper text-ink"
        }`}
      >
        <div className={`eq ${on ? "" : "eq-idle"}`} aria-hidden>
          <span className="eq-bar" style={{ animationDelay: "0s" }} />
          <span className="eq-bar" style={{ animationDelay: "0.25s" }} />
          <span className="eq-bar" style={{ animationDelay: "0.1s" }} />
          <span className="eq-bar" style={{ animationDelay: "0.4s" }} />
          <span className="eq-bar" style={{ animationDelay: "0.18s" }} />
        </div>

        <span
          className={`mono whitespace-nowrap text-[10px] transition-all duration-200 ${
            expanded ? "max-w-[90px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {on ? "Now playing" : "Play sound"}
        </span>
      </button>
    </>
  );
}
