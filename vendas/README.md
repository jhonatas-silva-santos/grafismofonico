# Página de vendas — Grafismo Fónico

Publicada na Vercel no projeto **grafismo-pt-previa** → `grafismofonico.acessoreservado.site`.
O conteúdo de `src/` é o que vai para o ar (a raiz do site).

## Como editar

- **Textos e estrutura da página:** edite `index.template.html` e depois rode `python3 build.py`.
  O `build.py` gera `src/index.html` com o CSS colocado dentro do HTML (carrega mais rápido).
- **Estilo (CSS):** edite `src/css/style.css` e rode `python3 build.py`.
  O `style.css` continua a ser usado pelas outras páginas (upsell, obrigado, termos...).
- **Preço, checkout, e-mail de suporte, IDs:** `src/js/config.js`.
- **Não edite `src/index.html` à mão** — ele é gerado pelo `build.py`.

## Otimizações de carregamento (nov/2026)

- Rastreamento avançado (Sentinel → pixel 1164106139350670) é o primeiro script do `<head>`,
  para o PageView sair o mais cedo possível (antes só começava depois do app.js).
- Imagem do topo pré-carregada; no celular baixa a versão de 600 px (30 KB) em vez da de 1200 px (84 KB).
- CSS dentro do HTML; `config.js` e `app.js` com `defer` (não bloqueiam a página).
- Clarity carrega só depois da página terminar de abrir.
- Cache de 7 dias para imagens/fontes e 1 hora para CSS/JS (`src/vercel.json`).
- Se um dia ligar o aviso de cookies (`avisoCookies: true`), o script do Sentinel no `<head>`
  precisa passar a respeitar o consentimento.

## O que ainda não está aqui

As imagens (`src/img/`), fontes (`src/fonts/`), `favicon.ico` e as páginas
`upsell.html`, `obrigado.html`, `termos.html`, `privacidade.html`, `cookies.html`, `garantia.html`
estão só na Vercel e na pasta original do projeto no computador. Copie-as para `src/` para o
repositório ficar completo.
