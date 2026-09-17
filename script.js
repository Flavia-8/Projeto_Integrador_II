/* ==========================================================================
   PORTAL FUTURO — SCRIPT PRINCIPAL
   Organização do arquivo:
   1. Dados das profissões (array de objetos)
   2. Configuração das áreas
   3. Referências do DOM e estado da aplicação
   4. Funções de renderização
   5. Funções de filtro e pesquisa
   6. Tela de detalhes
   7. Eventos e inicialização

   Observação pedagógica: os dados ficam separados da lógica. Para incluir uma
   nova profissão, basta acrescentar um objeto ao array PROFISSOES — nada mais
   precisa ser alterado.
   ========================================================================== */

/* ==========================================================================
   1. DADOS DAS PROFISSÕES
   Os valores de "salarioMedio" são estimativas ilustrativas em reais para o
   Brasil e servem apenas como ordem de grandeza. Eles variam conforme região,
   porte da empresa, jornada e experiência. Confirme em fontes oficiais.
   ========================================================================== */
const PROFISSOES = [
  /* ----------------------------- TECNOLOGIA ----------------------------- */
  {
    id: 1,
    nome: "Desenvolvedor(a) de Software",
    area: "Tecnologia",
    descricaoCurta: "Cria sites, aplicativos e sistemas escrevendo e testando código.",
    salarioMedio: "Estimativa ilustrativa: R$ 3.000 a R$ 12.000 por mês, conforme senioridade e região.",
    duracaoCurso: "4 anos (bacharelado) ou 2 a 3 anos (tecnólogo). Curso técnico: 1 a 2 anos.",
    formacao: "Análise e Desenvolvimento de Sistemas, Ciência da Computação, Engenharia de Software ou técnico em Informática.",
    linkTesteExterno: "https://www.guiadacarreira.com.br/teste-vocacional",
    descricaoCurso: "O curso combina lógica de programação, estruturas de dados, banco de dados, engenharia de software, redes e projeto de interfaces. Há bastante matemática no início, principalmente lógica e matemática discreta, e muitos trabalhos práticos em equipe.",
    areasAtuacao: [
      "Empresas de tecnologia e startups",
      "Setor bancário e fintechs",
      "Órgãos públicos e universidades",
      "Trabalho remoto para empresas de outros estados ou países",
      "Atuação autônoma, com projetos para pequenos negócios"
    ],
    habilidades: [
      "Raciocínio lógico e persistência para resolver problemas",
      "Leitura em inglês técnico",
      "Trabalho em equipe e comunicação escrita",
      "Vontade de estudar continuamente, porque as ferramentas mudam rápido"
    ],
    mercadoTrabalho: "É uma das áreas com maior oferta de vagas de nível júnior no país, mas a concorrência por vagas remotas é alta. Portfólio de projetos e estágio costumam pesar mais do que a nota do diploma.",
    fontes: "Para valores atualizados, consulte o Painel do Novo CAGED (Ministério do Trabalho e Emprego) e pesquisas salariais de sindicatos do setor."
  },
  {
    id: 2,
    nome: "Analista de Segurança da Informação",
    area: "Tecnologia",
    descricaoCurta: "Protege sistemas e dados contra invasões, vazamentos e fraudes.",
    salarioMedio: "Estimativa ilustrativa: R$ 4.000 a R$ 15.000 por mês, conforme senioridade e certificações.",
    duracaoCurso: "4 anos (bacharelado) ou 2 a 3 anos (tecnólogo em Segurança da Informação).",
    formacao: "Segurança da Informação, Redes de Computadores, Ciência da Computação ou técnico em Informática com especialização.",
    linkTesteExterno: "https://querobolsa.com.br/teste-vocacional-gratis",
    descricaoCurso: "Estuda-se redes, sistemas operacionais, criptografia, análise de vulnerabilidades, resposta a incidentes e legislação de proteção de dados, como a LGPD. É um curso técnico e também jurídico, porque envolve normas e responsabilidade legal.",
    areasAtuacao: [
      "Bancos, seguradoras e operadoras de cartão",
      "Empresas de consultoria em segurança",
      "Órgãos públicos e forças de segurança",
      "Times internos de TI de grandes empresas"
    ],
    habilidades: [
      "Atenção a detalhes e disciplina com procedimentos",
      "Curiosidade para entender como os sistemas falham",
      "Ética profissional muito firme",
      "Boa comunicação para explicar riscos a quem não é da área"
    ],
    mercadoTrabalho: "A demanda cresceu com a LGPD e com o aumento de ataques a empresas. Certificações reconhecidas costumam ser exigidas para as vagas mais bem pagas.",
    fontes: "Consulte a Autoridade Nacional de Proteção de Dados (ANPD) e associações do setor para entender exigências legais e do mercado."
  },
  {
    id: 3,
    nome: "Cientista de Dados",
    area: "Tecnologia",
    descricaoCurta: "Analisa grandes volumes de dados para apoiar decisões e prever cenários.",
    salarioMedio: "Estimativa ilustrativa: R$ 4.500 a R$ 16.000 por mês, conforme senioridade.",
    duracaoCurso: "4 anos (bacharelado) ou 2 anos (tecnólogo em Ciência de Dados).",
    formacao: "Ciência de Dados, Estatística, Ciência da Computação, Matemática Aplicada ou áreas correlatas.",
    linkTesteExterno: "https://www.mundovestibular.com.br/teste-vocacional",
    descricaoCurso: "O curso é bastante matemático: estatística, probabilidade, álgebra linear e cálculo, somados a programação, banco de dados, aprendizado de máquina e visualização de dados. Exige gosto por números e interpretação de resultados.",
    areasAtuacao: [
      "Varejo e comércio eletrônico",
      "Bancos e empresas de crédito",
      "Saúde e pesquisa científica",
      "Agronegócio e logística",
      "Órgãos públicos, em políticas baseadas em evidências"
    ],
    habilidades: [
      "Facilidade com matemática e estatística",
      "Pensamento crítico para não confundir correlação com causa",
      "Capacidade de contar histórias com gráficos e relatórios",
      "Organização para lidar com dados bagunçados"
    ],
    mercadoTrabalho: "A maior parte das vagas está concentrada em grandes cidades e em trabalho remoto. Muitas exigem experiência prévia, por isso estágios e projetos pessoais são um caminho comum de entrada.",
    fontes: "Verifique dados de emprego no Painel do Novo CAGED e pesquisas de mercado de entidades de estatística e computação."
  },
  {
    id: 4,
    nome: "Técnico(a) em Redes de Computadores",
    area: "Tecnologia",
    descricaoCurta: "Instala, configura e mantém redes, servidores e conexões de internet.",
    salarioMedio: "Estimativa ilustrativa: R$ 2.200 a R$ 6.000 por mês, conforme região e porte da empresa.",
    duracaoCurso: "1 a 2 anos (curso técnico) ou 2 a 3 anos (tecnólogo).",
    formacao: "Técnico em Redes de Computadores ou tecnólogo em Redes. Pode ser integrado ao Ensino Médio.",
    linkTesteExterno: "https://www.guiadacarreira.com.br/teste-vocacional",
    descricaoCurso: "Aborda cabeamento, equipamentos de rede, protocolos de comunicação, servidores, sistemas operacionais e suporte ao usuário. Tem muita prática em laboratório e é uma porta de entrada rápida para o mercado.",
    areasAtuacao: [
      "Provedores de internet",
      "Suporte técnico em empresas e escolas",
      "Data centers e empresas de infraestrutura",
      "Prestação de serviços autônomos na sua cidade"
    ],
    habilidades: [
      "Habilidade manual e cuidado com equipamentos",
      "Paciência para diagnosticar problemas",
      "Bom atendimento ao público",
      "Organização para documentar o que foi feito"
    ],
    mercadoTrabalho: "A formação técnica permite entrar no mercado ainda no Ensino Médio ou logo depois, inclusive em cidades do interior, onde há provedores locais e demanda por suporte.",
    fontes: "Consulte a Classificação Brasileira de Ocupações (CBO) e provedores locais para conhecer exigências reais das vagas."
  },

  /* -------------------------------- SAÚDE -------------------------------- */
  {
    id: 5,
    nome: "Enfermeiro(a)",
    area: "Saúde",
    descricaoCurta: "Cuida de pacientes, coordena a equipe de enfermagem e acompanha tratamentos.",
    salarioMedio: "Estimativa ilustrativa: R$ 3.500 a R$ 8.000 por mês; há piso salarial definido em lei, com discussões judiciais sobre sua aplicação.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Enfermagem, com registro no Conselho Regional de Enfermagem (COREN).",
    linkTesteExterno: "https://querobolsa.com.br/teste-vocacional-gratis",
    descricaoCurso: "O curso reúne anatomia, fisiologia, farmacologia, saúde coletiva, urgência e emergência e administração de serviços de saúde. Tem estágios obrigatórios em hospitais e postos de saúde desde os primeiros anos.",
    areasAtuacao: [
      "Hospitais públicos e privados",
      "Unidades Básicas de Saúde e programas de saúde da família",
      "Serviços de urgência e emergência (SAMU)",
      "Saúde do trabalhador em empresas",
      "Docência e pesquisa, com pós-graduação"
    ],
    habilidades: [
      "Empatia e equilíbrio emocional",
      "Capacidade de liderar e organizar equipes",
      "Resistência para plantões e trabalho noturno",
      "Precisão com cálculos de medicação e registros"
    ],
    mercadoTrabalho: "Há demanda constante no SUS e na rede privada em praticamente todo o país, inclusive em cidades pequenas. Concursos públicos são uma via comum de estabilidade.",
    fontes: "Consulte o Conselho Federal de Enfermagem (COFEN) e o COREN do seu estado para piso, jornada e registro profissional."
  },
  {
    id: 6,
    nome: "Fisioterapeuta",
    area: "Saúde",
    descricaoCurta: "Recupera movimentos e funções do corpo após lesões, cirurgias ou doenças.",
    salarioMedio: "Estimativa ilustrativa: R$ 2.800 a R$ 7.000 por mês; atendimento particular pode variar bastante.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Fisioterapia, com registro no CREFITO.",
    linkTesteExterno: "https://www.mundovestibular.com.br/teste-vocacional",
    descricaoCurso: "Estuda-se anatomia, cinesiologia, biomecânica, neurologia, ortopedia, recursos terapêuticos e reabilitação. É um curso com muita prática corporal e estágio clínico supervisionado.",
    areasAtuacao: [
      "Clínicas de reabilitação e consultórios próprios",
      "Hospitais, inclusive em UTI",
      "Times e centros esportivos",
      "Atendimento domiciliar (home care)",
      "Saúde do trabalhador e ergonomia"
    ],
    habilidades: [
      "Contato físico respeitoso e boa comunicação",
      "Paciência para tratamentos longos",
      "Raciocínio clínico para adaptar exercícios",
      "Interesse por corpo humano e movimento"
    ],
    mercadoTrabalho: "Muitos profissionais atuam como autônomos ou em clínicas próprias, o que exige noções de gestão. O envelhecimento da população tende a ampliar a demanda por reabilitação.",
    fontes: "Consulte o Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO) para atribuições e registro."
  },
  {
    id: 7,
    nome: "Nutricionista",
    area: "Saúde",
    descricaoCurta: "Planeja alimentação e acompanha a saúde nutricional de pessoas e grupos.",
    salarioMedio: "Estimativa ilustrativa: R$ 2.500 a R$ 7.000 por mês, variando muito entre serviço público, empresas e consultório.",
    duracaoCurso: "4 anos (bacharelado).",
    formacao: "Bacharelado em Nutrição, com registro no Conselho Regional de Nutricionistas (CRN).",
    linkTesteExterno: "https://www.guiadacarreira.com.br/teste-vocacional",
    descricaoCurso: "O curso combina bioquímica, fisiologia, técnica dietética, nutrição clínica, saúde pública e gestão de unidades de alimentação. Há aulas em laboratório de cozinha e estágios em hospitais e escolas.",
    areasAtuacao: [
      "Consultório e atendimento individual",
      "Hospitais e clínicas",
      "Merenda escolar e programas públicos",
      "Restaurantes e indústria de alimentos",
      "Nutrição esportiva"
    ],
    habilidades: [
      "Escuta atenta, sem julgar hábitos do paciente",
      "Base sólida em química e biologia",
      "Criatividade para adaptar cardápios à realidade de cada pessoa",
      "Capacidade de educar e explicar com clareza"
    ],
    mercadoTrabalho: "Há vagas em concursos para a rede pública, em unidades de alimentação coletiva e na indústria. O consultório particular costuma levar tempo para se consolidar.",
    fontes: "Consulte o Conselho Federal de Nutricionistas (CFN) para atribuições, piso e áreas de atuação."
  },
  {
    id: 8,
    nome: "Farmacêutico(a)",
    area: "Saúde",
    descricaoCurta: "Atua com medicamentos, análises clínicas e orientação sobre tratamentos.",
    salarioMedio: "Estimativa ilustrativa: R$ 3.000 a R$ 8.500 por mês, conforme setor e responsabilidade técnica.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Farmácia, com registro no Conselho Regional de Farmácia (CRF).",
    linkTesteExterno: "https://querobolsa.com.br/teste-vocacional-gratis",
    descricaoCurso: "É um curso com forte base em química, bioquímica, microbiologia, farmacologia, tecnologia farmacêutica e análises clínicas. Envolve muito laboratório e responsabilidade técnica desde cedo.",
    areasAtuacao: [
      "Farmácias e drogarias, como responsável técnico",
      "Laboratórios de análises clínicas",
      "Indústria farmacêutica e de cosméticos",
      "Farmácia hospitalar",
      "Vigilância sanitária e órgãos públicos"
    ],
    habilidades: [
      "Rigor e atenção a detalhes",
      "Gosto por química e biologia",
      "Responsabilidade ética com a saúde de terceiros",
      "Organização para lidar com normas e registros"
    ],
    mercadoTrabalho: "A exigência legal de responsável técnico em farmácias garante uma base de vagas em todo o país. Indústria e análises clínicas costumam pagar melhor, mas se concentram em polos específicos.",
    fontes: "Consulte o Conselho Federal de Farmácia (CFF) e a Anvisa para exigências da profissão."
  },

  /* ------------------------------- HUMANAS ------------------------------- */
  {
    id: 9,
    nome: "Professor(a) da Educação Básica",
    area: "Humanas",
    descricaoCurta: "Planeja aulas, ensina conteúdos e acompanha a aprendizagem dos estudantes.",
    salarioMedio: "Estimativa ilustrativa: há piso nacional do magistério definido em lei e reajustado anualmente; as redes estaduais e municipais pagam valores diferentes acima desse piso.",
    duracaoCurso: "4 anos (licenciatura).",
    formacao: "Licenciatura na área escolhida, como Matemática, História, Letras, Biologia ou Pedagogia.",
    linkTesteExterno: "https://www.mundovestibular.com.br/teste-vocacional",
    descricaoCurso: "Além dos conteúdos específicos da disciplina, a licenciatura inclui didática, psicologia da educação, políticas educacionais e estágio supervisionado em escolas, desde os primeiros semestres.",
    areasAtuacao: [
      "Escolas públicas municipais e estaduais",
      "Escolas particulares e cursinhos",
      "Educação de Jovens e Adultos",
      "Produção de material didático",
      "Ensino superior, após mestrado ou doutorado"
    ],
    habilidades: [
      "Gosto por explicar e mediar conflitos",
      "Organização e planejamento",
      "Domínio do conteúdo e vontade de continuar estudando",
      "Escuta e sensibilidade com realidades diferentes"
    ],
    mercadoTrabalho: "Há concursos e contratos temporários em praticamente todos os municípios, com carência maior em áreas como Matemática, Física e Química. A jornada costuma incluir trabalho fora da sala de aula.",
    fontes: "Consulte o MEC, o FNDE (para o piso do magistério) e as secretarias de educação do seu estado e município."
  },
  {
    id: 10,
    nome: "Psicólogo(a)",
    area: "Humanas",
    descricaoCurta: "Atende pessoas em sofrimento psíquico e atua em escolas, empresas e saúde.",
    salarioMedio: "Estimativa ilustrativa: R$ 2.500 a R$ 7.500 por mês em vínculo formal; no consultório, depende do número de atendimentos.",
    duracaoCurso: "5 anos (bacharelado com formação de psicólogo).",
    formacao: "Graduação em Psicologia, com registro no Conselho Regional de Psicologia (CRP).",
    linkTesteExterno: "https://www.guiadacarreira.com.br/teste-vocacional",
    descricaoCurso: "O curso passa por teorias da personalidade, psicologia do desenvolvimento, psicopatologia, avaliação psicológica, técnicas de entrevista e ética profissional, com estágios supervisionados em clínica, escola e saúde pública.",
    areasAtuacao: [
      "Consultório e clínicas",
      "Centros de Atenção Psicossocial (CAPS) e UBS",
      "Escolas, na orientação educacional",
      "Recursos humanos em empresas",
      "Orientação profissional e de carreira"
    ],
    habilidades: [
      "Escuta sem julgamento",
      "Estabilidade emocional e autocuidado",
      "Sigilo e postura ética",
      "Leitura constante e disposição para supervisão"
    ],
    mercadoTrabalho: "Cresceu a procura por atendimento em saúde mental, tanto na rede pública quanto no atendimento on-line. Construir consultório leva tempo, e muitos começam em vínculos institucionais.",
    fontes: "Consulte o Conselho Federal de Psicologia (CFP) para atribuições, ética e registro profissional."
  },
  {
    id: 11,
    nome: "Advogado(a)",
    area: "Humanas",
    descricaoCurta: "Orienta e representa pessoas e empresas em questões jurídicas.",
    salarioMedio: "Estimativa ilustrativa: R$ 3.000 a R$ 10.000 por mês em escritórios e empresas; a advocacia autônoma varia muito.",
    duracaoCurso: "5 anos (bacharelado), mais aprovação no Exame da OAB.",
    formacao: "Bacharelado em Direito e inscrição na Ordem dos Advogados do Brasil (OAB).",
    linkTesteExterno: "https://querobolsa.com.br/teste-vocacional-gratis",
    descricaoCurso: "O curso estuda direito constitucional, civil, penal, trabalhista, processual e áreas específicas, com muita leitura, escrita de peças e prática em núcleos de assistência jurídica.",
    areasAtuacao: [
      "Escritórios de advocacia",
      "Departamento jurídico de empresas",
      "Carreiras públicas, por concurso (defensoria, procuradoria, magistratura)",
      "Assessoria em órgãos públicos",
      "Advocacia autônoma"
    ],
    habilidades: [
      "Leitura crítica e escrita clara",
      "Argumentação e oratória",
      "Organização com prazos rigorosos",
      "Ética e responsabilidade com informações sigilosas"
    ],
    mercadoTrabalho: "É uma das graduações com maior número de formandos no país, o que torna a concorrência alta. Especialização e experiência em estágio fazem diferença na entrada.",
    fontes: "Consulte a OAB (nacional e seccional do seu estado) para o exame de ordem e as regras da profissão."
  },
  {
    id: 12,
    nome: "Jornalista",
    area: "Humanas",
    descricaoCurta: "Apura, checa e comunica informações de interesse público.",
    salarioMedio: "Estimativa ilustrativa: R$ 2.500 a R$ 7.000 por mês, conforme veículo, porte e região.",
    duracaoCurso: "4 anos (bacharelado).",
    formacao: "Bacharelado em Jornalismo ou Comunicação Social com habilitação em Jornalismo.",
    linkTesteExterno: "https://www.mundovestibular.com.br/teste-vocacional",
    descricaoCurso: "O curso reúne técnicas de reportagem e entrevista, redação, fotografia, audiovisual, jornalismo digital, ética e legislação de imprensa, com muita produção prática em laboratórios e veículos-escola.",
    areasAtuacao: [
      "Jornais, portais, rádio e TV",
      "Assessoria de imprensa de empresas e órgãos públicos",
      "Produção de conteúdo digital e podcasts",
      "Jornalismo independente",
      "Comunicação institucional"
    ],
    habilidades: [
      "Curiosidade e leitura constante",
      "Escrita clara e rápida",
      "Apuração rigorosa e checagem de fontes",
      "Facilidade para falar com desconhecidos"
    ],
    mercadoTrabalho: "As redações tradicionais reduziram vagas, enquanto cresceu a atuação em assessoria e conteúdo digital. Portfólio e experiência prática pesam muito na contratação.",
    fontes: "Consulte a Federação Nacional dos Jornalistas (FENAJ) e sindicatos estaduais para pisos e condições de trabalho."
  },

  /* ------------------------------ ENGENHARIA ------------------------------ */
  {
    id: 13,
    nome: "Engenheiro(a) Civil",
    area: "Engenharia",
    descricaoCurta: "Projeta, calcula e acompanha obras de construção e infraestrutura.",
    salarioMedio: "Estimativa ilustrativa: R$ 4.000 a R$ 12.000 por mês, conforme porte da obra e experiência.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Engenharia Civil, com registro no CREA.",
    linkTesteExterno: "https://www.guiadacarreira.com.br/teste-vocacional",
    descricaoCurso: "O curso tem base pesada em cálculo, física e resistência dos materiais, além de topografia, hidráulica, estruturas, saneamento e gestão de obras, com visitas técnicas e projetos práticos.",
    areasAtuacao: [
      "Construtoras e incorporadoras",
      "Escritórios de projeto e cálculo estrutural",
      "Prefeituras e órgãos públicos",
      "Perícia e avaliação de imóveis",
      "Trabalho autônomo com reformas e projetos"
    ],
    habilidades: [
      "Facilidade com matemática e física",
      "Visão espacial para interpretar projetos",
      "Liderança para coordenar equipes em canteiro",
      "Responsabilidade com segurança e normas técnicas"
    ],
    mercadoTrabalho: "O emprego acompanha os ciclos da construção civil e de obras públicas. Há espaço tanto em grandes construtoras quanto em serviços locais de projeto e reforma.",
    fontes: "Consulte o CREA do seu estado e o CONFEA para atribuições profissionais e registro."
  },
  {
    id: 14,
    nome: "Engenheiro(a) de Produção",
    area: "Engenharia",
    descricaoCurta: "Organiza processos, reduz desperdícios e melhora a produtividade de empresas.",
    salarioMedio: "Estimativa ilustrativa: R$ 4.000 a R$ 12.000 por mês, conforme setor e porte da empresa.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Engenharia de Produção, com registro no CREA.",
    linkTesteExterno: "https://querobolsa.com.br/teste-vocacional-gratis",
    descricaoCurso: "Une engenharia e gestão: estatística, pesquisa operacional, logística, qualidade, custos, gestão de projetos e processos produtivos. É uma das engenharias com mais contato com a administração.",
    areasAtuacao: [
      "Indústrias de todos os portes",
      "Logística e cadeia de suprimentos",
      "Consultoria em processos e qualidade",
      "Varejo e serviços",
      "Empreendedorismo e gestão do próprio negócio"
    ],
    habilidades: [
      "Organização e visão de conjunto",
      "Facilidade com números e indicadores",
      "Negociação e trabalho com pessoas",
      "Capacidade de propor melhorias sem desorganizar a operação"
    ],
    mercadoTrabalho: "A formação é generalista e abre portas em áreas fora da indústria, como logística, consultoria e gestão. Programas de trainee são uma porta de entrada comum.",
    fontes: "Consulte o CREA, a ABEPRO (Associação Brasileira de Engenharia de Produção) e pesquisas setoriais."
  },
  {
    id: 15,
    nome: "Engenheiro(a) Eletricista",
    area: "Engenharia",
    descricaoCurta: "Projeta sistemas elétricos, da instalação de prédios à geração de energia.",
    salarioMedio: "Estimativa ilustrativa: R$ 4.500 a R$ 13.000 por mês, conforme setor e responsabilidade técnica.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Engenharia Elétrica, com registro no CREA.",
    linkTesteExterno: "https://www.mundovestibular.com.br/teste-vocacional",
    descricaoCurso: "Envolve cálculo, física, circuitos elétricos, eletrônica, máquinas elétricas, sistemas de potência, automação e energias renováveis, com bastante laboratório.",
    areasAtuacao: [
      "Concessionárias de energia",
      "Projetos de instalações prediais e industriais",
      "Energia solar e outras fontes renováveis",
      "Automação industrial",
      "Manutenção e perícia técnica"
    ],
    habilidades: [
      "Base forte em física e matemática",
      "Cuidado com segurança, já que o risco é real",
      "Raciocínio para diagnosticar falhas",
      "Precisão em cálculos e dimensionamentos"
    ],
    mercadoTrabalho: "A expansão da energia solar ampliou a demanda em muitas regiões, inclusive no interior. Setores de infraestrutura e indústria também absorvem profissionais.",
    fontes: "Consulte o CREA, a ANEEL e associações do setor elétrico para dados atualizados."
  },
  {
    id: 16,
    nome: "Engenheiro(a) Ambiental",
    area: "Engenharia",
    descricaoCurta: "Trata da água, dos resíduos e do impacto ambiental de obras e empresas.",
    salarioMedio: "Estimativa ilustrativa: R$ 3.500 a R$ 10.000 por mês, conforme setor e região.",
    duracaoCurso: "5 anos (bacharelado).",
    formacao: "Bacharelado em Engenharia Ambiental ou Ambiental e Sanitária, com registro no CREA.",
    linkTesteExterno: "https://www.guiadacarreira.com.br/teste-vocacional",
    descricaoCurso: "Combina química, biologia, hidrologia, saneamento, tratamento de efluentes, legislação ambiental e avaliação de impacto, com trabalhos de campo e análises laboratoriais.",
    areasAtuacao: [
      "Companhias de saneamento e tratamento de água",
      "Órgãos ambientais estaduais e municipais",
      "Consultoria em licenciamento ambiental",
      "Indústrias, na gestão de resíduos",
      "Projetos de recuperação de áreas degradadas"
    ],
    habilidades: [
      "Interesse por ciências da natureza",
      "Rigor técnico e ético em laudos",
      "Disposição para trabalho de campo",
      "Capacidade de conciliar exigências legais e viabilidade dos projetos"
    ],
    mercadoTrabalho: "A área acompanha exigências legais de licenciamento e saneamento. Concursos em companhias de água e esgoto e em órgãos ambientais são caminhos frequentes.",
    fontes: "Consulte o CREA, o IBAMA e os órgãos ambientais do seu estado para atribuições e exigências."
  }
];

