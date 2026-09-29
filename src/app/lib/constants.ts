import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaHackerrank,
  FaCode,
  FaFileArrowDown,
} from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import {
  Education,
  EngineeringPrinciple,
  Experience,
  Project,
  SkillGroup,
  SocialLink,
  TrustSignal,
} from '../types/types'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/keshav-019',
    icon: FaGithub,
    cta: 'See code & activity',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ks48/',
    icon: FaLinkedin,
    cta: 'View experience timeline',
  },
  {
    name: 'X',
    url: 'https://x.com/KeshavJ56468905',
    icon: FaXTwitter,
    cta: 'Follow updates',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/survivor_48/',
    icon: SiLeetcode,
    cta: 'Problem-solving profile',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/survivor_48',
    icon: FaHackerrank,
    cta: 'Coding certifications & badges',
  },
]

export const HERO_BADGES = [
  'Senior Backend Engineer @ MishiPay',
  'Open to remote & open-source collaboration',
  'M.Tech (AI & Data Science) @ NIT Durgapur',
]

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    label: 'Industry Experience',
    value: '3+ Years',
    detail: 'Built backend, automation, cloud, and enterprise software across internships and full-time roles.',
  },
  {
    label: 'Case Studies',
    value: '4 Deep Dives',
    detail: 'Developer tools, AI agents, career infrastructure, and operations-focused engineering systems.',
  },
  {
    label: 'Public Profiles',
    value: '5 Platforms',
    detail: 'GitHub, LinkedIn, LeetCode, HackerRank, and X with public proof of work.',
  },
]

export const QUICK_LINKS = [
  {
    label: 'GitHub Activity',
    href: 'https://github.com/keshav-019?tab=overview&from=2026-01-01&to=2026-12-31',
    icon: FaCode,
  },
  {
    label: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/ks48/',
    icon: FaLinkedin,
  },
  {
    label: 'Download Resume',
    href: '/resume.pdf',
    icon: FaFileArrowDown,
  },
]

export const CORE_STRENGTHS: SkillGroup[] = [
  {
    title: 'Backend And System Design',
    description: 'Designing APIs, services, and data flows that stay maintainable as product scope grows.',
    skills: ['Python', 'Django', 'Node.js', 'FastAPI', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Distributed Systems'],
  },
  {
    title: 'AI-Native Developer Tools',
    description: 'Building practical AI workflows with memory, tool execution, approvals, and product-grade UX.',
    skills: ['LLM APIs', 'AI Agents', 'RAG', 'LangGraph', 'Ollama', 'Tool Calling'],
  },
  {
    title: 'Product Interfaces',
    description: 'Shipping React, Next.js, Electron, and mobile surfaces for complex workflows without hiding the system.',
    skills: ['React', 'Next.js', 'TypeScript', 'Electron', 'React Native', 'Playwright'],
  },
]

export const SUPPORTING_TOOLS: SkillGroup[] = [
  {
    title: 'Delivery And Collaboration',
    description: 'Tooling I use to ship production-ready software in teams.',
    skills: ['Git', 'Docker', 'Kubernetes', 'Firebase', 'Vercel', 'OCI', 'Linux', 'CI/CD'],
  },
]

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    title: 'Build Around Real Workflows',
    description: 'I start with the actual task a developer or operator needs to finish, then shape the system around it.',
    tradeoff: 'It takes more discovery up front, but the final product solves the right problem.',
    example: 'EchoMind and The REST Project both prioritize tool execution, context, and approval paths over surface-level chat.',
  },
  {
    title: 'Keep Systems Explainable',
    description: 'When AI or automation is involved, I make actions, evidence, and uncertainty visible.',
    tradeoff: 'Adds product and data-model complexity, but it creates trust and debuggability.',
    example: 'StackCendra is planned around evidence-backed facts, confidence scores, and human-approved operations.',
  },
  {
    title: 'Design For Safe Execution',
    description: 'I prefer narrow tools, permission boundaries, logs, and validation before automation touches real systems.',
    tradeoff: 'Safer flows can feel slower at first, but they prevent costly hidden failure modes.',
    example: 'EchoMind uses a typed tool registry, risk-tiered policy engine, approvals, and audit logs before running actions.',
  },
]

