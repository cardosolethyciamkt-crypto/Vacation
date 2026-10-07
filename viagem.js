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
   - Para adicionar um item, copie um bloco { ... }, cole logo abaixo
     e troque o conteúdo.
   ===================================================================== */

const VIAGEM = {
  titulo: "Fim de Ano da Família nos EUA",
  destino: "Nova York · Miami",
  frase: "Natal e Réveillon com a família toda junta! 🎄🗽🌴",

  // Momento exato da partida (é para cá que o contador conta).
  // O "-03:00" no final é o fuso de Curitiba — não apague.
  partida: "2026-12-18T17:20:00-03:00",
  // Dia da volta para casa (deixe "" enquanto não souber)
  retorno: "",

  // ---------------- Quem vai ----------------
  // desde: "" = vai desde o início. Ou coloque a data em que a pessoa entra na viagem.
  familia: [
    {
      grupo: "Nós",
      pessoas: [
        { nome: "Eu", idade: 25 },
        { nome: "Meu marido", idade: 25 },
      ],
    },
    {
      grupo: "Família do meu marido",
      pessoas: [
        { nome: "Sogro", idade: 54 },
        { nome: "Sogra", idade: 51 },
        { nome: "Cunhada", idade: 20 },
      ],
    },
    {
      grupo: "Família do tio (irmão da sogra)",
      pessoas: [
        { nome: "Tio", idade: 49, obs: "pouco menos de 50" },
        { nome: "Tia (esposa dele)", idade: 47 },
        { nome: "Primo", idade: 27 },
        { nome: "Prima", idade: 20 },
      ],
    },
    {
      grupo: "Meus pais",
      desde: "2026-12-24",
      obs: "Não vão para Nova York e Miami — encontram a gente a partir de 24/12.",
      pessoas: [
        { nome: "Meu pai", idade: null },
        { nome: "Minha mãe", idade: null },
      ],
    },
  ],

  // ---------------- Destinos (etapas da viagem) ----------------
  destinos: [
    { cidade: "Nova York", emoji: "🗽", de: "2026-12-19", ate: "2026-12-22", obs: "Inverno: frio de 0 °C ou menos" },
    { cidade: "Miami", emoji: "🌴", de: "2026-12-22", ate: "", obs: "Calor de verão: 20–27 °C" },
    { cidade: "Próximo destino", emoji: "📍", de: "2026-12-24", ate: "", obs: "A confirmar · meus pais entram aqui" },
  ],

  // ---------------- Voos ----------------
  voos: [
    {
      trecho: "Ida · 1º trecho",
      voo: "LA782",
      companhia: "LATAM",
      sai:    { data: "2026-12-18", hora: "17:20", cidade: "Curitiba", aeroporto: "CWB" },
      chega:  { data: "2026-12-18", hora: "21:00", cidade: "Santiago do Chile", aeroporto: "SCL" },
      obs: "",
    },
    {
      trecho: "Ida · 2º trecho (conexão)",
      voo: "LA532",
      companhia: "LATAM",
      sai:    { data: "2026-12-18", hora: "23:50", cidade: "Santiago do Chile", aeroporto: "SCL" },
      chega:  { data: "2026-12-19", hora: "08:25", cidade: "Nova York", aeroporto: "JFK" },
      obs: "Voo noturno — chegamos na manhã seguinte.",
    },
    {
      trecho: "Nova York → Miami",
      voo: "DL2500",
      companhia: "Delta",
      sai:    { data: "2026-12-22", hora: "15:32", cidade: "Nova York", aeroporto: "JFK" },
      chega:  { data: "2026-12-22", hora: "18:54", cidade: "Miami", aeroporto: "MIA" },
      obs: "",
    },
  ],

  // ---------------- Hospedagens ----------------
  hoteis: [
    {
      cidade: "Nova York",
      nome: "Hotel Edison Times Square",
      endereco: "228 W 47th St, New York, NY 10036, EUA",
      checkin: "2026-12-19",
      checkout: "2026-12-22",
      horaCheckin: "",   // ex.: "16:00" (quando souber)
      horaCheckout: "",  // ex.: "11:00"
      telefone: "",
      reserva: "",
      obs: "Do lado da Times Square.",
    },
    {
      cidade: "Miami",
      nome: "Comfort Inn & Suites Downtown Brickell – Port of Miami",
      endereco: "Miami, FL, EUA",
      checkin: "2026-12-22",
      checkout: "",
      horaCheckin: "",
      horaCheckout: "",
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
      titulo: "Véspera de Natal 🎄",
      atividades: [
        { hora: "", nome: "Meus pais se juntam à viagem", obs: "Detalhes a confirmar" },
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
    ],
    "🧥 Roupas – Nova York (frio)": [
      "Casaco grosso / jaqueta de inverno",
      "Segunda pele (blusa e calça térmica)",
      "Gorro, luvas e cachecol",
      "Bota ou tênis fechado confortável",
      "Meias grossas",
    ],
    "🩳 Roupas – Miami (calor)": [
      "Roupa de banho",
      "Roupas leves",
      "Chinelo / sandália",
      "Óculos de sol e boné",
      "Roupa para o Natal e o Réveillon",
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