/* ==========================================================================
   2. CONFIGURAÇÃO DAS ÁREAS
   Cada área tem uma cor própria, usada nos cards e na tela de detalhes.
   ========================================================================== */
const AREAS = [
  { nome: "Todas", cor: "#10203A", corClara: "rgba(16, 32, 58, 0.10)" },
  { nome: "Tecnologia", cor: "#1F4FA3", corClara: "rgba(31, 79, 163, 0.12)" },
  { nome: "Saúde", cor: "#0E7C6B", corClara: "rgba(14, 124, 107, 0.12)" },
  { nome: "Humanas", cor: "#8A4B9E", corClara: "rgba(138, 75, 158, 0.12)" },
  { nome: "Engenharia", cor: "#B4690E", corClara: "rgba(180, 105, 14, 0.12)" }
];

/* ==========================================================================
   3. REFERÊNCIAS DO DOM E ESTADO DA APLICAÇÃO
   ========================================================================== */
const elementos = {
  grupoFiltros: document.getElementById("filtros-area"),
  campoPesquisa: document.getElementById("campo-pesquisa"),
  lista: document.getElementById("lista-profissoes"),
  contador: document.getElementById("contador-resultados"),
  mensagemVazia: document.getElementById("mensagem-vazia"),
  botaoLimpar: document.getElementById("botao-limpar"),
  botaoVoltar: document.getElementById("botao-voltar"),
  secaoExploracao: document.getElementById("explorar"),
  secaoDetalhes: document.getElementById("detalhes"),
  heroTotal: document.getElementById("hero-total"),
  detalhes: {
    area: document.getElementById("detalhes-area"),
    titulo: document.getElementById("detalhes-titulo"),
    resumo: document.getElementById("detalhes-resumo"),
    formacao: document.getElementById("detalhes-formacao"),
    duracao: document.getElementById("detalhes-duracao"),
    salario: document.getElementById("detalhes-salario"),
    curso: document.getElementById("detalhes-curso"),
    atuacao: document.getElementById("detalhes-atuacao"),
    habilidades: document.getElementById("detalhes-habilidades"),
    mercado: document.getElementById("detalhes-mercado"),
    linkTeste: document.getElementById("detalhes-link-teste"),
    fontes: document.getElementById("detalhes-fontes")
  }
};

