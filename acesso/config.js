/* =====================================================================
   CONFIGURAÇÃO — edite só esta parte
   Os PDFs ficam em /acesso/pdfs/<kit>/ neste mesmo repositório.
   ===================================================================== */
window.CONFIG = {
  materiais: {
    kit1: [
      { grupo: "👋 Comece aqui", itens: [
        { nome: "Guia para os pais", desc: "Leia antes de começar", pag: 6, arq: "/acesso/pdfs/kit1/00_Comeca-aqui_Guia-para-os-pais.pdf" }
      ]},
      { grupo: "📚 Atividades principais", itens: [
        { nome: "Nível 1 · Palavras de 2 sílabas", pag: 34, arq: "/acesso/pdfs/kit1/Nivel-1_Palavras-de-2-silabas.pdf" },
        { nome: "Nível 2 · Palavras de 3 sílabas", pag: 34, arq: "/acesso/pdfs/kit1/Nivel-2_Palavras-de-3-silabas.pdf" },
        { nome: "Nível 3 · Palavras de 4 sílabas", pag: 34, arq: "/acesso/pdfs/kit1/Nivel-3_Palavras-de-4-silabas.pdf" },
        { nome: "Nível 4 · Frases curtas", pag: 19, arq: "/acesso/pdfs/kit1/Nivel-4_Frases-curtas.pdf" },
        { nome: "Atividades fónicas em letra de imprensa maiúscula", pag: 29, arq: "/acesso/pdfs/kit1/Atividades-fonicas-em-letra-de-imprensa-maiuscula.pdf" }
      ]},
      { grupo: "🎁 Bónus", itens: [
        { nome: "Caderno Alfabeto com Imagens", pag: 28, arq: "/acesso/pdfs/kit1/Bonus-01_Caderno-Alfabeto-com-Imagens.pdf" },
        { nome: "Caderno Puzzle do Alfabeto", pag: 15, arq: "/acesso/pdfs/kit1/Bonus-02_Caderno-Puzzle-do-Alfabeto.pdf" },
        { nome: "Caderno Formar Palavras", pag: 12, arq: "/acesso/pdfs/kit1/Bonus-03_Caderno-Formar-Palavras.pdf" },
        { nome: "Caderno Alfabeto com Relógio", pag: 15, arq: "/acesso/pdfs/kit1/Bonus-04_Caderno-Alfabeto-com-Relogio.pdf" },
        { nome: "Caderno Alfabeto para Cobrir", pag: 28, arq: "/acesso/pdfs/kit1/Bonus-05_Caderno-Alfabeto-para-Cobrir.pdf" },
        { nome: "Caderno Alfabeto com Carinhas", pag: 28, arq: "/acesso/pdfs/kit1/Bonus-06_Caderno-Alfabeto-com-Carinhas.pdf" }
      ]}
    ],
    // Kit 2 (upsell) — só aparece em /acesso-completo
    kit2: [
      { grupo: "📚 Atividades principais", itens: [
        { nome: "Parte A · Sílabas Difíceis", pag: 44, arq: "/acesso/pdfs/kit2/Continuacao_Parte-A_Silabas-Dificeis.pdf" },
        { nome: "Parte B · Primeiros Textos", pag: 14, arq: "/acesso/pdfs/kit2/Continuacao_Parte-B_Primeiros-Textos.pdf" }
      ]},
      { grupo: "🎁 Extras", itens: [
        { nome: "Caderno Ligar Ideias", pag: 14, arq: "/acesso/pdfs/kit2/Continuacao_Extra_Caderno-Ligar-Ideias.pdf" },
        { nome: "Caderno de Grafomotricidade", pag: 14, arq: "/acesso/pdfs/kit2/Continuacao_Extra_Caderno-de-Grafomotricidade.pdf" }
      ]}
    ]
  },
  // Página de compra do Kit 2 (aparece para quem só tem o Kit 1)
  linkUpsell: "https://pay.hotmart.com/O108500810E?checkoutMode=10",
  precoUpsell: "29 €",
  suporteEmail: "rr.suportesac@gmail.com"
};
