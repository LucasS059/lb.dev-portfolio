export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  images: string[]
  screenshotType: 'mobile' | 'desktop'
  links: {
    github?: string
    live?: string
  }
  highlights: string[]
  status: 'production' | 'academic' | 'freelance'
}

export interface StackItem {
  name: string
  category: 'backend' | 'frontend' | 'mobile' | 'infra' | 'database'
  level: 'primary' | 'secondary'
}