// Estado atual da interface: área escolhida e texto pesquisado.
const estado = {
  areaSelecionada: "Todas",
  termoPesquisa: ""
};

/* ==========================================================================
   4. FUNÇÕES AUXILIARES E DE RENDERIZAÇÃO
   ========================================================================== */

/**
 * Remove acentos e coloca em minúsculas, para que "saude" encontre "Saúde".
 */
function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Devolve a configuração de cor de uma área. Se a área não existir na lista,
 * usa a configuração padrão ("Todas"), evitando erro na tela.
 */
function obterConfiguracaoArea(nomeArea) {
  const encontrada = AREAS.find(function (area) {
    return area.nome === nomeArea;
  });
  return encontrada || AREAS[0];
}

/**
 * Cria os botões de filtro a partir do array AREAS.
 */
function renderizarFiltros() {
  if (!elementos.grupoFiltros) {
    return;
  }

  elementos.grupoFiltros.innerHTML = "";

  AREAS.forEach(function (area) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "filtro";
    botao.textContent = area.nome;
    botao.dataset.area = area.nome;
    botao.setAttribute("aria-pressed", String(area.nome === estado.areaSelecionada));
    elementos.grupoFiltros.appendChild(botao);
  });
}

/**
 * Atualiza o estado visual e acessível (aria-pressed) dos botões de filtro.
 */
