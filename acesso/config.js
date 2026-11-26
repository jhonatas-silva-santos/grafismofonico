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
        { nome: "Atividades fónicas em letra de imprensa maiúscula", pag: 29, arq: "/acesso/pdfs/kit1/Atividades-fonicas-em-letra-de-imprensa-maiuscula.pdf" },
        // novo (24/11/2026) — fica no fim do grupo para não mexer no progresso já guardado (chaves por posição)
        { nome: "Fichas de Letra Manuscrita", desc: "Novo · aprender a escrever em letra de mão", pag: 99, arq: "/acesso/pdfs/kit1/Fichas-de-Letra-Manuscrita.pdf" }
      ]},
      { grupo: "🎁 Bónus", itens: [
        { nome: "Caderno Alfabeto com Imagens", pag: 28, arq: "/acesso/pdfs/kit1/Bonus-01_Caderno-Alfabeto-com-Imagens.pdf" },
        { nome: "Caderno Puzzle do Alfabeto", pag: 15, arq: "/acesso/pdfs/kit1/Bonus-02_Caderno-Puzzle-do-Alfabeto.pdf" },
        { nome: "Caderno Formar Palavras", pag: 12, arq: "/acesso/pdfs/kit1/Bonus-03_Caderno-Formar-Palavras.pdf" },
        { nome: "Caderno Alfabeto com Relógio", pag: 15, arq: "/acesso/pdfs/kit1/Bonus-04_Caderno-Alfabeto-com-Relogio.pdf" },
        { nome: "Caderno Alfabeto para Cobrir", pag: 28, arq: "/acesso/pdfs/kit1/Bonus-05_Caderno-Alfabeto-para-Cobrir.pdf" },
        { nome: "Caderno Alfabeto com Carinhas", pag: 28, arq: "/acesso/pdfs/kit1/Bonus-06_Caderno-Alfabeto-com-Carinhas.pdf" }
      ]},
      // novo grupo (24/11/2026) — no fim para não mexer no progresso guardado (chaves por posição)
      { grupo: "✍️ Letra manuscrita", itens: [
        { nome: "Manuscrita · Nível 1 · Palavras de 2 sílabas", pag: 33, arq: "/acesso/pdfs/manuscrita/Manuscrita_Nivel-1_Palavras-de-2-silabas.pdf" },
        { nome: "Manuscrita · Nível 2 · Palavras de 3 sílabas", pag: 33, arq: "/acesso/pdfs/manuscrita/Manuscrita_Nivel-2_Palavras-de-3-silabas.pdf" },
        { nome: "Manuscrita · Nível 3 · Palavras de 4 sílabas", pag: 33, arq: "/acesso/pdfs/manuscrita/Manuscrita_Nivel-3_Palavras-de-4-silabas.pdf" },
        { nome: "Manuscrita · Nível 4 · Frases curtas", pag: 18, arq: "/acesso/pdfs/manuscrita/Manuscrita_Nivel-4_Frases-curtas.pdf" },
        { nome: "Ler em manuscrita · Nível 1", pag: 33, arq: "/acesso/pdfs/manuscrita/Ler-Manuscrita_Nivel-1_Palavras-de-2-silabas.pdf" },
        { nome: "Ler em manuscrita · Nível 2", pag: 33, arq: "/acesso/pdfs/manuscrita/Ler-Manuscrita_Nivel-2_Palavras-de-3-silabas.pdf" },
        { nome: "Ler em manuscrita · Nível 3", pag: 33, arq: "/acesso/pdfs/manuscrita/Ler-Manuscrita_Nivel-3_Palavras-de-4-silabas.pdf" },
        { nome: "Ler em manuscrita · Nível 4", pag: 18, arq: "/acesso/pdfs/manuscrita/Ler-Manuscrita_Nivel-4_Frases-curtas.pdf" }
      ]},
      { grupo: "🎄 Especial Natal", itens: [
        { nome: "Fichas de Natal · 24 palavras (1 a 24 de dezembro)", pag: 28, arq: "/acesso/pdfs/natal/Fichas-de-Natal.pdf" }
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
  // Botão de compra do Kit 2 para quem só tem o Kit 1. Vazio = sem botão (Kit 2 desligado em 20/11/2026).
  linkUpsell: "",
  precoUpsell: "29 €",
  suporteEmail: "rr.suportesac@gmail.com"
};
