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
    summary: 'Um portfólio técnico projetado para demonstrar domínio em arquitetura front-end, experiência do usuário e engenharia de performance.',
    description: 'Este projeto foi concebido como um artefato técnico, não apenas como um site institucional. Cada decisão — da arquitetura ao CSS — foi pensada para equilibrar clareza, performance e manutenibilidade. A aplicação explora conceitos modernos do ecossistema React para entregar uma experiência fluida, responsiva e orientada à conversão, com foco real em legibilidade, escaneabilidade e SEO.',
    problem: 'Falta de uma plataforma centralizada que comunique competência técnica de forma objetiva, sem ruído visual ou textos genéricos, permitindo que recrutadores e clientes entendam rapidamente o valor entregue.',
    solution: 'Construção de uma SPA performática e semanticamente estruturada, utilizando React e Vite para carregamento rápido, Tailwind para consistência visual e CSS moderno para microinterações e sensação de aplicação nativa.',
    features: [
      'Animações progressivas baseadas em Intersection Observer, sem impacto negativo em performance',
      'Layout responsivo com abordagem mobile-first e foco em legibilidade',
      'Integração direta com WhatsApp para redução de atrito no contato',
      'Arquitetura de componentes reutilizáveis e previsíveis'
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: ['UX orientado à leitura', 'Performance real', 'SEO semântico'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: [
      '/images/portifolio/1.png',
      '/images/portifolio/2.png',
      '/images/portifolio/3.png',
      '/images/portifolio/4.png'
    ]
    // liveUrl: 'https://kevinyjoubert.netlify.app/'
  },
  {
    slug: 'cardapio-digital',
    title: 'Cardápio Digital',
    summary:
      'Plataforma completa para restaurantes que centraliza pedidos, gestão de cardápio e divisão de contas em tempo real.',
    description:
      'Sistema desenvolvido para substituir o fluxo tradicional de pedidos em restaurantes por uma solução digital integrada. A aplicação conecta clientes, garçons, cozinha e gerência em um único ecossistema, reduzindo erros operacionais e aumentando a eficiência do atendimento.',
    problem:
      'Processos manuais de anotação e comunicação entre mesa, garçom e cozinha geravam retrabalho, inconsistência de pedidos, demora no atendimento e falta de controle gerencial.',
    solution:
      'Implementação de um sistema distribuído com tablets nas mesas para autoatendimento, painel de controle para a cozinha e interface administrativa para gestão dinâmica do cardápio, preços e regras de cobrança.',
    stack: ['Java', 'React', 'Oracle', 'Tailwind'],
    highlights: [
      'Pedidos enviados diretamente da mesa para a cozinha e garçom',
      'Atualização em tempo real de preços, fotos e descrições do cardápio',
      'Divisão de conta personalizada por cliente ou por itens',
      'Cálculo automático do valor total com taxa de serviço'
    ],
    technologies: ['Java', 'React', 'Oracle', 'Tailwind'],
    images: [
      '/images/cardapio-digital/1.png',
      '/images/cardapio-digital/2.png',
      '/images/cardapio-digital/3.png',
      '/images/cardapio-digital/4.png',
      '/images/cardapio-digital/5.png'
    ],
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