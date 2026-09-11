export type Profile = {
  name: string
  role: string
  tagline: string
  location: string
  available: boolean
  email: string
  phone: string
  linkedin: string
  github: string
  cvUrl: string
  bio: string[]
}

export type Experience = {
  role: string
  company: string
  start: string
  end: string
  bullets: string[]
  kind: 'dev' | 'vfx'
}

export type Project = {
  name: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  icon: string
}

export type Link = {
  label: string
  url: string
  icon: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type Education = {
  start: string
  end: string
  title: string
  school: string
}