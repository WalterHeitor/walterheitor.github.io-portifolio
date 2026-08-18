import type { IconType } from 'react-icons'
import { FaAws, FaDatabase, FaJava } from 'react-icons/fa'
import { FiInbox, FiLayers, FiSend } from 'react-icons/fi'
import {
  SiApachekafka,
  SiDocker,
  SiGitlab,
  SiHibernate,
  SiJunit5,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiSpring,
  SiSpringboot,
} from 'react-icons/si'

export const profile = {
  name: 'Walter Heitor Freitas Oliveira',
  role: 'Desenvolvedor Back-end Sênior',
  tagline:
    'Mais de 5 anos construindo microsserviços escaláveis e sistemas de alta performance para os setores financeiro e educacional.',
  location: 'Itumbiara, Goiás - Brasil',
  phone: '(64) 9.9344-7955',
  email: 'walterheitorfo@gmail.com',
  github: 'https://github.com/walterheitor',
  linkedin: 'https://www.linkedin.com/in/walter-heitor-3ba4b3149',
}

export const about = [
  'Desenvolvedor back-end com mais de 5 anos de experiência no desenvolvimento de microsserviços escaláveis e sistemas de alta performance em ambientes financeiros e educacionais. Especialista em Kotlin, Java e Python, com proficiência em arquiteturas reativas (Spring WebFlux), mensageria (Kafka, RabbitMQ, SQS/SNS) e cloud AWS.',
  'Atualmente na Vertigo Tecnologia como Desenvolvedor Back-end Sênior, alocado no cliente RNP (Rede Nacional de Ensino e Pesquisa), atuando no projeto Internet Brasil — sistema crítico de distribuição de chips de internet para estudantes de baixa renda, vinculado ao Ministério das Comunicações. Antes disso, atuei na Zup Innovation, alocado no Itaú Unibanco, desenvolvendo microsserviços para fluxos críticos de simulação, contratação e efetivação de produtos financeiros.',
  'Forte domínio de bancos de dados relacionais e NoSQL (PostgreSQL, MongoDB, DynamoDB), mensageria (Kafka, RabbitMQ, SQS/SNS) e práticas de DevOps (Docker, Kubernetes, GitLab CI/CD), com foco em qualidade de código, testes automatizados e entrega contínua.',
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
      { name: 'Spring WebFlux', icon: SiSpring },
      { name: 'Micronaut', icon: FiLayers },
      { name: 'JPA', icon: FiLayers },
      { name: 'Hibernate', icon: SiHibernate },
    ],
  },
  {
    title: 'Bancos de Dados',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'DynamoDB', icon: FaDatabase },
      { name: 'MySQL', icon: SiMysql },
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
  {
    title: 'Testes',
    items: [{ name: 'JUnit 5', icon: SiJunit5 }],
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
    company: 'Vertigo Tecnologia',
    context: 'Desenvolvedor Back-end Sênior · Alocado no cliente RNP (Rede Nacional de Ensino e Pesquisa)',
    period: '08/2023 — Atual',
    highlights: [
      'Desenvolvimento de aplicação monolítica com Kotlin e Spring Boot para sistema de controle de benefícios de chips de internet para estudantes.',
      'CRUDs completos (cadastro, update, busca por ID e listagens paginadas) com Projections, Specifications e Migrations, e criação de índices no PostgreSQL para consultas de alta performance.',
      'Integração com APIs externas e processamento de arquivos/eventos com AWS Lambda (Java e Python), SQS e SNS, garantindo automação e escalabilidade dos fluxos.',
      'Consumers assíncronos (SQS/SNS) para eventos de ativação, suspensão e cancelamento de chips, além de Schedulers e Batch Jobs para processos automatizados.',
      'Documentação ágil de sistemas (HUs, PRDs de Regras de Negócio) e práticas DevOps com Docker e pipelines CI/CD no GitLab.',
      'Destaque: Projeto Internet Brasil — sistema crítico de distribuição de chips para estudantes de baixa renda em âmbito nacional, vinculado ao Ministério das Comunicações e operado pela RNP.',
    ],
  },
  {
    company: 'Zup Innovation',
    context: 'Desenvolvedor Back-end Pleno · Alocado no cliente Itaú Unibanco (domínio financeiro)',
    period: '01/2021 — 05/2023',
    highlights: [
      'Microsserviços escaláveis com Kotlin (Micronaut) e Java (Spring Boot Cloud) para fluxos críticos de simulação, contratação e efetivação de produtos financeiros.',
      'Mensageria com Apache Kafka e RabbitMQ, garantindo entrega confiável e orquestração de eventos entre microsserviços distribuídos de alta criticidade.',
      'Consumers SQS/SNS e componentes Worker para processamento assíncrono e orquestração de processos batch em domínios financeiros.',
      'Desenvolvimento de BFF (Back-end for Front-end) com Kotlin e Spring Boot, integrando front-end e microsserviços com baixo acoplamento.',
      'Testes unitários com JUnit 5 mantendo alta cobertura, além de automação de processos internos com Python (Pandas) e VBA.',
      'Gerenciamento de ambientes com Docker e Kubernetes e manutenção de pipelines CI/CD no GitLab.',
    ],
  },
]

