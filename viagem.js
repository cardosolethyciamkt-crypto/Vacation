/* =====================================================================
   INFORMAÇÕES DA VIAGEM
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa mudar.
   Troque os textos entre aspas "assim" pelas informações reais.
   Dicas:
   - Não apague as aspas, as vírgulas nem as chaves { }.
   - Datas no formato "AAAA-MM-DD"  →  ex.: "2026-12-18"
   - Horários no formato "HH:MM"    →  ex.: "17:20"
     (sempre no horário LOCAL da cidade de onde sai/chega)
   - Deixe "" (aspas vazias) quando ainda não souber a informação.
   - Para adicionar um item, copie um bloco { ... }, cole logo abaixo
     e troque o conteúdo.
   ===================================================================== */

const VIAGEM = {
  titulo: "Fim de Ano da Família nos EUA",
  destino: "Nova York · Miami · Orlando",
  frase: "Natal e Réveillon com a família toda junta! 🎄🗽🌴🏀",

  // Momento exato da partida (é para cá que o contador conta).
  // O "-03:00" no final é o fuso de Curitiba — não apague.
  partida: "2026-12-18T17:20:00-03:00",
  // Chegada de volta em Curitiba
  retorno: "2027-01-06T10:45",

  // ---------------- Destinos (etapas da viagem) ----------------
  destinos: [
    { cidade: "Nova York", emoji: "🗽", de: "2026-12-19", ate: "2026-12-22", obs: "Inverno: frio de 0 °C ou menos · passeios a definir" },
    { cidade: "Miami", emoji: "🌴", de: "2026-12-22", ate: "2026-12-24", obs: "Clima quente: 20–27 °C · passeios a definir" },
    { cidade: "Orlando", emoji: "🎢", de: "2026-12-24", ate: "2027-01-05", obs: "Natal, Réveillon e jogo da NBA 🏀 · passeios a definir" },
  ],

  // ---------------- Trajetos (voos e viagens de carro) ----------------
  // tipo: "voo" ou "carro"
  trajetos: [
    {
      tipo: "voo",
      trecho: "Ida · 1º trecho",
      voo: "LA782",
      companhia: "LATAM",
      sai:   { data: "2026-12-18", hora: "17:20", cidade: "Curitiba", sigla: "CWB" },
      chega: { data: "2026-12-18", hora: "21:00", cidade: "Santiago do Chile", sigla: "SCL" },
      obs: "",
    },
    {
      tipo: "voo",
      trecho: "Ida · 2º trecho (conexão)",
      voo: "LA532",
      companhia: "LATAM",
      sai:   { data: "2026-12-18", hora: "23:50", cidade: "Santiago do Chile", sigla: "SCL" },
      chega: { data: "2026-12-19", hora: "08:25", cidade: "Nova York", sigla: "JFK" },
      obs: "Voo noturno: chegamos na manhã seguinte.",
    },
    {
      tipo: "voo",
      trecho: "Nova York → Miami",
      voo: "DL2500",
      companhia: "Delta",
      sai:   { data: "2026-12-22", hora: "15:32", cidade: "Nova York", sigla: "JFK" },
      chega: { data: "2026-12-22", hora: "18:54", cidade: "Miami", sigla: "MIA" },
      obs: "",
    },
    {
      tipo: "carro",
      trecho: "Miami → Orlando",
      sai:   { data: "2026-12-24", hora: "", cidade: "Miami", sigla: "MIA" },
      chega: { data: "2026-12-24", hora: "", cidade: "Orlando", sigla: "ORL" },
      obs: "De carro, cerca de 4 horas de estrada.",
    },
    {
      tipo: "carro",
      trecho: "Orlando → Miami",
      sai:   { data: "2027-01-05", hora: "", cidade: "Orlando", sigla: "ORL" },
      chega: { data: "2027-01-05", hora: "", cidade: "Miami", sigla: "MIA" },
      obs: "Sair cedo! São cerca de 4 horas até o aeroporto de Miami.",
    },
    {
      tipo: "voo",
      trecho: "Volta · 1º trecho",
      voo: "LA191",
      companhia: "LATAM",
      sai:   { data: "2027-01-05", hora: "19:10", cidade: "Miami", sigla: "MIA" },
      chega: { data: "2027-01-06", hora: "05:40", cidade: "São Paulo", sigla: "GRU" },
      obs: "Voo noturno. Espera de cerca de 4 horas em Guarulhos.",
    },
    {
      tipo: "voo",
      trecho: "Volta · 2º trecho (conexão)",
      voo: "",
      companhia: "",
      sai:   { data: "2027-01-06", hora: "09:45", cidade: "São Paulo", sigla: "GRU" },
      chega: { data: "2027-01-06", hora: "10:45", cidade: "Curitiba", sigla: "CWB" },
      obs: "",
    },
  ],

  // ---------------- Hospedagens ----------------
  // Deixe o endereço "" enquanto não souber (o mapa fica escondido).
  hoteis: [
    {
      cidade: "Nova York",
      nome: "Hotel Edison Times Square",
      endereco: "228 W 47th St, New York, NY 10036, EUA",
      checkin: "2026-12-19",
      checkout: "2026-12-22",
      telefone: "",
      reserva: "",
      obs: "Do lado da Times Square.",
    },
    {
      cidade: "Miami",
      nome: "Comfort Inn & Suites Downtown Brickell – Port of Miami",
      endereco: "Miami, FL, EUA",
      checkin: "2026-12-22",
      checkout: "2026-12-24",
      telefone: "",
      reserva: "",
      obs: "",
    },
    {
      cidade: "Orlando",
      nome: "Hospedagem em Orlando",
      endereco: "",
      checkin: "2026-12-24",
      checkout: "2027-01-05",
      telefone: "",
      reserva: "",
      obs: "",
    },
  ],

  // ---------------- Roteiro / Passeios ----------------
  roteiro: [
    {
      dia: "2026-12-18",
      titulo: "Partida de Curitiba ✈️",
      atividades: [
        { hora: "17:20", nome: "Voo LA782 Curitiba → Santiago", local: "Aeroporto Afonso Pena (CWB)", obs: "Voo internacional: chegar umas 3h antes" },
        { hora: "21:00", nome: "Chegada em Santiago (conexão)", local: "Aeroporto de Santiago (SCL)" },
        { hora: "23:50", nome: "Voo LA532 Santiago → Nova York", local: "Aeroporto de Santiago (SCL)" },
      ],
    },
    {
      dia: "2026-12-19",
      titulo: "Chegada em Nova York 🗽",
      atividades: [
        { hora: "08:25", nome: "Chegada no JFK", local: "Aeroporto JFK", obs: "Imigração americana: passaporte e visto em mãos" },
        { hora: "", nome: "Check-in no hotel", local: "Hotel Edison Times Square" },
      ],
    },
    {
      dia: "2026-12-22",
      titulo: "Nova York → Miami 🌴",
      atividades: [
        { hora: "", nome: "Check-out do hotel", local: "Hotel Edison Times Square" },
        { hora: "15:32", nome: "Voo DL2500 Nova York → Miami", local: "Aeroporto JFK" },
        { hora: "18:54", nome: "Chegada em Miami", local: "Aeroporto de Miami (MIA)" },
        { hora: "", nome: "Check-in no hotel", local: "Comfort Inn & Suites Downtown Brickell Port of Miami" },
      ],
    },
    {
      dia: "2026-12-24",
      titulo: "Estrada para Orlando 🚗🎄",
      atividades: [
        { hora: "", nome: "Check-out do hotel em Miami", local: "Comfort Inn & Suites Downtown Brickell Port of Miami" },
        { hora: "", nome: "Viagem de carro Miami → Orlando", obs: "Cerca de 4 horas de estrada" },
        { hora: "", nome: "Chegada na hospedagem em Orlando" },
      ],
    },
    {
      dia: "2027-01-03",
      titulo: "Jogo da NBA 🏀",
      atividades: [
        { hora: "", nome: "Jogo da NBA", obs: "Ingressos já comprados · horário e local a confirmar" },
      ],
    },
    {
      dia: "2027-01-05",
      titulo: "Orlando → Miami → Brasil 🏠",
      atividades: [
        { hora: "", nome: "Check-out e saída cedo de Orlando", obs: "Cerca de 4 horas de estrada até Miami" },
        { hora: "19:10", nome: "Voo LA191 Miami → São Paulo", local: "Aeroporto de Miami (MIA)", obs: "Voo internacional: chegar umas 3h antes" },
      ],
    },
    {
      dia: "2027-01-06",
      titulo: "De volta para casa 💛",
      atividades: [
        { hora: "05:40", nome: "Chegada em Guarulhos", local: "Aeroporto de Guarulhos (GRU)" },
        { hora: "09:45", nome: "Voo São Paulo → Curitiba", local: "Aeroporto de Guarulhos (GRU)" },
        { hora: "10:45", nome: "Chegada em Curitiba", local: "Aeroporto Afonso Pena (CWB)" },
      ],
    },
  ],

  // ---------------- Checklist inicial ----------------
  // Cada pessoa pode marcar e adicionar itens no próprio celular.
  checklist: {
    "📄 Documentos": [
      "Passaporte válido",
      "Visto americano válido",
      "Cartões de embarque / localizador",
      "Seguro viagem (apólice impressa ou no celular)",
      "Cartão internacional e alguns dólares",
      "Endereço dos hotéis anotado (pede na imigração)",
      "Ingresso do jogo da NBA (03/01)",
    ],
    "🧥 Roupas – Nova York (frio)": [
      "Casaco grosso / jaqueta de inverno",
      "Segunda pele (blusa e calça térmica)",
      "Gorro, luvas e cachecol",
      "Bota ou tênis fechado confortável",
      "Meias grossas",
    ],
    "🩳 Roupas – Miami e Orlando": [
      "Roupa de banho",
      "Roupas leves e um casaquinho para a noite",
      "Tênis confortável para os parques",
      "Chinelo / sandália",
      "Óculos de sol e boné",
      "Roupa para o Natal e o Réveillon",
    ],
    "🚗 Viagens de carro": [
      "CNH de quem vai dirigir",
      "Carregador de celular para o carro",
      "Água e lanchinhos para a estrada",
      "Endereço de Orlando salvo no GPS",
    ],
    "🧴 Higiene e saúde": [
      "Remédios de uso contínuo (com receita)",
      "Protetor solar",
      "Hidratante e protetor labial (o frio resseca)",
      "Escova e pasta de dente",
      "Kit de primeiros socorros",
    ],
    "🔌 Eletrônicos": [
      "Carregador de celular",
      "Power bank (na bagagem de mão)",
      "Adaptador de tomada padrão americano",
      "Chip internacional / eSIM",
      "Fone de ouvido",
    ],
    "🏠 Antes de sair de casa": [
      "Desligar o gás",
      "Tirar aparelhos da tomada",
      "Fechar janelas e trancar portas",
      "Avisar o banco sobre a viagem internacional",
    ],
  },

  // ---------------- Contatos importantes ----------------
  contatos: [
    { nome: "Emergência nos EUA (polícia, bombeiros, ambulância)", telefone: "911" },
  ],
};