function atualizarFiltrosAtivos() {
  const botoes = elementos.grupoFiltros.querySelectorAll(".filtro");

  botoes.forEach(function (botao) {
    const ativo = botao.dataset.area === estado.areaSelecionada;
    botao.setAttribute("aria-pressed", String(ativo));
  });
}

/**
 * Monta o HTML de um card de profissão.
 */
function criarCard(profissao) {
  const configuracao = obterConfiguracaoArea(profissao.area);

  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = String(profissao.id);
  card.style.setProperty("--cor-area", configuracao.cor);
  card.style.setProperty("--cor-area-clara", configuracao.corClara);

  const area = document.createElement("p");
  area.className = "card__area";
  area.textContent = profissao.area;

  const nome = document.createElement("h3");
  nome.className = "card__nome";
  nome.textContent = profissao.nome;

  const descricao = document.createElement("p");
  descricao.className = "card__descricao";
  descricao.textContent = profissao.descricaoCurta;

  const meta = document.createElement("div");
  meta.className = "card__meta";

  const metaFormacao = document.createElement("p");
  metaFormacao.innerHTML = "<strong>Formação:</strong> ";
  metaFormacao.append(profissao.duracaoCurso);
  meta.appendChild(metaFormacao);

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "botao card__acao";
  botao.dataset.id = String(profissao.id);
  botao.textContent = "Ver detalhes";
  botao.setAttribute("aria-label", "Ver detalhes da profissão " + profissao.nome);

  card.append(area, nome, descricao, meta, botao);
  return card;
}