export interface EducationItem {
  degree: string
  institution: string
  year: string
}

export const education: EducationItem[] = [
  { degree: 'Pós-graduação — Arquitetura de Software em Java', institution: 'FACINT', year: '2026' },
  { degree: 'Pós-graduação — Engenharia de Software', institution: 'UniAmérica Descomplica', year: '2025' },
  { degree: 'Bacharelado — Sistemas de Informação', institution: 'ULBRA', year: '2016' },
]

export interface CertificationItem {
  title: string
  issuer: string
  year: string
  items: string
}

export const certifications: CertificationItem[] = [
  {
    title: 'Inteligência Artificial',
    issuer: 'Anthropic',
    year: '2026',
    items: 'AI Fluency, Claude 101, Introduction to MCP, Model Context Protocol: Advanced Topics, Claude Code in Action, Claude with the Anthropic API, Introduction to Agent Skills.',
  },
  {
    title: 'Java, Arquitetura e Boas Práticas',
    issuer: 'Alura / Udemy / FACINT',
    year: '2023–2024',
    items: 'Formação em arquitetura de software Java e boas práticas de desenvolvimento.',
  },
  {
    title: 'Kotlin',
    issuer: 'Alura',
    year: '2023–2024',
    items: 'Formação Linguagem Kotlin, Kotlin + Spring (testes, segurança, persistência, OOP).',
  },
  {
    title: 'AWS & DevOps',
    issuer: 'Alura',
    year: '2023–2024',
    items: 'Lambda, S3, RDS, DynamoDB, VPC, EC2, IaC com CDK, Formação DevOps, Prometheus e Grafana.',
  },
  {
    title: 'Mensageria',
    issuer: 'Alura / Udemy / ZupEdu',
    year: '2022–2023',
    items: 'Formação Apache Kafka, Kafka para desenvolvedores Java, RabbitMQ com Spring.',
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
    name: 'Internet Brasil',
    description:
      'Sistema crítico de distribuição de chips de internet para estudantes de baixa renda em âmbito nacional, vinculado ao Ministério das Comunicações e operado pela RNP. Atuação na Vertigo Tecnologia.',
    tags: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'AWS Lambda', 'SQS/SNS'],
  },
  {
    name: 'Simulações Financeiras',
    description:
      'Microsserviços para simulações de produtos financeiros do Itaú Unibanco, com Micronaut + Kotlin e persistência em AWS DynamoDB. Atuação na Zup Innovation.',
    tags: ['Kotlin', 'Micronaut', 'DynamoDB'],
  },
  {
    name: 'Contratação',
    description:
      'Microsserviços Java + Spring Boot Cloud para fluxos de contratação de produtos financeiros, com orquestração de eventos via Kafka e RabbitMQ. Atuação na Zup Innovation.',
    tags: ['Java', 'Spring Boot Cloud', 'Kafka', 'RabbitMQ'],
  },
  {
    name: 'Efetivações',
    description:
      'Microsserviços para efetivação de contratos financeiros com alta cobertura de testes (JUnit 5) e integração Kafka/RabbitMQ. Atuação na Zup Innovation.',
    tags: ['Java', 'JUnit 5', 'Kafka', 'RabbitMQ'],
  },
]
