import type { Project } from '../types'

import imgWassaquizDash    from '../assets/fotos_projetos/admin-dash.png'
import imgWassaquizJogador from '../assets/fotos_projetos/dash-jogador.png'
import imgWassaquizAnti    from '../assets/fotos_projetos/anti.png'
import imgWassaquizApi     from '../assets/fotos_projetos/api-docs.png'

import imgFitmindHome    from '../assets/fotos_projetos/Home_fitmind.png'
import imgFitmindExplore from '../assets/fotos_projetos/Explorar_fitmind.png'
import imgFitmindTreino  from '../assets/fotos_projetos/gravar_treino_fitmind.png'

import imgFsales from '../assets/fotos_projetos/Landingpage-fsales.png'

export const projects: Project[] = [
  {
    id: 'wassaquiz',
    title: 'WassaQuiz',
    description: 'Plataforma SaaS white-label de gamificação com IA — quizzes, sorteios, ranking e painel administrativo completo.',
    longDescription: `Produto SaaS desenvolvido por mim durante o estágio na Wassamara. Permite que empresas criem e publiquem quizzes gamificados personalizados com identidade visual própria.

Diferenciais técnicos:
→ Blitz Engine: motor de pontuação com lógica idêntica no cliente e servidor, impedindo manipulação
→ Anti-cheat multicamadas: reaction time guard, rate limit por usuário e scoring server-side
→ Integração com OpenAI (gpt-4o-mini) com controle de custo diário/mensal e geração de quizzes por IA
→ Sistema de sorteios com randomização criptograficamente segura (crypto.randomInt) e transações com lock pessimista
→ App mobile em Expo/React Native, painel admin completo e deploy automatizado no Render
→ 107 endpoints documentados no API Playground interno`,
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React', 'React Native', 'Docker', 'OpenAI'],
    image: imgWassaquizDash,
    images: [imgWassaquizDash, imgWassaquizJogador, imgWassaquizAnti, imgWassaquizApi],
    screenshotType: 'desktop',
    links: {},
    highlights: [
      'SaaS em produção',
      'Anti-cheat multicamadas',
      'IA com controle de custo',
      '107 endpoints documentados',
    ],
    status: 'production',
  },
  {
    id: 'fitmind',
    title: 'FitMind',
    description: 'App mobile multiplataforma de incentivo à atividade física com IA conversacional, mapa de locais e monitoramento de treinos.',
    longDescription: `Aplicativo mobile desenvolvido em equipe como projeto integrador da Mauá — une monitoramento físico, mapa de locais esportivos e IA conversacional personalizada.

Destaques técnicos:
→ IA conversacional via Gemini 2.5 Flash com histórico de treino do usuário injetado como contexto
→ Monitoramento de passos, distância, calorias e IMC com histórico estruturado
→ Mapa interativo com filtro por modalidade esportiva e navegação até o local
→ Autenticação completa com recuperação de senha via Supabase
→ MVP validado com testes funcionais internos`,
    tags: ['React Native', 'Expo', 'PostgreSQL', 'Supabase', 'Gemini API', 'JavaScript'],
    image: imgFitmindHome,
    images: [imgFitmindHome, imgFitmindExplore, imgFitmindTreino],
    screenshotType: 'mobile',
    links: {},
    highlights: [
      'IA com contexto de treino',
      'GPS em tempo real',
      'Mapa interativo',
      'MVP funcional entregue',
    ],
    status: 'academic',
  },
  {
    id: 'metro-sp',
    title: 'Metrô SP — Extintores',
    description: 'App multiplataforma apresentado a representantes do Metrô de SP para controle e inspeção de extintores via QR Code.',
    longDescription: `Aplicativo multiplataforma desenvolvido em equipe e apresentado a representantes do Metrô de São Paulo — sistema de controle e inspeção de extintores de incêndio.

Destaques:
→ Geração e leitura de QR Codes vinculados a cada equipamento
→ Gestão de manutenções, validade e localização dos dispositivos
→ Integração backend com Node.js + MySQL com foco em segurança
→ Frontend em Flutter com atenção à responsividade e usabilidade
→ Entregue em 5 meses com metodologia Scrum e versionamento no Git`,
    tags: ['Flutter', 'Node.js', 'MySQL', 'REST API', 'Git', 'Scrum'],
    image: '',
    images: [],
    screenshotType: 'desktop',
    links: {},
    highlights: [
      'Apresentado ao Metrô SP',
      'QR Code por equipamento',
      'Entregue em 5 meses',
      'Cliente real',
    ],
    status: 'academic',
  },
  {
    id: 'fsales',
    title: 'FSALES Advogados',
    description: 'Site institucional desenvolvido para escritório de advocacia especializado em Direito Empresarial, Tributário e Civil.',
    longDescription: `Site institucional desenvolvido como freelance para o escritório FSALES Advogados, liderado pelo Dr. Francisco Arnaldo Sales Barboza.

O projeto teve foco em:
→ Design profissional e confiável para o segmento jurídico
→ Estrutura clara de serviços e diferenciais do escritório
→ CTAs estratégicos para agendamento de consultas
→ Responsivo e otimizado para todos os dispositivos`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: imgFsales,
    images: [imgFsales],
    screenshotType: 'desktop',
    links: {},
    highlights: [
      'Freelance real',
      'Segmento jurídico',
      'Design profissional',
      'Totalmente responsivo',
    ],
    status: 'freelance',
  },
]