export const EDUCATION: Education[] = [
  {
    degree: 'M.Tech in AI & Data Science',
    institution: 'NIT Durgapur',
    duration: '2024 - 2026',
    description:
      'Focused on machine learning, data systems, and practical deployment patterns for real-world applications.',
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'University of Engineering and Management, Kolkata',
    duration: '2018 - 2022',
    description: 'Built core foundations in software engineering, data structures, and system design.',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Backend Engineer',
    company: 'MishiPay',
    duration: 'Sep 2026 - Present',
    description: 'Building backend services for MishiPay\'s retail self-checkout and payments platform in Python and Django.',
    highlights: [
      'Working on Django and Django REST Framework services behind in-store checkout, payments, and retailer integrations.',
      'Debugging transaction handling and data-integrity issues in a large production Django codebase.',
    ],
  },
  {
    role: 'Project Intern',
    company: 'Oracle Financial Services Software',
    duration: 'Jan 2026 - Jul 2026',
    description: 'Contributed to Oracle Aconex document-management workflows across enterprise frontend, backend, and cloud systems.',
    highlights: [
      'Worked across Angular, Spring Boot, Oracle SQL, and Oracle Cloud Infrastructure.',
      'Built Playwright automation for document creation, metadata validation, hierarchy checks, uploads, and version management.',
      'Investigated production defects and improved release confidence through debugging, reviews, and regression coverage.',
    ],
  },
  {
    role: 'Backend Developer and DevOps Engineer',
    company: 'Distronix Pvt. Ltd.',
    duration: 'Aug 2022 - Oct 2025',
    description: 'Built and maintained backend services, operational dashboards, monitoring systems, and Linux-hosted deployments.',
    highlights: [
      'Designed Node.js and Express APIs for employee management, payroll, inventory, procurement, and monitoring workflows.',
      'Containerized services with Docker and deployed production applications across Linux servers.',
      'Worked across PostgreSQL, MySQL, MongoDB, dashboard integrations, logging, and production issue resolution.',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'The REST Project',
    summary: 'A Postman-inspired developer workspace for APIs, databases, teams, SSH, and local terminal workflows.',
    image: '/images/rest-project.png',
    problem:
      'API development often scatters requests, environments, database checks, SSH sessions, and team context across separate tools.',
    role:
      'I built the web and Electron product surfaces, request workflows, database integrations, workspace model, and local developer capabilities.',
    impact:
      'Created a single workspace for REST and GraphQL testing, SQL exploration, shared collections, environments, authentication, and desktop-only terminal/SSH workflows.',
    keyFeatures: [
      'REST and GraphQL request builder with collections and environments',
      'Database explorer and SQL execution across PostgreSQL, MySQL, Oracle, MSSQL, and SQLite-oriented workflows',
      'Team workspaces, authentication flows, shared collections, and profile management',
      'Electron access to SSH sessions, local terminal workflows, and native developer operations',
    ],
    techStack: ['Next.js', 'Electron', 'TypeScript', 'Firebase', 'SQL Databases', 'SSH', 'Docker'],
    technicalHighlights: [
      'Structured request state for repeatable API testing and fast endpoint switching.',
      'Built database adapters and UI flows for schema exploration and query execution.',
      'Dockerized the project for local startup while keeping the desktop shell available for native workflows.',
    ],
    challengeAndLearning:
      'The challenge was keeping a broad developer platform understandable. I learned to separate browser-safe workflows from desktop-native capabilities without fragmenting the product.',
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://the-rest-project.vercel.app' },
      { type: 'source', label: 'GitHub', url: 'https://github.com/keshav-019/the-rest-project' },
    ],
  },
  {
    title: 'EchoMind',
    summary: 'A local-first desktop AI assistant with voice, memory, approvals, tool execution, and automation.',
    image: '/images/echomind.jpg',
    problem:
      'Most assistants can chat, but they do not safely operate a local machine, remember user workflows, or expose what they are doing.',
    role:
      'I built the Electron desktop shell, FastAPI agent service, typed tool registry, permission system, voice pipeline, memory layer, workflows, and automation tools.',
    impact:
      'Completed the original eight-phase roadmap into a working personal computing platform with local STT/TTS, screen awareness, routines, recovery mode, developer workspaces, and smart-home integration.',
    keyFeatures: [
      'Electron overlay with live execution timeline and approval buttons',
      'FastAPI agent service with provider-agnostic model interface and typed tools',
      'Risk-tiered policy engine, approval gates, JSONL audit logs, and recovery mode',
      'Local push-to-talk speech-to-text, spoken replies, semantic memory, routines, workflows, and Home Assistant control',
    ],
    techStack: ['Python', 'FastAPI', 'Electron', 'TypeScript', 'LangGraph', 'SQLite', 'Playwright'],
    technicalHighlights: [
      'Implemented safe OS/browser automation using typed tools instead of raw shell-by-default execution.',
      'Built local semantic memory with fastembed and sqlite-vec so useful context can persist without cloud embedding calls.',
      'Designed approval-aware multi-step workflows that survive service restarts through SQLite checkpointing.',
    ],
    challengeAndLearning:
      'The hard part was making an AI assistant useful without making it reckless. I learned to treat permissions, auditability, and rollback paths as core product features.',
    links: [
      { type: 'demo', label: 'Demo Link', url: 'https://echomind.yourwaytolearn.com' },
      { type: 'source', label: 'GitHub', url: 'https://github.com/keshav-019/echomind' },
    ],
  },
  {
    title: 'CareerOS',
    summary: 'An AI career workspace across web, desktop, browser extension, and mobile.',
    image: '/images/careeros.png',
    problem:
      'Job search and interview preparation are split across trackers, notes, resumes, coding tools, calendars, and browser tabs.',
    role:
      'I designed the monorepo architecture and built the web app, desktop companion, browser extension, mobile app, shared types, Firebase flows, and AI-backed career workflows.',
    impact:
      'Delivered a multi-surface product covering application tracking, job capture, interview preparation, system design practice, coding judge workflows, learning, analytics, calendars, profiles, settings, and resume tooling.',
    keyFeatures: [
      'Application pipeline with Kanban/table views, reminders, analytics, and job records',
      'Browser extension for detecting and saving job postings into CareerOS',
      'Interview War Room with aptitude, CS, AI, system design, and desktop coding tracks',
      'Desktop companion for LaTeX resume compilation and local multi-language coding judge',
    ],
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Electron', 'React Native', 'Expo', 'Chrome Extension'],
    technicalHighlights: [
      'Connected web, extension, desktop, and mobile clients through shared domain types and Firebase-backed state.',
      'Built desktop-only helper flows for local compilers and LaTeX while keeping web-safe routes separate.',
      'Designed extension authentication through OAuth, email/password, and token package fallback paths.',
    ],
    challengeAndLearning:
      'The hardest part was keeping feature parity across surfaces while respecting what belongs on web, desktop, extension, or mobile. I learned to draw sharper platform boundaries.',
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://keshav-019-career-os.vercel.app' },
      { type: 'source', label: 'GitHub', url: 'https://github.com/keshav-019/career-os' },
    ],
  },
  {
    title: 'StackCendra',
    summary: 'An AI-native engineering workspace for project discovery, environment drift, and production recovery.',
    image: '/images/stackcendra.png',
    problem:
      'Engineering failures often live between code, configuration, local setup, deployments, infrastructure, and telemetry, while teams debug them through disconnected tools.',
    role:
      'I am shaping the Phase 0 product contract, architecture, wiki, roadmap, visual prototype, and release plan for an evidence-backed local-to-production workflow.',
    impact:
      'Defined a focused wedge around intelligent project discovery and a phased platform roadmap that grows toward configuration intelligence, controlled deployments, incident diagnosis, and sanitized production-to-local reproduction.',
    keyFeatures: [
      'Trusted directory scanning with no project code execution in the first release',
      'Evidence-backed map of repositories, services, runtimes, tools, ports, data stores, and dependencies',
      'Confidence scores, source locations, correction controls, and secret redaction',
      'Roadmap for Docker/Kubernetes operations, Git intelligence, observability, approvals, and recovery workflows',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tauri', 'Rust', 'Go', 'Python', 'PostgreSQL', 'OpenTelemetry'],
    technicalHighlights: [
      'Designed the first release around deterministic detectors before optional AI explanation layers.',
      'Defined security boundaries where AI proposes, policy validates, humans approve, and constrained runners execute.',
      'Mapped future responsibilities across Tauri, Rust, Go, Python, PostgreSQL, Temporal, and OpenTelemetry.',
    ],
    challengeAndLearning:
      'The product is intentionally early, so the challenge is honesty: show a serious architecture and prototype without pretending the backend/control plane is already connected.',
    links: [
      { type: 'demo', label: 'Demo Link', url: 'https://stackcendra.com' },
      { type: 'source', label: 'GitHub', url: 'https://github.com/keshav-019/stackcendra' },
      { type: 'source', label: 'Wiki', url: 'https://github.com/keshav-019/stackcendra/wiki' },
    ],
  },
]
