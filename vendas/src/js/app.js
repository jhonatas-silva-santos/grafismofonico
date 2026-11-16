
(function () {
  "use strict";
  var C = window.SITE_CONFIG || {};
  var CONSENT_KEY = "ff_consent_v1";
  var UTM_KEY = "ff_params_v1";
  function isPh(v) { return typeof v !== "string" || v.indexOf("PREENCHER") !== -1; }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function mark(text) { var m = document.createElement("mark"); m.className = "ph"; m.textContent = text; return m; }
  function renderConfig() {
    $all("[data-cfg]").forEach(function (el) {
      var k = el.getAttribute("data-cfg");
      var v = C[k];
      if (v === undefined || v === null || v === "") {
        if (el.hasAttribute("data-cfg-opcional")) { var bx = el.closest("[data-cfg-bloco]") || el; bx.remove(); return; }
        v = "PREENCHER_" + k;
      }
      el.textContent = "";
      if (isPh(String(v))) { el.appendChild(mark(String(v))); return; }
      if (el.getAttribute("data-cfg-type") === "email") {
        var a = document.createElement("a"); a.href = "mailto:" + v; a.textContent = v; el.appendChild(a);
      } else { el.textContent = v; }
    });
    var t = document.body.getAttribute("data-title");
    document.title = (t ? t + " · " : "") + (isPh(C.produtoNome) ? "Produto" : C.produtoNome);
    $all("[data-lre]").forEach(function (el) {
      var v = C.livroReclamacoes;
      if (v === true) {
        el.innerHTML = '<a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener">Livro de Reclamações Eletrónico</a>';
        if (C.ralEntidade) {
          el.appendChild(document.createTextNode(" · Resolução Alternativa de Litígios: "));
          el.appendChild(isPh(C.ralEntidade) ? mark(C.ralEntidade) : document.createTextNode(C.ralEntidade));
        }
      } else { el.remove(); }
    });
  }
  function renderVideo() {
    $all("[data-video]").forEach(function (box) {
      var url = C[box.getAttribute("data-video")];
      if (!url) { box.remove(); return; }
      var yt = /(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/.exec(url);
      box.innerHTML = "";
      if (yt) {
        var b = document.createElement("button");
        b.className = "video-facade"; b.type = "button"; b.setAttribute("aria-label", "Ver vídeo");
        b.style.backgroundImage = "url(https://i.ytimg.com/vi/" + yt[1] + "/hqdefault.jpg)";
        b.innerHTML = '<span class="play">▶</span>';
        b.onclick = function () {
          box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + yt[1] +
            '?autoplay=1&playsinline=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen title="Vídeo"></iframe>';
        };
        box.appendChild(b);
      } else {
        var v = document.createElement("video");
        v.src = url; v.controls = true; v.playsInline = true; v.preload = "metadata";
        box.appendChild(v);
      }
      box.classList.remove("video-ph");
    });
  }
  var PASS = /^(utm_[a-z_]+|xcod|src|sck|fbclid)$/i;
  function collectParams() {
    var stored = {};
    try { stored = JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}"); } catch (e) {}
    var cur = new URLSearchParams(location.search), fresh = {}, has = false;
    cur.forEach(function (v, k) { if (PASS.test(k) && v) { fresh[k] = v; has = true; } });
    var p = has ? fresh : stored;
    if (has) { try { sessionStorage.setItem(UTM_KEY, JSON.stringify(p)); } catch (e) {} }
    if (!p.xcod && p.utm_content) p.xcod = p.utm_content;
    return p;
  }
  function buildHref(base, params) {
    var u; try { u = new URL(base); } catch (e) { return base; }
    Object.keys(params).forEach(function (k) { u.searchParams.set(k, params[k]); });
    return u.toString();
  }
  function wireCheckout() {
    var params = collectParams();
    $all("[data-checkout]").forEach(function (a) {
      var key = a.getAttribute("data-checkout") === "upsell" ? "checkoutUpsell" : "checkoutVenda";
      var base = C[key];
      a.href = buildHref(base, params);
      if (isPh(base)) a.classList.add("btn-ph");
      a.addEventListener("click", function (ev) {
        if (isPh(base)) {
          ev.preventDefault();
          alert("Checkout Hotmart ainda não configurado (" + key + " em js/config.js).");
          return;
        }
        if (window.fbq && hasMarketingConsent()) window.fbq("track", "InitiateCheckout");
      });
    });
    $all("[data-cfg-href]").forEach(function (a) {
      var v = C[a.getAttribute("data-cfg-href")];
      if (isPh(v)) { a.addEventListener("click", function (e) { e.preventDefault(); alert("Por preencher em js/config.js: " + v); }); }
      else a.href = buildHref(v, params);
    });
  }
  function getConsent() { try { return JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch (e) { return null; } }
  function hasMarketingConsent() { if (C.avisoCookies === false) return true; var c = getConsent(); return !!(c && c.marketing === true); }
  function setConsent(marketing) {
    var prev = getConsent();
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ marketing: !!marketing, ts: new Date().toISOString(), v: 1 })); } catch (e) {}
    hideBanner();
    if (marketing) loadMarketing();
    else if (prev && prev.marketing && (window.fbq || window.clarity || window.sentinel)) location.reload();
  }
  function loadPixel() {
    if (window.fbq) return;
    if (isPh(C.pixelId)) { console.warn("[pixel] ID por preencher em js/config.js — pixel não carregado."); return; }
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", C.pixelId);
    window.fbq("track", "PageView");
  }
  function loadClarity() {
    if (!C.clarityId || isPh(C.clarityId) || window.clarity) return;
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", C.clarityId);
  }
  // Clarity só depois da página carregar: não disputa a rede com a imagem do topo nem com o rastreamento.
  function loadClarityLater() {
    if (document.readyState === "complete") { setTimeout(loadClarity, 0); return; }
    window.addEventListener("load", function () { setTimeout(loadClarity, 0); });
  }
  // Na página de vendas o rastreamento já vem no <head> (window.sentinel existe); aqui fica só como reserva.
  function loadSentinel() {
    if (!C.sentinelUrl || !C.sentinelTid || isPh(C.sentinelTid) || window.sentinel) return;
    (function(s,e,n,t,i){s[n]=s[n]||function(){(s[n].q=s[n].q||[]).push(arguments)};var js=e.createElement('script');js.async=1;js.src=t+'?tid='+i;e.head.appendChild(js)})(window,document,'sentinel',C.sentinelUrl,C.sentinelTid);
  }
  function isSalesPage() { var p = location.pathname.replace(/\/+$/, ""); return p === "" || /\/index(\.html)?$/.test(p); }
  function loadMarketing() { loadPixel(); if (isSalesPage()) { loadSentinel(); loadClarityLater(); } }
  function banner() { return document.getElementById("cookie-banner"); }
  function hideBanner() { var b = banner(); if (b) b.hidden = true; }
  function showBanner(withPrefs) {
    var b = banner(); if (!b) return;
    b.hidden = false;
    var prefs = document.getElementById("cookie-prefs");
    prefs.hidden = !withPrefs;
    document.getElementById("ck-marketing").checked = hasMarketingConsent();
  }
  function wireConsent() {
    if (C.avisoCookies === false) { hideBanner(); loadMarketing(); return; }
    var b = banner(); if (!b) return;
    b.querySelector("[data-ck=accept]").onclick = function () { setConsent(true); };
    b.querySelector("[data-ck=reject]").onclick = function () { setConsent(false); };
    b.querySelector("[data-ck=config]").onclick = function () { showBanner(true); };
    b.querySelector("[data-ck=save]").onclick = function () { setConsent(document.getElementById("ck-marketing").checked); };
    $all("[data-open-consent]").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); showBanner(true); }); });
    var c = getConsent();
    if (!c) showBanner(false);
    else if (c.marketing) loadMarketing();
  }
  function upsellDelay() {
    var box = document.querySelector("[data-delay]"); if (!box) return;
    var s = Number(C.upsellDelaySegundos) || 0;
    if (s > 0) { box.hidden = true; setTimeout(function () { box.hidden = false; }, s * 1000); }
  }
  function init() { renderConfig(); renderVideo(); wireCheckout(); wireConsent(); upsellDelay(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
