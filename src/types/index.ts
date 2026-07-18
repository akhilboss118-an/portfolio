export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  category: SkillCategory
  icon: string
}

export type SkillCategory =
  | 'Programming'
  | 'Game Development'
  | 'Embedded Systems'
  | 'AI'
  | 'Tools'

export interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'internship' | 'learning'
}

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  image: string
  gradient: string
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  featured?: boolean
}

export type ProjectCategory =
  | 'All'
  | 'AI'
  | 'IoT'
  | 'Embedded'
  | 'Games'
  | 'Web'
  | 'Electronics'

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  gradient: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  initials: string
}

export interface Stat {
  value: number
  label: string
  suffix?: string
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  gradient: string
}

export interface GalleryItem {
  title: string
  category: string
  gradient: string
  image: string
}

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  gradient: string
  slug: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
