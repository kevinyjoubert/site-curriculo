export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  problem: string
  solution: string
  stack: string[]
  highlights: string[]
  images: string[]
  features?: string[]
  technologies?: string[]
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'site-curriculo',
    title: 'Portfólio Profissional',
    summary: 'A plataforma onde você está agora. Desenvolvida para demonstrar minhas habilidades em UX, Performance e Código Limpo.',
    description: 'Este projeto não é apenas uma vitrine, é uma demonstração técnica. Focado na experiência do usuário e na conversão, utilizei as tecnologias mais modernas do ecossistema React para garantir performance máxima, animações fluidas e SEO otimizado.',
    problem: 'Necessidade de um canal centralizado e profissional para apresentar projetos complexos e facilitar o contato direto com clientes potenciais.',
    solution: 'Desenvolvimento de uma SPA (Single Page Application) performática com React, utilizando Tailwind para estilização avançada e CSS moderno para uma experiência de uso "app-like".',
    features: [
      'Animações de entrada e scroll (Intersection Observer)',
      'Design Responsivo e Layout "Mobile First"',
      'Integração direta com WhatsApp API',
      'Componentização Atômica e Reutilizável'
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: ['UX/UI Design', 'Performance', 'SEO'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/portifolio/1.png', '/images/portifolio/2.png', '/images/portifolio/3.png', '/images/portifolio/4.png'],
    liveUrl: 'https://kevinyjoubert.netlify.app/'
  },
  {
    slug: 'cardapio-digital',
    title: 'Cardápio Digital',
    summary:
      'Sistema completo para restaurantes com pedidos por tablet e integração com cozinha.',
    description:
      'Projeto desenvolvido para digitalizar o fluxo de pedidos em restaurantes, substituindo processos manuais por uma solução integrada.',
    problem:
      'Pedidos manuais geravam erros frequentes, atrasos no atendimento e falta de controle sobre o status dos pratos.',
    solution:
      'Criação de um sistema com tablets nas mesas, painel de pedidos na cozinha e backend centralizado.',
    stack: ['Java', 'React', 'Oracle', 'Tailwind'],
    highlights: [
      'Pedidos em tempo real',
      'Integração com cozinha',
      'Arquitetura modular',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/cardapio/1.png', '/images/cardapio/2.png', '/images/cardapio/3.png'],
  },
  {
    slug: 'integracao-erp',
    title: 'Serviço de Integração ERP',
    summary:
      'Serviço backend para sincronização de dados entre sistemas internos e ERP.',
    description:
      'Responsável por manter dados consistentes entre sistemas legados e ERP corporativo.',
    problem:
      'Inconsistência de dados causada por integrações manuais e rotinas isoladas.',
    solution:
      'Serviço backend com sincronização automatizada, logs e reprocessamento.',
    stack: ['Java', 'Spring', 'SQL Server', 'MySQL'],
    highlights: [
      'Logs estruturados',
      'Tratamento de falhas',
      'Reprocessamento seguro',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: [],
  },
  {
    slug: 'automacao-processos',
    title: 'Automação de Processos',
    summary:
      'Automação de rotinas críticas para validação e auditoria de dados.',
    description:
      'Criação de rotinas automatizadas para eliminar tarefas manuais repetitivas.',
    problem:
      'Alto índice de erro humano e retrabalho em processos operacionais.',
    solution:
      'Scripts e serviços focados em validação, auditoria e padronização.',
    stack: ['Java', 'PL/SQL'],
    highlights: [
      'Redução de erros',
      'Auditoria automatizada',
      'Padronização',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/automacao-processos/1.png', '/images/automacao-processos/2.png', '/images/automacao-processos/3.png'],
  },
  {
    slug: 'dashboard-gerencial',
    title: 'Dashboard Gerencial',
    summary:
      'Dashboard web para visualização de indicadores operacionais.',
    description:
      'Painel para gestores acompanharem métricas em tempo real.',
    problem:
      'Informações espalhadas em relatórios e planilhas.',
    solution:
      'Dashboard centralizado com filtros e gráficos.',
    stack: ['React', 'Java', 'Oracle'],
    highlights: [
      'Indicadores em tempo real',
      'Filtros dinâmicos',
      'Interface limpa',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/cardapio/1.png', '/images/cardapio/2.png', '/images/cardapio/3.png'],
  },
  {
    slug: 'modulo-descontos',
    title: 'Módulo de Descontos',
    summary:
      'Módulo para aplicação e validação de descontos comerciais.',
    description:
      'Implementação de regras de desconto integradas ao fluxo de pedidos.',
    problem:
      'Descontos aplicados sem controle e validação.',
    solution:
      'Módulo com regras de negócio, permissões e auditoria.',
    stack: ['Java', 'Oracle', 'PL/SQL'],
    highlights: [
      'Validação por perfil',
      'Auditoria',
      'Regras centralizadas',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/automacao-processos/1.png', '/images/automacao-processos/2.png', '/images/automacao-processos/3.png'],
  },
  {
    slug: 'sincronizacao-bancos',
    title: 'Sincronização entre Bancos',
    summary:
      'Serviço de sincronização entre MySQL e SQL Server.',
    description:
      'Sincronização confiável entre bases distintas.',
    problem:
      'Bases divergentes causando inconsistência de dados.',
    solution:
      'Serviço com fallback, logs e histórico.',
    stack: ['Java', 'Spring', 'MySQL', 'SQL Server'],
    highlights: [
      'Fallback automático',
      'Histórico de falhas',
      'Consistência de dados',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/integracao-erp/1.png', '/images/integracao-erp/2.png', '/images/integracao-erp/3.png'],
  },
  {
    slug: 'extensao-intellij',
    title: 'Extensão para IntelliJ',
    summary:
      'Extensão para geração de scripts e XML a partir de modelos.',
    description:
      'Ferramenta para acelerar tarefas repetitivas de desenvolvimento.',
    problem:
      'Criação manual de scripts e estruturas padronizadas.',
    solution:
      'Extensão integrada ao IntelliJ para geração automática.',
    stack: ['Kotlin', 'Java'],
    highlights: [
      'Geração automática',
      'Padronização',
      'Produtividade',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/cardapio/1.png', '/images/cardapio/2.png', '/images/cardapio/3.png'],
  },
  {
    slug: 'servico-notificacoes',
    title: 'Serviço de Notificações',
    summary:
      'Serviço centralizado para envio de notificações.',
    description:
      'Sistema para disparo de notificações internas e externas.',
    problem:
      'Mensagens enviadas de forma dispersa e sem controle.',
    solution:
      'Serviço único com filas e logs.',
    stack: ['Java', 'Spring'],
    highlights: [
      'Fila de mensagens',
      'Logs centralizados',
      'Retry automático',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/integracao-erp/1.png', '/images/integracao-erp/2.png', '/images/integracao-erp/3.png'],
  },
  {
    slug: 'painel-cozinha',
    title: 'Painel da Cozinha',
    summary:
      'Painel para acompanhamento de pedidos em tempo real.',
    description:
      'Interface dedicada para controle do fluxo de preparo.',
    problem:
      'Falta de visibilidade no andamento dos pedidos.',
    solution:
      'Painel visual com status e alertas.',
    stack: ['React', 'Java'],
    highlights: [
      'Atualização em tempo real',
      'Status visual',
      'Agilidade operacional',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/cardapio/1.png', '/images/cardapio/2.png', '/images/cardapio/3.png'],
  },
  {
    slug: 'relatorios-operacionais',
    title: 'Relatórios Operacionais',
    summary:
      'Geração de relatórios operacionais e financeiros.',
    description:
      'Relatórios customizados para apoio à decisão.',
    problem:
      'Dependência excessiva de planilhas manuais.',
    solution:
      'Relatórios automatizados com filtros.',
    stack: ['Java', 'Oracle', 'iReport'],
    highlights: [
      'Automação',
      'Filtros avançados',
      'Exportação',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: ['/images/automacao-processos/1.png', '/images/automacao-processos/2.png', '/images/automacao-processos/3.png'],
  },
]