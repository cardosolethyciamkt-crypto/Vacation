/* =====================================================================
   INFORMAÇÕES DA VIAGEM  ·  TRIP INFORMATION
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa mudar.
   Troque os textos entre aspas "assim" pelas informações reais.

   Português e inglês:
   - Textos escritos como { pt: "...", en: "..." } aparecem em português
     ou em inglês, conforme o botão PT / EN do site.
   - Textos escritos só entre aspas "..." (ex.: nome de hotel, número de
     voo) aparecem iguais nas duas línguas.

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
  titulo: { pt: "Fim de Ano da Família nos EUA", en: "Family Holiday Trip to the USA" },
  destino: { pt: "Nova York · Miami · Orlando", en: "New York · Miami · Orlando" },
  frase: {
    pt: "Natal e Réveillon com a família toda junta!",
    en: "Christmas and New Year's with the whole family together!",
  },

  // Momento exato da partida (é para cá que o contador conta).
  // O "-03:00" no final é o fuso de Curitiba — não apague.
  partida: "2026-12-18T17:20:00-03:00",
  // Chegada de volta em Curitiba
  retorno: "2027-01-06T10:45",

  // ---------------- Destinos (etapas da viagem) ----------------
  destinos: [
    {
      cidade: { pt: "Nova York", en: "New York" }, de: "2026-12-19", ate: "2026-12-22",
      coords: [40.758, -73.9855], // usado na previsão do tempo
      tema: "neve",
      // Fotos que passam sozinhas no cartão. Coloque os arquivos na pasta "fotos".
      fotos: [
        { src: "fotos/nova-york.jpg", legenda: { pt: "Árvore do Rockefeller Center", en: "Rockefeller Center Tree" } },
        { src: "fotos/nova-york-neve.jpg", legenda: { pt: "Central Park na neve", en: "Central Park in the snow" } },
      ],
      frase: { pt: "Natal de filme: neve, luzes e frio de verdade.", en: "A movie-style Christmas: snow, lights and real winter." },
      destaques: [
        { pt: "Árvore do Rockefeller", en: "Rockefeller Tree" },
        { pt: "Times Square", en: "Times Square" },
        { pt: "Patinação no gelo", en: "Ice skating" },
        { pt: "Vitrines de Natal", en: "Holiday windows" },
      ],
      obs: { pt: "Inverno: 0 °C ou menos · passeios a definir", en: "Winter: 32 °F (0 °C) or colder · activities TBD" },
    },
    {
      cidade: "Miami", de: "2026-12-22", ate: "2026-12-24",
      coords: [25.7709, -80.1904],
      tema: "sol",
      fotos: [
        { src: "fotos/miami.jpg", legenda: { pt: "South Beach", en: "South Beach" } },
        { src: "fotos/miami-praia.jpg", legenda: { pt: "Praia e skyline de Miami Beach", en: "Miami Beach shore and skyline" } },
      ],
      frase: { pt: "Sol, mar azul e o skyline de Brickell.", en: "Sunshine, blue water and the Brickell skyline." },
      destaques: [
        { pt: "South Beach", en: "South Beach" },
        { pt: "Brickell", en: "Brickell" },
        { pt: "Ocean Drive", en: "Ocean Drive" },
        { pt: "Pôr do sol na baía", en: "Bay sunset" },
      ],
      obs: { pt: "Clima quente: 20–27 °C · passeios a definir", en: "Warm weather: 68–80 °F · activities TBD" },
    },
    {
      cidade: "Orlando", de: "2026-12-24", ate: "2027-01-05",
      coords: [28.3257, -81.442],
      tema: "parque",
      fotos: [
        { src: "fotos/orlando-disney.jpg", legenda: { pt: "Castelo da Cinderela · Disney", en: "Cinderella Castle · Disney" } },
        { src: "fotos/orlando-universal.jpg", legenda: { pt: "Universal Studios", en: "Universal Studios" } },
        { src: "fotos/orlando-outlets.jpg", legenda: { pt: "Orlando Premium Outlets", en: "Orlando Premium Outlets" } },
      ],
      frase: { pt: "Parques, fogos de Réveillon e muitas compras.", en: "Theme parks, New Year's fireworks and lots of shopping." },
      destaques: [
        { pt: "Epic Universe", en: "Epic Universe" },
        { pt: "EPCOT", en: "EPCOT" },
        { pt: "Kennedy Space Center", en: "Kennedy Space Center" },
        { pt: "Universal", en: "Universal" },
        { pt: "Magic Kingdom na virada", en: "Magic Kingdom on New Year's Eve" },
        { pt: "Animal Kingdom", en: "Animal Kingdom" },
        { pt: "Outlets", en: "Outlets" },
        { pt: "Jogo da NBA", en: "NBA game" },
      ],
      obs: { pt: "Natal e Réveillon · roteiro completo abaixo", en: "Christmas and New Year's · full itinerary below" },
    },
  ],

  // ---------------- Créditos das fotos ----------------
  // As licenças Creative Commons pedem o nome do autor. Mantenha esta lista atualizada.
  creditos: [
    {
      oque: { pt: "Árvore do Rockefeller Center", en: "Rockefeller Center Tree" },
      autor: "JJonahJackalope", licenca: "CC BY-SA 4.0",
      link: "https://commons.wikimedia.org/wiki/File:Rockefeller_Center_Christmas_Tree,_2023-12-02.jpg",
    },
    {
      oque: { pt: "Central Park na neve", en: "Central Park in the snow" },
      autor: "King of Hearts", licenca: "CC BY-SA 4.0",
      link: "https://commons.wikimedia.org/wiki/File:Central_Park_New_York_January_2016_007.jpg",
    },
    {
      oque: { pt: "Posto de salva-vidas em Miami Beach", en: "Miami Beach lifeguard stand" },
      autor: "Radomianin", licenca: "CC BY-SA 4.0",
      link: "https://commons.wikimedia.org/wiki/File:Lifeguard_stand,_Miami_Beach.jpg",
    },
    {
      oque: { pt: "Castelo da Cinderela, Magic Kingdom", en: "Cinderella Castle, Magic Kingdom" },
      autor: "Carlos Cruz (Rstoplabe14)", licenca: "CC BY-SA 3.0",
      link: "https://commons.wikimedia.org/wiki/File:Cinderella_Castle_@_Magic_Kingdom.jpg",
    },
    {
      oque: { pt: "Praia de Miami Beach", en: "Miami Beach shore" },
      autor: "Cristo Vlahos", licenca: "CC BY-SA 4.0",
      link: "https://commons.wikimedia.org/wiki/File:Mia_beach.jpeg",
    },
    {
      oque: { pt: "Globo da Universal", en: "Universal globe" },
      autor: "ThrillZing", licenca: "CC BY 4.0",
      link: "https://commons.wikimedia.org/wiki/File:The_Universal_globe_and_fountain_with_palms_behind,_Universal_Studios_Florida,_June_2006_-_ThrillZing.jpg",
    },
    {
      oque: { pt: "Orlando Premium Outlets", en: "Orlando Premium Outlets" },
      autor: "Miosotis Jade", licenca: "CC BY-SA 4.0",
      link: "https://commons.wikimedia.org/wiki/File:Orlando_Premium_Outlets_02.JPG",
    },
  ],

  // ---------------- Trajetos (voos e viagens de carro) ----------------
  // tipo: "voo" ou "carro"
  trajetos: [
    {
      tipo: "voo",
      trecho: { pt: "Ida · 1º trecho", en: "Outbound · leg 1" },
      voo: "LA782", companhia: "LATAM",
      sai:   { data: "2026-12-18", hora: "17:20", cidade: "Curitiba", sigla: "CWB" },
      chega: { data: "2026-12-18", hora: "21:00", cidade: { pt: "Santiago do Chile", en: "Santiago, Chile" }, sigla: "SCL" },
      obs: "",
    },
    {
      tipo: "voo",
      trecho: { pt: "Ida · 2º trecho (conexão)", en: "Outbound · leg 2 (connection)" },
      voo: "LA532", companhia: "LATAM",
      sai:   { data: "2026-12-18", hora: "23:50", cidade: { pt: "Santiago do Chile", en: "Santiago, Chile" }, sigla: "SCL" },
      chega: { data: "2026-12-19", hora: "08:25", cidade: { pt: "Nova York", en: "New York" }, sigla: "JFK" },
      obs: { pt: "Voo noturno: chegamos na manhã seguinte.", en: "Overnight flight: we land the next morning." },
    },
    {
      tipo: "voo",
      trecho: { pt: "Nova York → Miami", en: "New York → Miami" },
      voo: "DL2500", companhia: "Delta",
      sai:   { data: "2026-12-22", hora: "15:32", cidade: { pt: "Nova York", en: "New York" }, sigla: "JFK" },
      chega: { data: "2026-12-22", hora: "18:54", cidade: "Miami", sigla: "MIA" },
      obs: "",
    },
    {
      tipo: "carro",
      trecho: "Miami → Orlando",
      sai:   { data: "2026-12-24", hora: "", cidade: "Miami", sigla: "MIA" },
      chega: { data: "2026-12-24", hora: "", cidade: "Orlando", sigla: "ORL" },
      obs: { pt: "Cerca de 4 horas de estrada.", en: "About a 4-hour drive." },
    },
    {
      tipo: "carro",
      trecho: "Orlando → Miami",
      sai:   { data: "2027-01-05", hora: "", cidade: "Orlando", sigla: "ORL" },
      chega: { data: "2027-01-05", hora: "", cidade: "Miami", sigla: "MIA" },
      obs: { pt: "Sair cedo! São cerca de 4 horas até o aeroporto de Miami.", en: "Leave early! It's about 4 hours to Miami airport." },
    },
    {
      tipo: "voo",
      trecho: { pt: "Volta · 1º trecho", en: "Return · leg 1" },
      voo: "LA191", companhia: "LATAM",
      sai:   { data: "2027-01-05", hora: "19:10", cidade: "Miami", sigla: "MIA" },
      chega: { data: "2027-01-06", hora: "05:40", cidade: "São Paulo", sigla: "GRU" },
      obs: { pt: "Voo noturno. Espera de cerca de 4 horas em Guarulhos.", en: "Overnight flight. About a 4-hour layover in Guarulhos." },
    },
    {
      tipo: "voo",
      trecho: { pt: "Volta · 2º trecho (conexão)", en: "Return · leg 2 (connection)" },
      voo: "LA3288", companhia: "LATAM",
      sai:   { data: "2027-01-06", hora: "09:45", cidade: "São Paulo", sigla: "GRU" },
      chega: { data: "2027-01-06", hora: "10:45", cidade: "Curitiba", sigla: "CWB" },
      obs: "",
    },
  ],

  // ---------------- Hospedagens ----------------
  // Deixe o endereço "" enquanto não souber (o mapa fica escondido).
  hoteis: [
    {
      cidade: { pt: "Nova York", en: "New York" },
      nome: "Hotel Edison Times Square",
      endereco: "228 W 47th St, New York, NY 10036",
      checkin: "2026-12-19",
      checkout: "2026-12-22",
      telefone: "",
      reserva: "",
      obs: { pt: "Do lado da Times Square.", en: "Right next to Times Square." },
    },
    {
      cidade: "Miami",
      nome: "Comfort Inn & Suites Downtown Brickell – Port of Miami",
      endereco: "100 SE 4th St, Miami, FL 33131",
      checkin: "2026-12-22",
      checkout: "2026-12-24",
      telefone: "",
      reserva: "",
      obs: "",
    },
    {
      cidade: "Orlando",
      nome: { pt: "Casa em Orlando (Kissimmee)", en: "Orlando House (Kissimmee)" },
      endereco: "2661 Calistoga Avenue, Kissimmee, FL 34741",
      checkin: "2026-12-24",
      checkout: "2027-01-05",
      telefone: "",
      reserva: "",
      obs: "",
    },
  ],

  // ---------------- Roteiro / Passeios ----------------
  // "local" aparece com link para o mapa.
  // "carro" = tempo estimado de carro saindo da casa em Kissimmee (sem trânsito).
  roteiro: [
    {
      dia: "2026-12-18",
      titulo: { pt: "Partida de Curitiba", en: "Departure from Curitiba" },
      atividades: [
        {
          hora: "17:20", nome: { pt: "Voo LA782 Curitiba → Santiago", en: "Flight LA782 Curitiba → Santiago" },
          local: "Aeroporto Afonso Pena (CWB)",
          obs: { pt: "Voo internacional: chegar umas 3h antes", en: "International flight: arrive about 3h early" },
        },
        { hora: "21:00", nome: { pt: "Chegada em Santiago (conexão)", en: "Arrival in Santiago (connection)" }, local: "Aeropuerto de Santiago (SCL)" },
        { hora: "23:50", nome: { pt: "Voo LA532 Santiago → Nova York", en: "Flight LA532 Santiago → New York" }, local: "Aeropuerto de Santiago (SCL)" },
      ],
    },
    {
      dia: "2026-12-19",
      titulo: { pt: "Chegada em Nova York", en: "Arrival in New York" },
      atividades: [
        {
          hora: "08:25", nome: { pt: "Chegada no JFK", en: "Landing at JFK" }, local: "JFK Airport",
          obs: { pt: "Imigração americana: passaporte e visto em mãos", en: "US immigration: have passport and visa ready" },
        },
        { hora: "", nome: { pt: "Check-in no hotel", en: "Hotel check-in" }, local: "Hotel Edison Times Square" },
      ],
    },
    {
      dia: "2026-12-22",
      titulo: { pt: "Nova York → Miami", en: "New York → Miami" },
      atividades: [
        { hora: "", nome: { pt: "Check-out do hotel", en: "Hotel check-out" }, local: "Hotel Edison Times Square" },
        { hora: "15:32", nome: { pt: "Voo DL2500 Nova York → Miami", en: "Flight DL2500 New York → Miami" }, local: "JFK Airport" },
        { hora: "18:54", nome: { pt: "Chegada em Miami", en: "Arrival in Miami" }, local: "Miami International Airport (MIA)" },
        { hora: "", nome: { pt: "Check-in no hotel", en: "Hotel check-in" }, local: "Comfort Inn & Suites Downtown Brickell, 100 SE 4th St, Miami" },
      ],
    },
    {
      dia: "2026-12-24",
      titulo: { pt: "Chegada de Miami e Ceia de Natal", en: "Arrival from Miami and Christmas Eve dinner" },
      atividades: [
        { hora: "", nome: { pt: "Check-out do hotel em Miami", en: "Check out of the Miami hotel" }, local: "Comfort Inn & Suites Downtown Brickell, 100 SE 4th St, Miami" },
        { hora: "", nome: { pt: "Viagem de carro Miami → Orlando", en: "Drive Miami → Orlando" }, obs: { pt: "Cerca de 4 horas de estrada", en: "About a 4-hour drive" } },
        { hora: "", nome: { pt: "Chegada na casa em Orlando", en: "Arrival at the Orlando house" }, local: "2661 Calistoga Avenue, Kissimmee, FL 34741" },
        { hora: "", nome: { pt: "Mercado", en: "Grocery run" } },
        { hora: "", nome: { pt: "Ceia de Natal", en: "Christmas Eve dinner" } },
      ],
    },
    {
      dia: "2026-12-25",
      titulo: { pt: "Epic Universe", en: "Epic Universe" },
      atividades: [
        { hora: "", nome: { pt: "Dia no Epic Universe", en: "Day at Epic Universe" }, local: "Epic Universe, Orlando, FL", carro: { min: 23, km: 19 } },
      ],
    },
    {
      dia: "2026-12-26",
      titulo: { pt: "Celebration e Winter Garden", en: "Celebration and Winter Garden" },
      atividades: [
        { hora: "", nome: { pt: "Café em Celebration", en: "Coffee in Celebration" }, local: "Celebration, FL", carro: { min: 19, km: 16 } },
        { hora: "", nome: { pt: "Compras em Winter Garden", en: "Shopping in Winter Garden" }, local: "Winter Garden, FL", carro: { min: 37, km: 44, de: { pt: "de Celebration até lá: cerca de 38 min", en: "from Celebration: about 38 min" } } },
      ],
    },
    {
      dia: "2026-12-27",
      titulo: { pt: "Kennedy Space Center", en: "Kennedy Space Center" },
      atividades: [
        { hora: "", nome: { pt: "Dia no Kennedy Space Center", en: "Day at Kennedy Space Center" }, local: "Kennedy Space Center Visitor Complex, FL", carro: { min: 79, km: 95 } },
      ],
    },
    {
      dia: "2026-12-28",
      titulo: { pt: "EPCOT", en: "EPCOT" },
      atividades: [
        { hora: "", nome: { pt: "Dia no EPCOT", en: "Day at EPCOT" }, local: "EPCOT, Walt Disney World, FL", carro: { min: 20, km: 17 } },
      ],
    },
    {
      dia: "2026-12-29",
      titulo: { pt: "Universal Studios e Islands of Adventure", en: "Universal Studios and Islands of Adventure" },
      atividades: [
        { hora: "", nome: { pt: "Universal Studios + Islands of Adventure", en: "Universal Studios + Islands of Adventure" }, local: "Universal Orlando Resort, FL", carro: { min: 29, km: 25 }, obs: { pt: "Ou compras, para quem quiser", en: "Or shopping, for anyone who prefers" } },
      ],
    },
    {
      dia: "2026-12-30",
      titulo: { pt: "Disney Springs", en: "Disney Springs" },
      atividades: [
        { hora: "", nome: { pt: "Passeio em Disney Springs", en: "Evening at Disney Springs" }, local: "Disney Springs, Lake Buena Vista, FL", carro: { min: 20, km: 17 } },
      ],
    },
    {
      dia: "2026-12-31",
      titulo: { pt: "Magic Kingdom e a virada", en: "Magic Kingdom and New Year's Eve" },
      atividades: [
        { hora: "", nome: { pt: "Dia no Magic Kingdom", en: "Day at Magic Kingdom" }, local: "Magic Kingdom, Walt Disney World, FL", carro: { min: 28, km: 24, de: { pt: "até o estacionamento (TTC) + 15 a 30 min de monotrilho ou balsa", en: "to the parking lot (TTC) + 15–30 min by monorail or ferry" } } },
        { hora: "", nome: { pt: "Virada do ano no parque", en: "Ringing in the New Year at the park" }, obs: { pt: "Fogos de Réveillon sobre o castelo", en: "New Year's fireworks over the castle" } },
      ],
    },
    {
      dia: "2027-01-01",
      titulo: { pt: "Dia livre", en: "Free day" },
      atividades: [
        { hora: "", nome: { pt: "Descanso, outlet ou passeios ao redor", en: "Rest, outlets or nearby outings" }, obs: { pt: "Cada um escolhe", en: "Everyone picks their own plan" } },
      ],
    },
    {
      dia: "2027-01-02",
      titulo: { pt: "Animal Kingdom", en: "Animal Kingdom" },
      atividades: [
        { hora: "", nome: { pt: "Dia no Animal Kingdom", en: "Day at Animal Kingdom" }, local: "Disney's Animal Kingdom, FL", carro: { min: 29, km: 24 } },
      ],
    },
    {
      dia: "2027-01-03",
      titulo: { pt: "Outlet e jogo da NBA", en: "Outlets and NBA game" },
      atividades: [
        { hora: "", nome: { pt: "Compras no outlet", en: "Outlet shopping" }, local: "Orlando Vineland Premium Outlets", carro: { min: 19, km: 16, de: { pt: "Vineland · o de International Drive fica a cerca de 28 min", en: "Vineland · the International Drive one is about 28 min away" } } },
        {
          hora: "16:00", nome: { pt: "Chegada ao Kia Center", en: "Arrive at Kia Center" },
          local: "Kia Center, Orlando, FL", carro: { min: 32, km: 32 },
          obs: { pt: "Vamos 2 horas antes do jogo", en: "We'll get there 2 hours before the game" },
        },
        {
          hora: "18:00", nome: "Orlando Magic vs. Memphis Grizzlies",
          obs: {
            pt: "Horário local de Orlando · Seção 220 · Fileira 8 · Assentos 6 a 18",
            en: "Orlando local time · Section 220 · Row 8 · Seats 6–18",
          },
        },
      ],
    },
    {
      dia: "2027-01-04",
      titulo: { pt: "Dia livre e malas", en: "Free day and packing" },
      atividades: [
        { hora: "", nome: { pt: "Passeios ao redor", en: "Nearby outings" } },
        { hora: "", nome: { pt: "Arrumar as malas", en: "Pack the bags" }, obs: { pt: "No dia seguinte saímos cedo", en: "We leave early the next day" } },
      ],
    },
    {
      dia: "2027-01-05",
      titulo: { pt: "Orlando → Miami → Brasil", en: "Orlando → Miami → Brazil" },
      atividades: [
        {
          hora: "", nome: { pt: "Check-out e saída cedo de Orlando", en: "Check out and leave Orlando early" },
          obs: { pt: "Cerca de 4 horas de estrada até Miami", en: "About a 4-hour drive to Miami" },
        },
        {
          hora: "19:10", nome: { pt: "Voo LA191 Miami → São Paulo", en: "Flight LA191 Miami → São Paulo" },
          local: "Miami International Airport (MIA)",
          obs: { pt: "Voo internacional: chegar umas 3h antes", en: "International flight: arrive about 3h early" },
        },
      ],
    },
    {
      dia: "2027-01-06",
      titulo: { pt: "De volta para casa", en: "Back home" },
      atividades: [
        { hora: "05:40", nome: { pt: "Chegada em Guarulhos", en: "Arrival in Guarulhos" }, local: "Aeroporto de Guarulhos (GRU)" },
        { hora: "09:45", nome: { pt: "Voo LA3288 São Paulo → Curitiba", en: "Flight LA3288 São Paulo → Curitiba" }, local: "Aeroporto de Guarulhos (GRU)" },
        { hora: "10:45", nome: { pt: "Chegada em Curitiba", en: "Arrival in Curitiba" }, local: "Aeroporto Afonso Pena (CWB)" },
      ],
    },
  ],

  // ---------------- Checklist inicial ----------------
  // Cada pessoa pode marcar e adicionar itens no próprio celular.
  checklist: [
    {
      categoria: { pt: "Documentos", en: "Documents" },
      itens: [
        { pt: "Passaporte válido", en: "Valid passport" },
        { pt: "Visto americano válido", en: "Valid US visa" },
        { pt: "Cartões de embarque / localizador", en: "Boarding passes / booking code" },
        { pt: "Seguro viagem (apólice impressa ou no celular)", en: "Travel insurance (printed or on your phone)" },
        { pt: "Cartão internacional e alguns dólares", en: "International card and some US dollars" },
        { pt: "Endereço dos hotéis anotado (pede na imigração)", en: "Hotel addresses written down (asked at immigration)" },
        { pt: "Ingresso do jogo da NBA (03/01)", en: "NBA game ticket (Jan 3)" },
        { pt: "Ingressos dos parques (Disney, Universal, Epic, Kennedy)", en: "Park tickets (Disney, Universal, Epic, Kennedy)" },
      ],
    },
    {
      categoria: { pt: "Roupas – Nova York (frio)", en: "Clothes – New York (cold)" },
      itens: [
        { pt: "Casaco grosso / jaqueta de inverno", en: "Heavy winter coat" },
        { pt: "Segunda pele (blusa e calça térmica)", en: "Thermal base layers" },
        { pt: "Gorro, luvas e cachecol", en: "Beanie, gloves and scarf" },
        { pt: "Bota ou tênis fechado confortável", en: "Comfortable boots or closed shoes" },
        { pt: "Meias grossas", en: "Thick socks" },
      ],
    },
    {
      categoria: { pt: "Roupas – Miami e Orlando", en: "Clothes – Miami & Orlando" },
      itens: [
        { pt: "Roupa de banho", en: "Swimwear" },
        { pt: "Roupas leves e um casaquinho para a noite", en: "Light clothes and a light jacket for the evening" },
        { pt: "Tênis confortável para os parques", en: "Comfortable sneakers for the parks" },
        { pt: "Chinelo / sandália", en: "Flip-flops / sandals" },
        { pt: "Óculos de sol e boné", en: "Sunglasses and cap" },
        { pt: "Roupa para o Natal e o Réveillon", en: "Outfits for Christmas and New Year's Eve" },
      ],
    },
    {
      categoria: { pt: "Viagens de carro", en: "Road trips" },
      itens: [
        { pt: "CNH de quem vai dirigir", en: "Driver's license for the drivers" },
        { pt: "Carregador de celular para o carro", en: "Car phone charger" },
        { pt: "Água e lanchinhos para a estrada", en: "Water and snacks for the road" },
        { pt: "Endereço de Orlando salvo no GPS", en: "Orlando address saved in the GPS" },
      ],
    },
    {
      categoria: { pt: "Higiene e saúde", en: "Toiletries & health" },
      itens: [
        { pt: "Remédios de uso contínuo (com receita)", en: "Regular medication (with prescription)" },
        { pt: "Protetor solar", en: "Sunscreen" },
        { pt: "Hidratante e protetor labial (o frio resseca)", en: "Moisturizer and lip balm (the cold dries your skin)" },
        { pt: "Escova e pasta de dente", en: "Toothbrush and toothpaste" },
        { pt: "Kit de primeiros socorros", en: "First-aid kit" },
      ],
    },
    {
      categoria: { pt: "Eletrônicos", en: "Electronics" },
      itens: [
        { pt: "Carregador de celular", en: "Phone charger" },
        { pt: "Power bank (na bagagem de mão)", en: "Power bank (in carry-on)" },
        { pt: "Adaptador de tomada padrão americano", en: "US plug adapter" },
        { pt: "Chip internacional / eSIM", en: "International SIM / eSIM" },
        { pt: "Fone de ouvido", en: "Headphones" },
      ],
    },
    {
      categoria: { pt: "Antes de sair de casa", en: "Before leaving home" },
      itens: [
        { pt: "Desligar o gás", en: "Turn off the gas" },
        { pt: "Tirar aparelhos da tomada", en: "Unplug appliances" },
        { pt: "Fechar janelas e trancar portas", en: "Close windows and lock doors" },
        { pt: "Avisar o banco sobre a viagem internacional", en: "Tell the bank about the international trip" },
      ],
    },
  ],

  // ---------------- Contatos importantes ----------------
  contatos: [
    { nome: { pt: "Emergência nos EUA (polícia, bombeiros, ambulância)", en: "US emergency (police, fire, ambulance)" }, telefone: "911" },
  ],
};
