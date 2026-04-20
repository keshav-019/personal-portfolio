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
  'Open to opportunities',
  'Project Intern @ Oracle',
  'M.Tech (AI & Data Science) @ NIT Durgapur',
]

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    label: 'Industry Experience',
    value: '3+ Years',
    detail: 'Shipped enterprise and embedded software across internships and full-time roles.',
  },
  {
    label: 'Case Studies',
    value: '3 Deep Dives',
    detail: 'Each project explains the problem, engineering decisions, and measurable outcomes.',
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
    title: 'Frontend Architecture',
    description: 'Building scalable React/Next.js interfaces that remain fast under data-heavy workloads.',
    skills: ['React', 'Next.js', 'TypeScript', 'State Management', 'Performance Optimization'],
  },
  {
    title: 'API And Backend Integration',
    description: 'Designing reliable API interactions and backend workflows for production web applications.',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Spring Boot'],
  },
  {
    title: 'Applied AI And IoT Systems',
    description: 'Combining embedded systems with ML pipelines to solve real-world sensing and automation problems.',
    skills: ['Python', 'TensorFlow', 'ESP32', 'Raspberry Pi', 'Data Science'],
  },
]

export const SUPPORTING_TOOLS: SkillGroup[] = [
  {
    title: 'Delivery And Collaboration',
    description: 'Tooling I use to ship production-ready software in teams.',
    skills: ['Git', 'Docker', 'Firebase', 'Vercel', 'Jira', 'Confluence'],
  },
]

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    title: 'Design Around User Workflows',
    description: 'I start from high-friction user actions and optimize the journey before polishing visuals.',
    tradeoff: 'May delay visual details early, but it prevents pretty-yet-useless interfaces.',
    example: 'In API tooling projects, request history and environment handling came before aesthetic tweaks.',
  },
  {
    title: 'Optimize Perceived Performance',
    description: 'Fast feels better than complex. I reduce blocking UI work and prioritize smooth interactions.',
    tradeoff: 'Adds engineering effort in state structure and rendering boundaries.',
    example: 'On dashboard-style pages, I split heavy components and use progressive loading patterns.',
  },
  {
    title: 'Document Decisions And Tradeoffs',
    description: 'I capture why a stack or pattern was chosen so maintenance is easier for the next engineer.',
    tradeoff: 'Slightly slower implementation, much faster onboarding and debugging later.',
    example: 'For each flagship project, I include stack choices, constraints, and what I would improve next.',
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
    role: 'Project Intern',
    company: 'Oracle',
    duration: 'Jan 2026 - Present',
    description: 'Contributing to Aconex features, bug fixes, and OCI deployment workflows in production systems.',
    highlights: [
      'Implemented product features across frontend and backend modules.',
      'Resolved defects in customer-facing workflows with production log validation.',
      'Worked with RapidUI, Spring Boot, and Oracle ecosystem tooling.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Distronix',
    duration: 'Apr 2022 - May 2025',
    description: 'Built and maintained software for enterprise operations, automation hardware, and public systems.',
    highlights: [
      'Built backend services for an employee management system using Node.js.',
      'Developed control workflows for boom barrier automation with ESP32 integration.',
      'Maintained Raspberry Pi-based public information systems in production.',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'REST Project',
    summary: 'A fast API workbench inspired by Postman with developer-first workflows.',
    image: '/images/rest-project.png',
    problem:
      'Manual API testing was fragmented across multiple tools and repeated setup consumed significant debugging time.',
    role:
      'I designed and built the frontend experience, request lifecycle flows, and reusable components for request/response inspection.',
    impact:
      'Created a single workspace for API exploration, reducing repetitive setup and making endpoint validation significantly quicker.',
    keyFeatures: [
      'Request collections with organized endpoints',
      'Environment variable support for reusable configurations',
      'Response viewer with readable payload formatting',
      'Intuitive method-based request builder',
    ],
    techStack: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Vercel'],
    technicalHighlights: [
      'Structured request state to support repeatable test workflows.',
      'Built reusable UI patterns for request editing and response rendering.',
      'Designed for quick switching across endpoints without context loss.',
    ],
    challengeAndLearning:
      'Balancing flexibility with simplicity was the hardest part. I learned to progressively reveal advanced features without overwhelming new users.',
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://the-rest-project.vercel.app' },
      { type: 'source', label: 'GitHub', url: 'https://github.com/keshav-019/the-rest-project' },
    ],
  },
  {
    title: 'Sound Classification With ESP32S3',
    summary: 'An edge-ML system that classifies ambient sound categories directly on embedded hardware.',
    image: '/images/sound-classification.png',
    problem:
      'Real-time sound classification often depends on cloud inference, which introduces latency and connectivity constraints.',
    role:
      'I implemented the embedded inference pipeline, model integration, and signal-processing workflow on ESP32 hardware.',
    impact:
      'Enabled local inference for six sound categories, demonstrating a low-latency offline pipeline for edge environments.',
    keyFeatures: [
      'Audio capture and preprocessing on-device',
      'Model inference tuned for ESP32S3 constraints',
      'Category classification across six sound classes',
      'Portable architecture for edge deployment experiments',
    ],
    techStack: ['ESP32S3', 'TensorFlow Lite', 'Python', 'Embedded C/C++', 'IoT'],
    technicalHighlights: [
      'Optimized inference flow for constrained memory and compute.',
      'Handled signal pre-processing to improve prediction stability.',
      'Validated performance across varied ambient sound conditions.',
    ],
    challengeAndLearning:
      'The key challenge was balancing model quality with hardware limits. I learned how quantization and preprocessing choices directly affect edge inference reliability.',
    links: [
      {
        type: 'source',
        label: 'GitHub',
        url: 'https://github.com/keshav-019/sound-classification-using-esp32',
      },
    ],
  },
  {
    title: 'Learn Project',
    summary: 'A course delivery platform with progress-focused student workflows.',
    image: '/images/learn-project.jpg',
    problem:
      'Learners needed a lightweight platform to discover courses, track progress, and continue content without friction.',
    role:
      'I built major frontend flows, integrated backend endpoints, and shaped the user journey from course discovery to consumption.',
    impact:
      'Delivered a functional e-learning experience with course browsing, enrollment-style flow, and student-friendly navigation.',
    keyFeatures: [
      'Course discovery and detail views',
      'Structured learning flow for lessons',
      'Student-oriented interface for continued progress',
      'Admin-ready foundation for future content management',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    technicalHighlights: [
      'Designed reusable page sections to speed up feature additions.',
      'Integrated API-driven content rendering for dynamic course data.',
      'Planned modular backend expansion paths for analytics and recommendations.',
    ],
    challengeAndLearning:
      'Keeping the UI simple while preparing for future scale taught me to favor modular components and predictable data contracts early.',
    links: [
      {
        type: 'demo',
        label: 'Live Demo',
        url: 'https://e-learning-frontend-5q3s167zd-survivor480s-projects.vercel.app/',
      },
      { type: 'source', label: 'GitHub', url: 'https://github.com/survivor480/e-learning-frontend' },
    ],
  },
]
