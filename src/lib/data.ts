import {
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Personal / contact                                                        */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Sakash Srivastava",
  firstName: "Sakash",
  role: "Machine Learning & AI Engineer",
  // words that rotate under the hero headline
  rotatingRoles: [
    "agentic AI systems",
    "retrieval & RAG pipelines",
    "computer vision models",
    "production LLM apps",
    "medical imaging research",
  ],
  headline: "I build agentic AI systems that actually ship.",
  subheadline:
    "Machine Learning and AI engineer. This year I shipped two LLM systems solo, one running live in production on Azure with Docker, CI/CD, authentication and a full test suite. I work on agentic architectures, retrieval, computer vision, and pulling structured data out of messy documents reliably enough to act on.",
  location: "New Delhi, India · Open to on-site & remote",
  email: "sakashsrivastava06@gmail.com",
  phone: "+91 95605 57446",
  resumeUrl: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/resume.pdf",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/SakashSrivastava", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sakash-srivastava/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:sakashsrivastava06@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+919560557446", icon: Phone },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Proof", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  Hero stats                                                                */
/* -------------------------------------------------------------------------- */

export const heroStats = [
  { value: "2", label: "LLM systems shipped solo" },
  { value: "Live", label: "In production on Azure" },
  { value: "QS #37", label: "Research intern at King's College" },
  { value: "Top 5%", label: "Adobe India Hackathon 2025" },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  tagline: string;
  status: "Live" | "Shipped" | "Research" | "In progress";
  featured?: boolean;
  problem: string;
  built: string;
  impact: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "SegLit",
    tagline: "Agentic research assistant for segmentation literature",
    status: "Live",
    featured: true,
    problem:
      "Reading the segmentation literature means digging reported metrics out of hundreds of dense, two column PDFs. It is slow, and easy to get wrong.",
    built:
      "An agentic RAG system over 276 medical imaging papers: layout aware ingestion of 2,435 pages and 732 result tables into 8,139 embeddings across ChromaDB and BM25, answered by a hand written tool calling agent that cites its sources. Reported results are verified into a SQLite table of 829 rows with a source match check that discards hallucinated values.",
    impact:
      "Shipped as a secure multi user Flask app (auth, per user history, bring your own key, a semantic cache that serves repeats at zero tokens) and deployed live over HTTPS as a multi stage Docker image on Azure with GitHub Actions CI/CD. Retrieval was benchmarked on a hand labelled 52 question set.",
    stack: ["Python", "LangGraph", "ChromaDB", "BM25", "Flask", "Docker", "Azure", "CI/CD"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SakashSrivastava/Agentic-Research-Assistant-for-Segmentation-Literature",
      },
      { label: "Live Demo", href: "https://seglit.duckdns.org/" },
    ],
  },
  {
    title: "Multi-Agent Orchestration System",
    tagline: "A supervisor / worker agent framework built from scratch",
    status: "Shipped",
    featured: true,
    problem:
      "Off the shelf agent frameworks hide the hard parts: planning, reliable tool use, verification, and recovery when something breaks mid run.",
    built:
      "A multi agent system built without LangGraph or CrewAI. A supervisor decomposes tasks into dependency ordered plans, specialist agents execute them with sandboxed tools, and an LLM as judge reviewer validates every output against system verified tool logs. State lives in SQLite so crash recovery and human in the loop approval are the same pause and resume mechanism.",
    impact:
      "Diagnosed and fixed 6 production class failures, including cutting the reviewer's false rejection rate from 5 of 6 down to 0 by feeding it verified tool call evidence. Shipped with a 19 test suite, negative tests for sandbox escapes, and Docker packaging.",
    stack: ["Python", "LLMs", "Pydantic", "SQLite", "Streamlit", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/SakashSrivastava/Agent-Orchestration" },
    ],
  },
  {
    title: "AI Finance Controller",
    tagline: "Agentic AI for finance workflows",
    status: "Shipped",
    problem:
      "Finance work is full of repetitive, rules heavy tasks that are slow and easy to get wrong by hand.",
    built:
      "An AI system that brings agentic automation to financial workflows. Full write up coming soon.",
    impact: "Live on GitHub. I will flesh out the details here shortly.",
    stack: ["Python", "LLMs", "Agentic Systems"],
    links: [
      { label: "GitHub", href: "https://github.com/SakashSrivastava/AI_Finance_Controller" },
    ],
  },
  {
    title: "Distill",
    tagline: "What I'm building right now",
    status: "In progress",
    problem:
      "My current build, in active development. The full write up will land here as it takes shape.",
    built:
      "Work in progress on GitHub. Follow along on the repo while it comes together.",
    impact: "More soon.",
    stack: ["Python", "LLMs", "In progress"],
    links: [{ label: "GitHub", href: "https://github.com/SakashSrivastava/Distill" }],
  },
  {
    title: "Counterfeit Sneaker Verification",
    tagline: "Computer vision pipeline at UpValue Tech",
    status: "Shipped",
    problem:
      "Sneaker resale is flooded with replicas, and moderators need a fast, explainable signal for whether a pair is authentic.",
    built:
      "An end to end verification pipeline in Python and OpenCV: GrabCut background removal, CNN feature extraction, dual engine OCR (Tesseract, EasyOCR) and stitching density analysis across 6 product viewpoints. Benchmarked 6 model families across 9 metrics; a custom 3 block CNN beat every baseline.",
    impact:
      "A priority weighted decision engine fuses text, similarity and build quality signals into 3 verdicts, with Grad-CAM heatmaps that explain every flag to platform moderators.",
    stack: ["Python", "OpenCV", "PyTorch", "OCR", "Grad-CAM", "CNNs"],
    links: [],
  },
  {
    title: "Orbital Wall Segmentation",
    tagline: "Medical imaging research at King's College London",
    status: "Research",
    problem:
      "Segmenting the orbital wall from MRI is a clinically important and previously unsolved problem, made harder by thin bone structures and scarce labels.",
    built:
      "Worked with PhD researchers across the full pipeline. Built a CT to MRI registration pipeline to auto generate bone labels, cutting annotation from hours per case to minutes across 40+ paired cases, and benchmarked the wall model across 8 architecture and loss configurations using boundary aware metrics (HD95, ASSD).",
    impact:
      "The result I cared about: segmenting the orbital wall itself from MRI, a previously unsolved problem, at a genuinely strong level. I concluded the internship with a very strong letter of recommendation.",
    stack: ["PyTorch", "Image Segmentation", "Registration", "HD95 / ASSD"],
    links: [{ label: "Read more", href: "#research" }],
  },
  {
    title: "Adaptive Face Super-Resolution",
    tagline: "Research internship at NSUT, New Delhi",
    status: "Research",
    problem:
      "Restoring low resolution, low light faces is hard, and fixed neighbour selection in patch based methods leaves quality on the table.",
    built:
      "Extended the TLcR-RL patch wise framework, replacing fixed-K neighbour selection with a PSNR driven adaptive-K scheme evaluated per image patch, and prototyped an ANFIS neuro fuzzy model in MATLAB using per patch intensity features to predict a light complexity factor.",
    impact:
      "Benchmarked adaptive-K and a low light rule against the fixed-K baseline (33.63 PSNR / 0.930 SSIM), and diagnosed exactly why naive adaptation underperformed.",
    stack: ["MATLAB", "ANFIS", "Image Processing", "PSNR / SSIM"],
    links: [{ label: "Read more", href: "#research" }],
  },
  {
    title: "Bengaluru Home Price Prediction",
    tagline: "End to end ML pipeline with a Flask web app",
    status: "Shipped",
    problem:
      "Property prices are noisy, location driven, and full of outliers, so buyers rarely get a clean, data backed estimate.",
    built:
      "A full pipeline over 13,000+ listings: data cleaning, feature engineering, XGBoost training, Isolation Forest outlier detection and domain specific logic. Deployed as a Flask app serving real time predictions.",
    impact:
      "Reached 80%+ R2, and it was my first taste of the whole ML lifecycle, from a raw CSV to a deployed prediction service.",
    stack: ["Python", "XGBoost", "scikit-learn", "Isolation Forest", "Flask"],
    links: [
      { label: "GitHub", href: "https://github.com/SakashSrivastava/real-estate-price-prediction" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export type SkillGroup = {
  category: string;
  blurb: string;
  skills: { name: string; level: number; learning?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "LLM & Agentic AI",
    blurb: "Where most of my work lives right now.",
    skills: [
      { name: "RAG & Retrieval", level: 88 },
      { name: "Agentic Systems", level: 86 },
      { name: "Tool Calling", level: 85 },
      { name: "Structured Outputs (Pydantic)", level: 84 },
      { name: "Embeddings & Vector Search", level: 84 },
      { name: "LLM-as-Judge Evaluation", level: 80 },
    ],
  },
  {
    category: "ML & Computer Vision",
    blurb: "From training to evaluation to explainability.",
    skills: [
      { name: "PyTorch", level: 82 },
      { name: "CNNs & Transformers", level: 80 },
      { name: "Image Segmentation", level: 80 },
      { name: "OpenCV", level: 85 },
      { name: "XGBoost / scikit-learn", level: 82 },
      { name: "Grad-CAM & Model Eval", level: 80 },
    ],
  },
  {
    category: "Programming",
    blurb: "Languages I reach for to build and prototype.",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 74 },
      { name: "C++", level: 70 },
      { name: "MATLAB", level: 68 },
    ],
  },
  {
    category: "Frameworks & Data",
    blurb: "The stack around the models.",
    skills: [
      { name: "LangChain / LangGraph", level: 82 },
      { name: "Flask / Streamlit", level: 82 },
      { name: "REST APIs", level: 78 },
      { name: "ChromaDB / SQLite / BM25", level: 82 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "OCR (Tesseract, EasyOCR)", level: 76 },
    ],
  },
  {
    category: "Deployment & Tools",
    blurb: "How I ship and keep things running.",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Azure", level: 74 },
      { name: "GitHub Actions CI/CD", level: 78 },
      { name: "Git", level: 85 },
      { name: "Backend Engineering", level: 30, learning: true },
    ],
  },
  {
    category: "AI Tools & Workflow",
    blurb: "I build with AI in the loop, every day.",
    skills: [
      { name: "Claude & Claude Code", level: 86 },
      { name: "Codex & Copilot", level: 80 },
      { name: "ChatGPT / OpenAI API", level: 82 },
      { name: "Prompt Engineering", level: 84 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience timeline                                                       */
/* -------------------------------------------------------------------------- */

export type TimelineItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  tag: string;
};

export const timeline: TimelineItem[] = [
  {
    role: "Visiting Research Intern",
    org: "King's College London",
    location: "London, United Kingdom",
    period: "Jun 2026 to Jul 2026",
    tag: "Research",
    points: [
      "Worked with PhD researchers on deep learning for orbital wall segmentation from MRI, a clinically important and previously unsolved problem.",
      "Built a CT to MRI registration pipeline that cut annotation from hours per case to minutes across 40+ paired cases, and reached strong orbital wall segmentation from MRI on a previously unsolved problem.",
      "Benchmarked the wall model across 8 architecture and loss configurations using boundary aware metrics (HD95, ASSD). Concluded with a very strong letter of recommendation.",
    ],
  },
  {
    role: "Research Intern, Face Super-Resolution",
    org: "Netaji Subhas University of Technology (NSUT)",
    location: "New Delhi, India",
    period: "Jun 2025 to Jul 2025",
    tag: "Research",
    points: [
      "Extended the TLcR-RL patch wise framework with a PSNR driven adaptive-K scheme evaluated per image patch.",
      "Prototyped an ANFIS neuro fuzzy model in MATLAB and diagnosed why naive adaptation underperformed the fixed-K baseline.",
    ],
  },
  {
    role: "Machine Learning Intern (Remote)",
    org: "UpValue Tech Pvt. Ltd.",
    location: "Jaipur, India",
    period: "Jan 2025 to May 2025",
    tag: "Industry",
    points: [
      "Built an end to end counterfeit sneaker verification pipeline in Python and OpenCV across 6 product viewpoints.",
      "Benchmarked 6 model families across 9 metrics; a custom 3 block CNN was selected as the production architecture.",
      "Designed a priority weighted decision engine with Grad-CAM heatmaps to explain every flag to moderators.",
    ],
  },
];

/* Campus leadership / community — lower priority, shown in its own strip. */
export const leadership: TimelineItem[] = [
  {
    role: "Senior Executive, Training, Placements & Corporate Relations Cell",
    org: "LNMIIT",
    location: "Jaipur, India",
    period: "2024 to Present",
    tag: "Leadership",
    points: [
      "Selected for the final 18 member team from 324 applicants. Coordinate company assessments and candidate onboarding.",
    ],
  },
  {
    role: "Organizer",
    org: "TEDxLNMIIT",
    location: "Jaipur, India",
    period: "2024",
    tag: "Community",
    points: [
      "Handled event management, sponsorships, speaker outreach and content creation for the flagship event.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Research / learning                                                       */
/* -------------------------------------------------------------------------- */

export type ResearchItem = {
  title: string;
  type: "Current" | "Focus" | "Interest" | "Next";
  org?: string;
  summary: string;
};

export const research: ResearchItem[] = [
  {
    title: "Deep Learning Segmentation for Orbital Anatomy & Pathology",
    type: "Current",
    org: "Visiting Research Intern · King's College London, 2026",
    summary:
      "Built a CT to MRI registration pipeline and benchmarked orbital wall segmentation across 8 architecture and loss configurations with boundary aware metrics, reaching strong orbital wall segmentation from MRI on a previously unsolved problem. Finished with a very strong letter of recommendation.",
  },
  {
    title: "Reliable Agentic Systems & Evaluation",
    type: "Focus",
    summary:
      "How to make multi agent systems trustworthy: verification against tool logs, LLM as judge evaluation, self correcting structured outputs, and recovery that survives crashes.",
  },
  {
    title: "Retrieval & RAG on Hard Documents",
    type: "Focus",
    summary:
      "Layout aware ingestion of dense, table heavy PDFs, hybrid dense and sparse retrieval, reranking, and pulling structured, verifiable data out of unstructured text.",
  },
  {
    title: "Face Super-Resolution & Image Restoration",
    type: "Focus",
    org: "Research Intern · NSUT",
    summary:
      "Adaptive, patch wise reconstruction of low resolution faces with a PSNR driven neighbour scheme and an ANFIS neuro fuzzy model, evaluated with PSNR and SSIM.",
  },
  {
    title: "Transformers & Reasoning Models",
    type: "Next",
    summary:
      "Going deeper on the internals: attention, inference efficiency, and how modern reasoning and post training methods actually work under the hood.",
  },
  {
    title: "Generative AI in Production",
    type: "Next",
    summary:
      "Taking generative systems from a notebook to something that is observable, evaluated, and safe enough to put in front of real users.",
  },
  {
    title: "Backend Engineering",
    type: "Next",
    summary:
      "Going from models to the systems around them: APIs, databases, auth, and the backend plumbing that turns a project into a product.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Achievements                                                              */
/* -------------------------------------------------------------------------- */

export type Achievement = {
  title: string;
  detail: string;
  highlight: string;
};

export const achievements: Achievement[] = [
  {
    title: "Two LLM Systems Shipped Solo in 2026",
    detail:
      "Designed, built and shipped SegLit and a multi agent orchestration system on my own, one running live in production on Azure with Docker, CI/CD, auth and a full test suite.",
    highlight: "Solo builds",
  },
  {
    title: "Research Internship at King's College London",
    detail:
      "Selected as an undergraduate for a visiting research internship at KCL, ranked 37th in the QS World University Rankings. Concluded with a very strong letter of recommendation.",
    highlight: "QS #37",
  },
  {
    title: "Adobe India Hackathon 2025",
    detail: "Finished among the top 5% of participants nationwide.",
    highlight: "Top 5%",
  },
  {
    title: "Training & Placement Cell, LNMIIT",
    detail:
      "Selected for the final 18 member team from 324 applicants, after clearing the aptitude and psychometric rounds and an interview shortlist.",
    highlight: "Final 18 of 324",
  },
  {
    title: "Certifications",
    detail:
      "Prompt Engineering & Programming with OpenAI (Columbia Plus), Machine Learning in Production, Databases & SQL for Data Science, and Stanford's Supervised ML and Advanced Learning Algorithms.",
    highlight: "5 credentials",
  },
  {
    title: "TEDxLNMIIT Organizing Team",
    detail:
      "Part of the organizing team for the flagship TEDx event, across event management, sponsorships, speaker outreach and content.",
    highlight: "Organizer",
  },
];

/* -------------------------------------------------------------------------- */
/*  Proof — the numbers, explained                                            */
/* -------------------------------------------------------------------------- */

export type Proof = {
  number: string;
  label: string;
  meaning: string;
};

export const proofs: Proof[] = [
  {
    number: "19",
    label: "Tests before I called it done",
    meaning:
      "My multi agent system ships with a 19 test suite, including negative tests for sandbox escapes, plus Docker packaging. Reliability is part of the build, not an afterthought.",
  },
  {
    number: "Top 5%",
    label: "Adobe India Hackathon 2025",
    meaning:
      "Finished in the top 5% of participants nationwide at one of India's largest student hackathons.",
  },
  {
    number: "8,139",
    label: "Embeddings indexed in SegLit",
    meaning:
      "Layout aware ingestion turned 276 medical imaging papers (2,435 pages, 732 tables) into 8,139 embeddings across ChromaDB and BM25 for hybrid retrieval.",
  },
  {
    number: "829",
    label: "Verified metric rows, hallucinations dropped",
    meaning:
      "SegLit extracts reported results into a SQLite table of 829 rows across 267 architectures and 72 datasets, with a source match check that discards values the model made up.",
  },
  {
    number: "5/6 → 0",
    label: "Reviewer false rejections, eliminated",
    meaning:
      "In my multi agent system, feeding the LLM as judge reviewer verified tool call evidence cut its false rejection rate from 5 of 6 down to zero.",
  },
  {
    number: "80%+",
    label: "R² on the Bengaluru price model",
    meaning:
      "An end to end XGBoost pipeline over 13,000+ listings, with Isolation Forest outlier detection, deployed as a live Flask app.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Education (used in About)                                                 */
/* -------------------------------------------------------------------------- */

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering",
  school: "The LNM Institute of Information Technology, Jaipur",
  period: "Aug 2023 to May 2027",
  cgpa: "CGPA 7.60 / 10",
};
