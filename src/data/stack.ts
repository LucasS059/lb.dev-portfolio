import type { StackItem } from '../types'

export const stack: StackItem[] = [
  // Backend — primary
  { name: 'Node.js', category: 'backend', level: 'primary' },
  { name: 'TypeScript', category: 'backend', level: 'primary' },
  { name: 'JavaScript', category: 'backend', level: 'primary' },
  { name: 'PHP', category: 'backend', level: 'secondary' },
  { name: 'C# / .NET', category: 'backend', level: 'secondary' },
  { name: 'REST API', category: 'backend', level: 'primary' },

  // Frontend
  { name: 'React', category: 'frontend', level: 'primary' },
  { name: 'HTML & CSS', category: 'frontend', level: 'primary' },

  // Mobile
  { name: 'React Native', category: 'mobile', level: 'primary' },
  { name: 'Expo', category: 'mobile', level: 'primary' },
  { name: 'Flutter', category: 'mobile', level: 'secondary' },

  // Database
  { name: 'PostgreSQL', category: 'database', level: 'primary' },
  { name: 'MySQL', category: 'database', level: 'primary' },
  { name: 'MongoDB', category: 'database', level: 'secondary' },

  // Infra
  { name: 'Docker', category: 'infra', level: 'primary' },
  { name: 'Git', category: 'infra', level: 'primary' },
  { name: 'GitHub Actions', category: 'infra', level: 'secondary' },
  { name: 'Linux', category: 'infra', level: 'secondary' },
]

export const categoryLabels: Record<StackItem['category'], string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  mobile: 'Mobile',
  database: 'Banco de Dados',
  infra: 'Infra & DevOps',
}
