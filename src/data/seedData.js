export const seedData = {
  editions: [
    {
      id: "edition-2026",
      year: 2026,
      title: "Reinado de Nossa Senhora do Rosario da Colonia Santa Isabel",
      startDate: "2026-05-01",
      endDate: "2026-05-03",
      status: "Realizada",
      notes: "Celebracao com novenas, procissoes, rituais, chegada da imagem pelo Rio Paraopeba, cortejos e Missa Conga.",
      schedule: [
        { date: "2026-05-01", time: "19h", name: "Reza do Terco e documentario Entre o Mito e a Tradicao", place: "Sede da Irmandade" },
        { date: "2026-05-02", time: "19h", name: "Hasteamento da Bandeira de Nossa Senhora do Rosario", place: "Sede da Irmandade" },
        { date: "2026-05-03", time: "5h", name: "Matina e queima de fogos", place: "Colonia Santa Isabel" },
        { date: "2026-05-03", time: "8h", name: "Recepcao das guardas de congado", place: "Colonia Santa Isabel" },
        { date: "2026-05-03", time: "10h", name: "Retirada da imagem de Nossa Senhora do Rosario do Rio Paraopeba", place: "Barca da Colonia Santa Isabel" },
        { date: "2026-05-03", time: "15h30", name: "Cortejo de Sao Benedito, Santa Efigenia, Sao Jorge e Nossa Senhora do Rosario", place: "Trajeto da festa" },
        { date: "2026-05-03", time: "16h", name: "Missa Conga e encerramento", place: "Sede da Irmandade" }
      ]
    }
  ],
  participants: [
    {
      id: "participant-irmandade",
      name: "Irmandade de Nossa Senhora do Rosario da Colonia Santa Isabel",
      role: "Organizacao comunitaria",
      editionYear: 2026,
      contact: "",
      notes: "Responsavel pela celebracao e pela preservacao da tradicao local."
    },
    {
      id: "participant-guardas",
      name: "Guardas de Congado",
      role: "Participacao cultural e religiosa",
      editionYear: 2026,
      contact: "",
      notes: "Recebem a imagem e participam dos cortejos e da Missa Conga."
    },
    {
      id: "participant-andre",
      name: "Andre Bueno",
      role: "Capitao-Mor e superintendente de Patrimonio Cultural",
      editionYear: 2026,
      contact: "",
      notes: "Fonte citada na noticia sobre fe, resistencia cultural e memoria da festa."
    }
  ],
  places: [
    {
      id: "place-sede",
      name: "Sede da Irmandade, intitulada Senzala",
      type: "Sede",
      address: "Rua dos Esportes, n. 306, Colonia Santa Isabel, Betim-MG",
      usage: "Reza do Terco, exibicao do documentario, hasteamento da bandeira, acolhida da procissao e atividades de encerramento."
    },
    {
      id: "place-rio",
      name: "Rio Paraopeba",
      type: "Rio",
      address: "Referencia territorial da Colonia Santa Isabel",
      usage: "Chegada tradicional da imagem de Nossa Senhora do Rosario em barca."
    },
    {
      id: "place-barca",
      name: "Barca da Colonia Santa Isabel",
      type: "Ponto ritual",
      address: "Colonia Santa Isabel, Betim-MG",
      usage: "Retirada da imagem de Nossa Senhora do Rosario antes da procissao."
    }
  ],
  culture: [
    { id: "culture-patrimonio", title: "Patrimonio imaterial municipal", category: "Patrimonio", description: "O Reinado de Nossa Senhora do Rosario e reconhecido oficialmente como patrimonio imaterial de Betim desde 2020." },
    { id: "culture-raizes", title: "Raizes congadeiras", category: "Historia", description: "A manifestacao preserva raizes congadeiras de familias da Colonia Santa Isabel, unindo religiosidade catolica, memoria ancestral e identidade comunitaria." },
    { id: "culture-rio", title: "Chegada da imagem pelo rio", category: "Rito", description: "O ponto alto da festa e a chegada da imagem de Nossa Senhora do Rosario pelo Rio Paraopeba, seguida pela recepcao das guardas e pela procissao." },
    { id: "culture-irmandade", title: "Irmandade criada em 2010", category: "Historia", description: "A historia recente da festa se fortaleceu com a criacao da Irmandade em 2010 e a primeira Missa Conga em 2011." },
    { id: "culture-congo", title: "Terno de Congo", category: "Rito", description: "Guarda marcada por cantos, dancas, cores vibrantes e movimentos que anunciam a alegria do cortejo." },
    { id: "culture-mocambique", title: "Terno de Mocambique", category: "Rito", description: "Tradicao de ritmo cadenciado, gungas e papel de guarda da coroa, dos altares e da memoria ancestral." },
    { id: "culture-catupe", title: "Terno de Catupe", category: "Rito", description: "Expressao musical que enriquece a harmonia sonora da celebracao com instrumentos e batidas proprias." },
    { id: "culture-marujada", title: "Marujada", category: "Historia", description: "Registro cultural associado a cantos de jornada, aguas e chegada simbolica da imagem protetora pelo rio." }
  ]
};
