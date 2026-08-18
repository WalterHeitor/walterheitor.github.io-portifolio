import type { IconType } from 'react-icons'
import { FaAws, FaDatabase, FaJava } from 'react-icons/fa'
import { FiInbox, FiLayers, FiSend } from 'react-icons/fi'
import {
  SiApachekafka,
  SiDocker,
  SiGitlab,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiSpring,
  SiSpringboot,
} from 'react-icons/si'

export const profile = {
  name: 'Walter Heitor',
  role: 'Back-end Developer Sênior',
  tagline: 'Construindo sistemas distribuídos resilientes para os setores financeiro e educacional.',
  location: 'Brasil',
  email: 'sniperdolance@gmail.com',
  github: 'https://github.com/walterheitor',
  linkedin: 'https://www.linkedin.com/in/walterheitor',
}

export const about = [
  'Desenvolvedor back-end sênior com experiência na construção de sistemas distribuídos de alta escala para os setores financeiro e educacional. Atuação sólida com Kotlin, Java e Python, projetando serviços orientados a eventos com Spring Boot, Micronaut e Spring WebFlux.',
  'Passagens por empresas como Zup Innovation (atuando no contexto Itaú Unibanco) e Vertigo Tecnologia/RNP, onde desenvolvi soluções críticas envolvendo processamento assíncrono, mensageria e arquiteturas cloud-native na AWS.',
  'Forte domínio de bancos de dados relacionais e NoSQL (PostgreSQL, MongoDB, DynamoDB), mensageria (Kafka, RabbitMQ) e práticas de DevOps (Docker, Kubernetes, GitLab CI/CD), com foco em qualidade, observabilidade e entrega contínua.',
]

export interface StackItem {
  name: string
  icon: IconType
}

export interface StackCategory {
  title: string
  items: StackItem[]
}

export const stack: StackCategory[] = [
  {
    title: 'Linguagens',
    items: [
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Micronaut', icon: FiLayers },
      { name: 'Spring WebFlux', icon: SiSpring },
    ],
  },
  {
    title: 'Bancos de Dados',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'DynamoDB', icon: FaDatabase },
    ],
  },
  {
    title: 'Cloud & Mensageria',
    items: [
      { name: 'AWS Lambda', icon: FaAws },
      { name: 'SQS', icon: FiSend },
      { name: 'SNS', icon: FiInbox },
      { name: 'Apache Kafka', icon: SiApachekafka },
      { name: 'RabbitMQ', icon: SiRabbitmq },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'GitLab CI/CD', icon: SiGitlab },
    ],
  },
]

export interface ExperienceItem {
  company: string
  context: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Zup Innovation',
    context: 'Squad dedicado ao Itaú Unibanco · Setor Financeiro',
    period: '2022 — Atual',
    highlights: [
      'Desenvolvimento de serviços back-end críticos em Kotlin e Java com Spring Boot/WebFlux para o maior banco privado da América Latina.',
      'Modelagem de fluxos orientados a eventos com Apache Kafka, garantindo consistência e resiliência em cenários de alta concorrência.',
      'Evolução de pipelines de CI/CD no GitLab e adoção de práticas de observabilidade e deploy em ambientes Kubernetes.',
    ],
  },
  {
    company: 'Vertigo Tecnologia / RNP',
    context: 'Setor Educacional',
    period: '2020 — 2022',
    highlights: [
      'Construção de APIs e microsserviços em Java/Python para plataformas educacionais de grande escala.',
      'Integração com filas (RabbitMQ) e bancos de dados relacionais e não relacionais (PostgreSQL, MongoDB).',
      'Automação de processos de deploy e infraestrutura como código com Docker.',
    ],
  },
]

export interface ProjectItem {
  name: string
  description: string
  tags: string[]
  link?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'Em breve',
    description: 'Detalhes deste projeto serão adicionados em breve.',
    tags: ['Kotlin', 'Spring Boot'],
  },
  {
    name: 'Em breve',
    description: 'Detalhes deste projeto serão adicionados em breve.',
    tags: ['AWS', 'Kafka'],
  },
  {
    name: 'Em breve',
    description: 'Detalhes deste projeto serão adicionados em breve.',
    tags: ['Python', 'DynamoDB'],
  },
]
