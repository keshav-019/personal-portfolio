export interface Education {
  degree: string
  institution: string
  duration: string
  description: string
}

export interface Experience {
  role: string
  company: string
  duration: string
  description: string
  highlights?: string[]
}

export interface ProjectLink {
  type: 'demo' | 'source'
  label: string
  url: string
}

export interface Project {
  title: string
  summary: string
  image: string
  problem: string
  role: string
  impact: string
  keyFeatures: string[]
  techStack: string[]
  technicalHighlights: string[]
  challengeAndLearning: string
  links: ProjectLink[]
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  cta: string
}

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

export interface EngineeringPrinciple {
  title: string
  description: string
  tradeoff: string
  example: string
}

export interface TrustSignal {
  label: string
  value: string
  detail: string
}
