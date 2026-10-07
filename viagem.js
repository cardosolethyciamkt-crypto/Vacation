/* =====================================================================
   INFORMAÇÕES DA VIAGEM
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa mudar.
   Troque os textos entre aspas "assim" pelas informações reais.
   Dicas:
   - Não apague as aspas, as vírgulas nem as chaves { }.
   - Datas no formato "AAAA-MM-DDTHH:MM"  →  ex.: "2026-12-27T08:30"
   - Para adicionar um item, copie um bloco { ... }, cole logo abaixo
     e troque o conteúdo.
   ===================================================================== */

const VIAGEM = {
  titulo: "Viagem de Fim de Ano da Família",
  destino: "Porto Seguro – BA",
  frase: "Sol, mar e a família toda junta! ☀️🌊",

  // Momento exato da partida (é para cá que o contador conta)
  partida: "2026-12-27T07:00",
  // Dia da volta
  retorno: "2027-01-03T18:00",

  // ---------------- Transporte ----------------
  transporte: [
    {
      tipo: "✈️ Voo de ida",
      quando: "2026-12-27T07:00",
      detalhe: "GRU → BPS · Companhia XYZ · Voo 1234",
      obs: "Chegar no aeroporto às 5h. Localizador: ABC123",
    },
    {
      tipo: "✈️ Voo de volta",
      quando: "2027-01-03T18:00",
      detalhe: "BPS → GRU · Companhia XYZ · Voo 4321",
      obs: "Check-out do hotel às 12h, transfer às 15h.",
    },
  ],

  // ---------------- Hospedagem ----------------
  hotel: {
    nome: "Hotel Exemplo Praia",
    endereco: "Av. Beira Mar, 1000 – Porto Seguro, BA",
    checkin: "2026-12-27T14:00",
    checkout: "2027-01-03T12:00",
    telefone: "(73) 99999-9999",
    reserva: "Reserva nº 987654 · 3 quartos",
    site: "", // link do site do hotel (opcional)
    obs: "Café da manhã incluso das 7h às 10h. Wi-Fi: senha praia2026",
  },

  // ---------------- Roteiro / Passeios ----------------
  // Cada dia tem uma lista de atividades.
  roteiro: [
    {
      dia: "2026-12-27",
      titulo: "Chegada 🧳",
      atividades: [
        { hora: "07:00", nome: "Embarque", local: "Aeroporto de Guarulhos" },
        { hora: "14:00", nome: "Check-in no hotel", local: "Hotel Exemplo Praia" },
        { hora: "19:00", nome: "Jantar de boas-vindas", local: "Restaurante do hotel" },
      ],
    },
    {
      dia: "2026-12-28",
      titulo: "Praia e descanso 🏖️",
      atividades: [
        { hora: "09:00", nome: "Praia de Taperapuã", local: "Barraca Axé Moi" },
        { hora: "17:00", nome: "Passeio no Centro Histórico", local: "Cidade Histórica" },
      ],
    },
    {
      dia: "2026-12-29",
      titulo: "Passeio de barco ⛵",
      atividades: [
        { hora: "08:00", nome: "Escuna para Recife de Fora", local: "Cais do Porto", obs: "Levar protetor e snorkel" },
      ],
    },
    {
      dia: "2026-12-31",
      titulo: "Réveillon 🎆",
      atividades: [
        { hora: "20:00", nome: "Ceia em família", local: "Hotel" },
        { hora: "23:30", nome: "Queima de fogos na praia", local: "Orla", obs: "Todo mundo de branco!" },
      ],
    },
    {
      dia: "2027-01-03",
      titulo: "Volta pra casa 🏠",
      atividades: [
        { hora: "12:00", nome: "Check-out", local: "Hotel" },
        { hora: "18:00", nome: "Voo de volta", local: "Aeroporto de Porto Seguro" },
      ],
    },
  ],

  // ---------------- Checklist inicial ----------------
  // Cada pessoa pode marcar e adicionar itens no próprio celular.
  checklist: {
    "📄 Documentos": [
      "RG ou CNH de todos",
      "Certidão de nascimento das crianças",
      "Cartão de embarque",
      "Carteirinha do plano de saúde",
      "Cartões e um pouco de dinheiro",
    ],
    "👕 Roupas": [
      "Roupa de banho",
      "Roupa branca para o Réveillon",
      "Chinelo e tênis",
      "Pijama",
      "Casaquinho para o avião",
    ],
    "🧴 Higiene e saúde": [
      "Protetor solar",
      "Repelente",
      "Escova e pasta de dente",
      "Remédios de uso contínuo",
      "Remédio para enjoo",
    ],
    "🔌 Eletrônicos": [
      "Carregador de celular",
      "Power bank",
      "Fone de ouvido",
    ],
    "🏠 Antes de sair de casa": [
      "Desligar o gás",
      "Tirar aparelhos da tomada",
      "Fechar janelas e trancar portas",
      "Deixar comida/cuidador para os pets",
    ],
  },

  // ---------------- Contatos importantes ----------------
  contatos: [
    { nome: "Hotel", telefone: "(73) 99999-9999" },
    { nome: "Agência / Transfer", telefone: "(73) 98888-8888" },
    { nome: "SAMU", telefone: "192" },
  ],
};