/**
 * Desenha na tela a lista de profissões recebida.
 */
function renderizarProfissoes(profissoes) {
  if (!elementos.lista) {
    return;
  }

  elementos.lista.innerHTML = "";

  profissoes.forEach(function (profissao) {
    elementos.lista.appendChild(criarCard(profissao));
  });

  atualizarContador(profissoes.length);
  alternarMensagemVazia(profissoes.length === 0);
}

/**
 * Atualiza o texto com a quantidade de resultados.
 * O elemento tem aria-live, então leitores de tela anunciam a mudança.
 */
function atualizarContador(quantidade) {
  if (!elementos.contador) {
    return;
  }

  const complemento = estado.areaSelecionada === "Todas"
    ? ""
    : " na área de " + estado.areaSelecionada;

  if (quantidade === 0) {
    elementos.contador.textContent = "Nenhuma profissão encontrada" + complemento + ".";
    return;
  }

  const palavra = quantidade === 1 ? "profissão encontrada" : "profissões encontradas";
  elementos.contador.textContent = quantidade + " " + palavra + complemento + ".";
}

/**
 * Mostra ou esconde a mensagem de lista vazia.
 */
function alternarMensagemVazia(deveMostrar) {
  if (!elementos.mensagemVazia) {
    return;
  }
  elementos.mensagemVazia.hidden = !deveMostrar;
}

