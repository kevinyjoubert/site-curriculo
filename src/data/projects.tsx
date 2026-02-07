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
    stack: ['Java', 'React', 'Oracle - Banco de Dados', 'Tailwind'],
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
    slug: 'dashboard-gerencial',
    title: 'Dashboard Gerencial (DRE)',
    summary:
      'Plataforma analítica para acompanhamento financeiro com foco em DRE gerencial, obras e projetos.',
    description:
      'Sistema desenvolvido para transformar dados financeiros brutos em informações estratégicas. O dashboard consolida diferentes visões de DRE — gerencial, por obras e por projetos — permitindo análises comparativas, acompanhamento de resultados e suporte à tomada de decisão.',
    problem:
      'A análise financeira dependia de planilhas dispersas e relatórios estáticos, dificultando a leitura do resultado real, a comparação entre períodos e o controle por centro de custo.',
    solution:
      'Construção de um dashboard web centralizado, com indicadores financeiros estruturados, filtros dinâmicos e visualizações claras, possibilitando análises detalhadas por período, obra ou projeto.',
    stack: ['React', 'Java', 'Oracle'],
    highlights: [
      'DRE Gerencial consolidado',
      'DRE por obra e por projeto',
      'Análise financeira por período e centro de custo',
      'Visualização clara de receitas, custos e resultados'
    ],
    technologies: ['React', 'Java', 'Oracle'],
    images: [],
  },
  {
    slug: 'pre-protocolo-notas',
    title: 'Processo de Pré-Protocolo de Notas',
    summary:
      'Automação do fluxo de entrada e validação de notas fiscais antes do protocolo no ERP.',
    description:
      'Solução desenvolvida para estruturar e validar o pré-protocolo de notas fiscais no ERP Sankhya, garantindo consistência de dados, redução de erros fiscais e padronização do processo antes da efetiva escrituração.',
    problem:
      'O processo manual de conferência e protocolo de notas gerava inconsistências, retrabalho e riscos fiscais devido à ausência de validações estruturadas.',
    solution:
      'Implementação de um fluxo automatizado em Java integrado ao ERP Sankhya, com regras de validação, persistência em banco Oracle e controle do status das notas antes do protocolo definitivo.',
    stack: ['ERP Sankhya', 'Java', 'Oracle'],
    highlights: [
      'Validação prévia de dados fiscais',
      'Redução de erros no protocolo de notas',
      'Processo padronizado e rastreável',
      'Integração direta com ERP Sankhya'
    ],
    technologies: ['Java', 'Oracle', 'ERP Sankhya'],
    images: [],
  },
  {
    slug: 'dashboard-followup-compras',
    title: 'Dashboard de Follow-up de Compras',
    summary:
      'Painel gerencial para acompanhamento do ciclo de compras no ERP Sankhya.',
    description:
      'Dashboard desenvolvido para monitorar o andamento das compras, desde a solicitação até o recebimento, oferecendo visibilidade clara sobre prazos, pendências e gargalos operacionais.',
    problem:
      'Acompanhamento de compras dependia de consultas manuais e relatórios fragmentados, dificultando o controle de prazos e a tomada de decisão.',
    solution:
      'Criação de um dashboard centralizado com dados extraídos do ERP Sankhya e banco Oracle, permitindo análises rápidas do status das compras e identificação de atrasos ou inconsistências.',
    stack: ['ERP Sankhya', 'Oracle'],
    highlights: [
      'Acompanhamento do status das compras',
      'Identificação rápida de atrasos e pendências',
      'Visão consolidada do processo de compras',
      'Suporte à tomada de decisão'
    ],
    technologies: ['Oracle', 'ERP Sankhya'],
    images: [],
  },
  {
    slug: 'geracao-contratos',
    title: 'Tela de Geração de Contratos',
    summary:
      'Automação da geração de contratos a partir de dados do ERP.',
    description:
      'Funcionalidade desenvolvida para gerar contratos de forma automatizada e padronizada, utilizando dados estruturados do ERP Sankhya e relatórios formatados.',
    problem:
      'A geração manual de contratos era suscetível a erros, inconsistências de informações e retrabalho.',
    solution:
      'Implementação de uma tela integrada ao ERP Sankhya que consolida dados contratuais e gera documentos formatados diretamente a partir do banco Oracle, garantindo padronização e confiabilidade.',
    stack: ['ERP Sankhya', 'Java', 'Oracle'],
    highlights: [
      'Geração automática de contratos',
      'Padronização de documentos',
      'Redução de erros manuais',
      'Integração com relatórios formatados'
    ],
    technologies: ['Java', 'Oracle', 'ERP Sankhya'],
    images: [],
  },
  {
    slug: 'honorarios-advocacia',
    title: 'Gestão de Honorários com Assinatura Digital',
    summary:
      'Sistema para geração e assinatura digital de contratos de honorários advocatícios.',
    description:
      'Solução desenvolvida para automatizar a criação, gestão e assinatura de contratos de honorários advocatícios, integrando o ERP Sankhya com a API da D4Sign.',
    problem:
      'O processo manual de geração e assinatura de contratos advocatícios era lento, descentralizado e dependente de etapas externas.',
    solution:
      'Criação de uma tela integrada ao ERP Sankhya que gera contratos formatados, envia automaticamente para assinatura digital via API da D4Sign e mantém o controle do status no banco Oracle.',
    stack: ['ERP Sankhya', 'Java', 'Oracle', 'D4Sign API'],
    highlights: [
      'Geração automática de contratos de honorários',
      'Integração com assinatura digital (D4Sign)',
      'Rastreabilidade do status de assinatura',
      'Redução do tempo de formalização'
    ],
    technologies: ['Java', 'Oracle', 'ERP Sankhya', 'D4Sign API'],
    images: [],
  },
  {
    slug: 'ordem-retirada',
    title: 'Ordem de Retirada e Simples Remessa',
    summary:
      'Gestão do fluxo de retirada de mercadorias e geração de notas de simples remessa.',
    description:
      'Funcionalidade desenvolvida para controlar a liberação e retirada de mercadorias por clientes, organizando o fluxo logístico desde a separação até o envio ou retirada no local.',
    problem:
      'O controle manual das retiradas gerava divergências de estoque, atrasos na entrega e inconsistências fiscais na emissão de documentos.',
    solution:
      'Criação de uma tela integrada ao ERP Sankhya para acompanhamento das ordens de retirada, ajustes de entrega e geração automática de notas fiscais de simples remessa, com persistência e validações em banco Oracle.',
    stack: ['Angular', 'Java', 'Oracle', 'ERP Sankhya'],
    highlights: [
      'Controle de mercadorias para retirada',
      'Ajustes de envio e entrega ao cliente',
      'Geração de nota fiscal de simples remessa',
      'Integração logística e fiscal'
    ],
    technologies: ['Angular', 'Java', 'Oracle', 'ERP Sankhya'],
    images: [],
  },
  {
    slug: 'gerenciamento-pedidos',
    title: 'Gerenciamento de Pedidos',
    summary:
      'Painel para controle avançado de pedidos em múltiplos contextos operacionais.',
    description:
      'Sistema desenvolvido para permitir a gestão completa de pedidos, oferecendo operações de cancelamento, alteração de setor, ajuste de frete e outras ações críticas.',
    problem:
      'A ausência de uma interface centralizada dificultava o controle de pedidos e aumentava o risco de inconsistências entre setores e bases de dados.',
    solution:
      'Implementação de uma tela de gerenciamento integrada ao ERP Sankhya, com regras de negócio consolidadas e suporte a operações em múltiplos bancos de dados Oracle.',
    stack: ['Java', 'Angular', 'Oracle', 'ERP Sankhya'],
    highlights: [
      'Cancelamento e ajustes de pedidos',
      'Alteração de setor e frete',
      'Operações consistentes em múltiplos bancos',
      'Centralização do controle operacional'
    ],
    technologies: ['Java', 'Angular', 'Oracle', 'ERP Sankhya'],
    images: [],
  },
  {
    slug: 'produtos-cartesianos-kanban',
    title: 'Cadastro de Produtos Cartesianos (Kanban)',
    summary:
      'Cadastro visual de produtos gráficos com combinações cartesianas em fluxo Kanban.',
    description:
      'Tela desenvolvida para facilitar o cadastro de produtos gráficos complexos, organizando combinações cartesianas de atributos em uma esteira visual no formato Kanban.',
    problem:
      'O cadastro tradicional de produtos com múltiplas variações era complexo, propenso a erros e de difícil visualização.',
    solution:
      'Criação de uma interface Kanban integrada ao ERP Sankhya que permite montar, validar e cadastrar combinações de produtos de forma estruturada e intuitiva.',
    stack: ['Java', 'Angular', 'Oracle', 'ERP Sankhya'],
    highlights: [
      'Cadastro de produtos com combinações cartesianas',
      'Interface visual estilo Kanban',
      'Redução de erros no cadastro',
      'Fluxo funcional orientado a etapas'
    ],
    technologies: ['Java', 'Angular', 'Oracle', 'ERP Sankhya'],
    images: [],
  },
  {
    slug: 'precificacao',
    title: 'Precificação de Produtos',
    summary:
      'Ferramenta para gestão e atualização de preços em escala.',
    description:
      'Sistema desenvolvido para permitir a alteração de preços de produtos de forma individual ou em massa, com suporte à importação e exportação de dados.',
    problem:
      'A atualização manual de preços era lenta, suscetível a erros e difícil de auditar.',
    solution:
      'Implementação de uma tela de precificação integrada ao banco Oracle que permite ajustes rápidos, controle de impacto e importação/exportação de dados estruturados.',
    stack: ['Java', 'Angular', 'Oracle'],
    highlights: [
      'Alteração de preços em massa ou individual',
      'Importação e exportação de dados',
      'Controle e padronização de preços',
      'Redução de retrabalho operacional'
    ],
    technologies: ['Java', 'Angular', 'Oracle'],
    images: [],
  },
  {
    slug: 'automacoes',
    title: 'Automações de Processos',
    summary:
      'Automações desenvolvidas para otimização de rotinas operacionais.',
    description:
      'Conjunto de automações criadas em Java e Python para executar tarefas recorrentes, integrações e tratamentos de dados de forma confiável e rastreável.',
    problem:
      'Processos repetitivos e manuais consumiam tempo operacional e aumentavam a chance de falhas.',
    solution:
      'Desenvolvimento de rotinas automatizadas para execução programada ou sob demanda, reduzindo esforço humano e aumentando a previsibilidade dos processos.',
    stack: ['Java', 'Python'],
    highlights: [
      'Automação de tarefas recorrentes',
      'Integração entre sistemas',
      'Redução de falhas operacionais',
      'Execução programada ou sob demanda'
    ],
    technologies: ['Java', 'Python'],
    images: [],
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
    images: [],
  },
  {
    slug: 'sincronizacao-bancos',
    title: 'Sincronização entre Bancos',
    summary:
      'Serviço de sincronização entre Oracle, MySQL e SQL Server.',
    description:
      'Sincronização confiável entre bases distintas.',
    problem:
      'Bases divergentes causando inconsistência de dados.',
    solution:
      'Serviço com fallback, logs e histórico.',
    stack: ['Java', 'Spring', 'Oracle', 'MySQL', 'SQL Server'],
    highlights: [
      'Fallback automático',
      'Histórico de falhas',
      'Consistência de dados',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    images: [],
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
    images: [],
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
    images: [],
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
  }
]