/* ==========================================================================
   5. FILTRO E PESQUISA
   ========================================================================== */

/**
 * Aplica, ao mesmo tempo, o filtro de área e o texto pesquisado.
 */
function filtrarProfissoes() {
  const termo = normalizarTexto(estado.termoPesquisa);

  return PROFISSOES.filter(function (profissao) {
    const combinaArea = estado.areaSelecionada === "Todas"
      || profissao.area === estado.areaSelecionada;

    if (!combinaArea) {
      return false;
    }

    if (termo === "") {
      return true;
    }

    const textoDaProfissao = normalizarTexto(
      profissao.nome + " " + profissao.area + " " + profissao.descricaoCurta + " " + profissao.formacao
    );

    return textoDaProfissao.includes(termo);
  });
}

/**
 * Recalcula os resultados e atualiza a tela. É chamada sempre que o usuário
 * digita na busca ou troca o filtro de área.
 */
function atualizarResultados() {
  renderizarProfissoes(filtrarProfissoes());
}

/**
 * Volta ao estado inicial: área "Todas" e busca vazia.
 */
function limparFiltros() {
  estado.areaSelecionada = "Todas";
  estado.termoPesquisa = "";

  if (elementos.campoPesquisa) {
    elementos.campoPesquisa.value = "";
  }

  atualizarFiltrosAtivos();
  atualizarResultados();
}

/* ==========================================================================
   6. TELA DE DETALHES
   ========================================================================== */

/**
 * Preenche uma lista <ul> a partir de um array de textos.
 */
function preencherLista(elementoLista, itens) {
  if (!elementoLista) {
    return;
  }

  elementoLista.innerHTML = "";

  const valores = Array.isArray(itens) ? itens : [];

  valores.forEach(function (texto) {
    const item = document.createElement("li");
    item.textContent = texto;
    elementoLista.appendChild(item);
  });
}

/**
 * Abre a tela de detalhes de uma profissão pelo id.
 * Se o id não existir, nada acontece (proteção contra erro).
 */
function abrirDetalhes(id) {
  const profissao = PROFISSOES.find(function (item) {
    return item.id === Number(id);
  });

  if (!profissao || !elementos.secaoDetalhes) {
    return;
  }

  const configuracao = obterConfiguracaoArea(profissao.area);
  elementos.secaoDetalhes.style.setProperty("--cor-area", configuracao.cor);
  elementos.secaoDetalhes.style.setProperty("--cor-area-clara", configuracao.corClara);

  const d = elementos.detalhes;
  d.area.textContent = profissao.area;
  d.titulo.textContent = profissao.nome;
  d.resumo.textContent = profissao.descricaoCurta;
  d.formacao.textContent = profissao.formacao;
  d.duracao.textContent = profissao.duracaoCurso;
  d.salario.textContent = profissao.salarioMedio;
  d.curso.textContent = profissao.descricaoCurso;
  d.mercado.textContent = profissao.mercadoTrabalho;
  d.fontes.textContent = "Onde confirmar as informações: " + profissao.fontes;

  preencherLista(d.atuacao, profissao.areasAtuacao);
  preencherLista(d.habilidades, profissao.habilidades);

  d.linkTeste.href = profissao.linkTesteExterno;
  d.linkTeste.setAttribute(
    "aria-label",
    "Fazer teste vocacional gratuito em site externo (abre em nova aba)"
  );

  // Troca de tela sem recarregar a página.
  elementos.secaoExploracao.hidden = true;
  elementos.secaoDetalhes.hidden = false;

  // Leva o foco para a seção aberta, para quem usa teclado ou leitor de tela.
  elementos.secaoDetalhes.focus();
  elementos.secaoDetalhes.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Fecha os detalhes e volta para a listagem.
 */
function voltarParaExploracao() {
  if (!elementos.secaoDetalhes) {
    return;
  }

  elementos.secaoDetalhes.hidden = true;
  elementos.secaoExploracao.hidden = false;

  if (elementos.campoPesquisa) {
    elementos.campoPesquisa.focus();
  }

  elementos.secaoExploracao.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ==========================================================================
   7. EVENTOS E INICIALIZAÇÃO
   ========================================================================== */
function registrarEventos() {
  // Filtros por área
  if (elementos.grupoFiltros) {
    elementos.grupoFiltros.addEventListener("click", function (evento) {
      const botao = evento.target.closest(".filtro");

      if (!botao) {
        return;
      }

      estado.areaSelecionada = botao.dataset.area;
      atualizarFiltrosAtivos();
      atualizarResultados();
    });
  }

  // Pesquisa por texto
  if (elementos.campoPesquisa) {
    elementos.campoPesquisa.addEventListener("input", function (evento) {
      estado.termoPesquisa = evento.target.value;
      atualizarResultados();
    });
  }

  // Clique em qualquer ponto do card ou no botão "Ver detalhes"
  if (elementos.lista) {
    elementos.lista.addEventListener("click", function (evento) {
      const card = evento.target.closest(".card");

      if (!card) {
        return;
      }

      abrirDetalhes(card.dataset.id);
    });
  }

  // Botão de voltar
  if (elementos.botaoVoltar) {
    elementos.botaoVoltar.addEventListener("click", voltarParaExploracao);
  }

  // Botão de limpar busca e filtros
  if (elementos.botaoLimpar) {
    elementos.botaoLimpar.addEventListener("click", limparFiltros);
  }

  // Links internos do menu voltam para a listagem se os detalhes estiverem abertos
  document.querySelectorAll('a[href="#explorar"], a[href="#inicio"], a[href="#sobre"]')
    .forEach(function (link) {
      link.addEventListener("click", function () {
        if (elementos.secaoDetalhes && !elementos.secaoDetalhes.hidden) {
          elementos.secaoDetalhes.hidden = true;
          elementos.secaoExploracao.hidden = false;
        }
      });
    });

  // Tecla Esc fecha os detalhes
  document.addEventListener("keydown", function (evento) {
    const detalhesAberto = elementos.secaoDetalhes && !elementos.secaoDetalhes.hidden;

    if (evento.key === "Escape" && detalhesAberto) {
      voltarParaExploracao();
    }
  });
}

function iniciar() {
  if (elementos.heroTotal) {
    elementos.heroTotal.textContent = String(PROFISSOES.length);
  }

  renderizarFiltros();
  registrarEventos();
  atualizarResultados();
}

// Garante que o HTML já existe antes de manipular o DOM.
document.addEventListener("DOMContentLoaded", iniciar);
