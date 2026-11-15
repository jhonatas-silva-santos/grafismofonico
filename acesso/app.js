
const CONFIG = window.CONFIG;

/* =====================================================================
   CONTEÚDO DOS KITS
   tipos de atividade:
   inicial = vê a figura e escolhe a vogal inicial
   som     = ouve a sílaba e escolhe a certa
   monta   = monta a palavra com as sílabas
   falta   = escolhe a sílaba que falta
   texto   = lê um texto curto e responde
   ===================================================================== */
const KITS = [
 { id:"kit1", nome:"Kit de Atividades de Grafismo Fónico", tag:"Kit 1", icone:"🦆",
   modulos:[
    { id:"vogais", nome:"Vogais", desc:"A E I O U — o som de cada vogal", tipo:"inicial",
      itens:[{w:"ABELHA",e:"🐝"},{w:"ELEFANTE",e:"🐘"},{w:"IGREJA",e:"⛪"},{w:"OVO",e:"🥚"},{w:"UVA",e:"🍇"},
             {w:"ÁRVORE",e:"🌳",l:"A"},{w:"ESTRELA",e:"⭐"},{w:"ÍMAN",e:"🧲",l:"I"},{w:"OVELHA",e:"🐑"},{w:"URSO",e:"🐻"},
             {w:"AVIÃO",e:"✈️"},{w:"ESCOVA",e:"🪥"},{w:"ILHA",e:"🏝️"},{w:"OLHO",e:"👁️"},{w:"UNICÓRNIO",e:"🦄"}]},
    { id:"silabas", nome:"Sílabas simples", desc:"BA, PA, MA, TA, LA… ouvir e reconhecer", tipo:"som",
      itens:["BA","BE","BI","BO","BU","PA","PE","PI","PO","PU","MA","ME","MI","MO","MU","TA","TE","TI","TO","TU","LA","LE","LI","LO","LU","DA","DE","DO","SA","SO","FA","FE","VA","VI","NA","NO"]},
    { id:"palavras2", nome:"Palavras de 2 sílabas", desc:"Juntar sílabas e formar palavras", tipo:"monta",
      itens:[{s:["PA","TO"],e:"🦆"},{s:["SA","PO"],e:"🐸"},{s:["BO","LA"],e:"⚽"},{s:["GA","TO"],e:"🐱"},{s:["CA","SA"],e:"🏠"},
             {s:["MA","LA"],e:"🧳"},{s:["DA","DO"],e:"🎲"},{s:["LU","A"],e:"🌙"},{s:["FA","DA"],e:"🧚"},{s:["PI","PA"],e:"🪁",d:"PIPA"},
             {s:["VA","CA"],e:"🐄"},{s:["RA","TO"],e:"🐭"},{s:["MO","TA"],e:"🏍️"},{s:["BO","TA"],e:"👢"}]},
    { id:"palavras3", nome:"Palavras de 3 sílabas", desc:"Descobrir a sílaba que falta", tipo:"falta",
      itens:[{s:["MA","CA","CO"],e:"🐒"},{s:["BO","NE","CA"],e:"🪆"},{s:["SA","PA","TO"],e:"👞"},{s:["BA","NA","NA"],e:"🍌"},
             {s:["CA","VA","LO"],e:"🐴"},{s:["JA","NE","LA"],e:"🪟"},{s:["GI","RA","FA"],e:"🦒"},{s:["TO","MA","TE"],e:"🍅"},
             {s:["PI","PO","CA"],e:"🍿"},{s:["CA","MI","SA"],e:"👕"},{s:["PE","TE","CA"],e:"🎀"},{s:["BA","TA","TA"],e:"🥔"}]}
   ]},
 { id:"kit2", nome:"Grafismo Fónico 2: Sílabas Difíceis e Primeiros Textos", tag:"Kit 2", icone:"📖",
   modulos:[
    { id:"digrafos", nome:"CH, LH e NH", desc:"Os sons que se escrevem com duas letras", tipo:"monta",
      itens:[{s:["CHA","VE"],e:"🔑"},{s:["CHU","VA"],e:"🌧️"},{s:["FO","LHA"],e:"🍃"},{s:["CO","E","LHO"],e:"🐰"},
             {s:["A","BE","LHA"],e:"🐝"},{s:["NI","NHO"],e:"🪺"},{s:["GA","LI","NHA"],e:"🐔"},{s:["A","RA","NHA"],e:"🕷️"},
             {s:["CHA","PÉU"],e:"🎩"},{s:["O","VE","LHA"],e:"🐑"},{s:["MO","NHO"],e:"🍝",x:true},{s:["CHI","NE","LO"],e:"🩴"}].filter(i=>!i.x)},
    { id:"rrss", nome:"RR e SS", desc:"Quando a letra aparece a dobrar", tipo:"falta",
      itens:[{s:["CA","RRO"],e:"🚗"},{s:["TE","RRA"],e:"🌍"},{s:["GA","RRA","FA"],e:"🍾"},{s:["PÁ","SSA","RO"],e:"🐦"},
             {s:["O","SSO"],e:"🦴"},{s:["CA","CHO","RRO"],e:"🐶"},{s:["MA","SSA"],e:"🍝"},{s:["BA","RRI","GA"],e:"🫃",x:true},
             {s:["TO","SSE"],e:"🤧"},{s:["SER","RO","TE"],e:"🪚",x:true},{s:["BE","ZE","RRO"],e:"🐞"},{s:["A","SSO","BI","O"],e:"😗",x:true}].filter(i=>!i.x),
      distratores:["RO","RA","SO","SA","RI","SE","ZO","ZA"]},
    { id:"complexas", nome:"Sílabas complexas", desc:"BRA, PLA, TRA, FLO… duas consoantes juntas", tipo:"som",
      itens:["BRA","BRE","BRI","PRA","PRE","PRO","TRA","TRE","TRI","CRA","CRE","GRA","GRI","DRA","FRA","FRU","BLA","BLO","PLA","PLU","CLA","CLE","FLA","FLO","GLO","TLA"].filter(s=>s!=="TLA")},
    { id:"textos", nome:"Primeiros textos", desc:"Ler pequenas histórias e responder", tipo:"texto",
      itens:[
        {t:"O sapo Zeca vive no lago. Ele salta de folha em folha.", q:"Onde vive o sapo Zeca?", o:["No lago","Na casa","Na escola"], a:0},
        {t:"A Rita tem uma bola azul. Ela joga com o cão no jardim.", q:"De que cor é a bola da Rita?", o:["Vermelha","Azul","Amarela"], a:1},
        {t:"O pato Tomé gosta de chuva. Quando chove, ele canta: quá, quá!", q:"O que o pato Tomé faz quando chove?", o:["Dorme","Come","Canta"], a:2},
        {t:"A galinha Lili pôs três ovos no ninho. Os pintainhos nasceram de manhã.", q:"Quantos ovos pôs a galinha?", o:["Dois","Três","Cinco"], a:1},
        {t:"O Rui foi à praia com o avô. Fizeram um castelo de areia muito alto.", q:"Com quem foi o Rui à praia?", o:["Com o avô","Com a mãe","Com a irmã"], a:0},
        {t:"A coelha Nina come cenouras. Ela tem orelhas grandes e brancas.", q:"O que come a coelha Nina?", o:["Peixe","Cenouras","Bolachas"], a:1},
        {t:"Está a chover. A Marta veste a capa e calça as botas para ir à escola.", q:"Para onde vai a Marta?", o:["Para a praia","Para a escola","Para o parque"], a:1},
        {t:"O gato Faísca dorme no sofá. À noite, ele brinca com um novelo de lã.", q:"Onde dorme o gato Faísca?", o:["No sofá","Na cama","No telhado"], a:0}
      ]}
   ]}
];

/* Lições por módulo: 2 lições + 1 desafio */
const NOS = [{id:"l1",nome:"Lição 1",ic:"⭐",n:5},{id:"l2",nome:"Lição 2",ic:"🎯",n:6},{id:"boss",nome:"Desafio",ic:"👑",n:8,boss:true}];

/* Medalhas */
const MEDALHAS = [
  {id:"primeira",ic:"🌱",nome:"Primeiro passo",desc:"Terminar a 1.ª lição"},
  {id:"perfeita",ic:"💎",nome:"Lição perfeita",desc:"3 estrelas numa lição"},
  {id:"cinco",ic:"🚀",nome:"Embalado",desc:"Terminar 5 lições"},
  {id:"combo",ic:"⚡",nome:"Combo x5",desc:"5 respostas certas seguidas"},
  {id:"streak3",ic:"🔥",nome:"3 dias seguidos",desc:"Praticar 3 dias seguidos"},
  {id:"streak7",ic:"🌋",nome:"Semana de fogo",desc:"Praticar 7 dias seguidos"},
  {id:"kit1",ic:"🦆",nome:"Mestre das sílabas",desc:"Completar o Kit 1"},
  {id:"kit2",ic:"📖",nome:"Pequeno leitor",desc:"Completar o Kit 2"},
  {id:"impresso",ic:"✏️",nome:"Mão na massa",desc:"Concluir um caderno do PDF"},
  {id:"nivel5",ic:"🏅",nome:"Nível 5",desc:"Chegar ao nível 5"}
];

/* =====================================================================
   ESTADO
   ===================================================================== */
const CHAVE = "gf_membros_v1";
let S = carregar();

function novoEstado(){return {xp:0,estrelas:{},streak:{ult:"",n:0},medalhas:[],pdf:{},licoes:0}}
function carregar(){try{return Object.assign(novoEstado(),JSON.parse(localStorage.getItem(CHAVE)||"{}"))}catch(e){return novoEstado()}}
function guardar(){try{localStorage.setItem(CHAVE,JSON.stringify(S))}catch(e){}}

const $=s=>document.querySelector(s);
const embaralha=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
// Acesso definido pela página: /acesso = Kit 1 · /acesso-completo = Kit 1 + Kit 2
const ACESSO = window.ACESSO_KITS || ["kit1"];
const tem=k=>ACESSO.includes(k);
const hoje=()=>new Date().toISOString().slice(0,10);

/* =====================================================================
   XP / NÍVEL / STREAK / MEDALHAS
   ===================================================================== */
const nivelDe=xp=>Math.floor(xp/120)+1;
function totalEstrelas(){return Object.values(S.estrelas).reduce((a,b)=>a+b,0)+Object.values(S.pdf).filter(Boolean).length}
function marcarDia(){
  const h=hoje();if(S.streak.ult===h)return;
  const ontem=new Date(Date.now()-864e5).toISOString().slice(0,10);
  S.streak.n=S.streak.ult===ontem?S.streak.n+1:1;S.streak.ult=h;
}
function streakAtual(){const ontem=new Date(Date.now()-864e5).toISOString().slice(0,10);return (S.streak.ult===hoje()||S.streak.ult===ontem)?S.streak.n:0}
function ganhaMedalha(id){if(S.medalhas.includes(id))return null;S.medalhas.push(id);return MEDALHAS.find(m=>m.id===id)}
function kitCompleto(kid){const kit=KITS.find(k=>k.id===kid);return kit.modulos.every(m=>NOS.every(n=>S.estrelas[`${kid}.${m.id}.${n.id}`]>0))}
function verificaMedalhas(extra={}){
  const novas=[];const add=id=>{const m=ganhaMedalha(id);if(m)novas.push(m)};
  if(S.licoes>=1)add("primeira");if(S.licoes>=5)add("cinco");
  if(extra.perfeita)add("perfeita");if(extra.combo>=5)add("combo");
  if(S.streak.n>=3)add("streak3");if(S.streak.n>=7)add("streak7");
  if(kitCompleto("kit1"))add("kit1");if(tem("kit2")&&kitCompleto("kit2"))add("kit2");
  if(Object.values(S.pdf).some(Boolean))add("impresso");if(nivelDe(S.xp)>=5)add("nivel5");
  return novas;
}

/* =====================================================================
   RENDER
   ===================================================================== */
function render(){
  $("#hNome").textContent=tem("kit2")?"Acesso Completo":"Área de Membros";
  const nv=nivelDe(S.xp);$("#hNivel").textContent=`Nível ${nv} · ${S.xp} XP`;
  $("#hBarra").style.width=((S.xp%120)/120*100)+"%";
  $("#hStreak").textContent=streakAtual();$("#hEstrelas").textContent=totalEstrelas();
  renderTrilha();renderPdfs();renderConquistas();
}

function estadoNo(kid,mi,ni){
  // desbloqueia em sequência dentro de cada kit
  const kit=KITS.find(k=>k.id===kid);const seq=[];
  kit.modulos.forEach((m,a)=>NOS.forEach((n,b)=>seq.push(`${kid}.${m.id}.${n.id}`)));
  const idx=mi*NOS.length+ni;const key=seq[idx];
  const feito=(S.estrelas[key]||0)>0;
  const liberado=idx===0||(S.estrelas[seq[idx-1]]||0)>0;
  return {key,feito,liberado,atual:liberado&&!feito};
}

function renderTrilha(){
  const nv=nivelDe(S.xp);
  let h=`<div class="saudacao"><div class="mascote">🐸</div><div><h2>🎁 Bónus: Jogos de leitura</h2><p>${frase()}</p></div></div>`;
  KITS.forEach(kit=>{
    const liberado=tem(kit.id);
    const tot=kit.modulos.length*NOS.length;
    const feitos=kit.modulos.reduce((a,m)=>a+NOS.filter(n=>S.estrelas[`${kit.id}.${m.id}.${n.id}`]>0).length,0);
    h+=`<div class="kit ${kit.id} ${liberado?"":"bloqueado"}">
      <div class="kit-cab"><div class="kit-ic">${kit.icone}</div><div><span class="tag">${kit.tag}</span><h3>${kit.nome}</h3>
      <div class="prog">${liberado?`${feitos}/${tot} lições concluídas`:"🔒 Bloqueado"}</div></div></div>`;
    if(!liberado){
      h+=`<div class="cadeado"><div class="box"><div class="ic">🔒</div><h4>Continue a aventura!</h4>
        <p>Depois das sílabas simples, a criança aprende CH, LH, NH, RR, SS, sílabas complexas e lê os primeiros textos sozinha.</p>
        <a class="btn rosa cheio" href="${CONFIG.linkUpsell}" target="_blank" rel="noopener">Desbloquear Kit 2 · ${CONFIG.precoUpsell}</a>
        <p style="margin:10px 0 0;font-size:12px">Já comprou? Use o link de acesso do e-mail do Kit 2.</p></div></div>`;
    }
    h+=`<div class="conteudo-bloq">`;
    kit.modulos.forEach((m,mi)=>{
      h+=`<div class="modulo"><h4>${mi+1}. ${m.nome}</h4><div class="desc">${m.desc}</div><div class="trilha">`;
      NOS.forEach((n,ni)=>{
        const st=estadoNo(kit.id,mi,ni);const est=S.estrelas[st.key]||0;
        const bloq=!liberado||!st.liberado;
        h+=`<div class="no-wrap"><button class="no ${n.boss?"boss":""} ${bloq?"bloq":""} ${st.atual&&liberado?"atual":""}"
          ${bloq?"":`onclick="iniciar('${kit.id}',${mi},${ni})"`}>${bloq?"🔒":(st.feito?"✓":n.ic)}</button>
          <div class="no-estrelas">${st.feito?"⭐".repeat(est)+"☆".repeat(3-est):""}</div><div class="no-nome">${n.nome}</div></div>`;
      });
      h+=`</div></div>`;
    });
    h+=`</div></div>`;
  });
  $("#abaTrilha").innerHTML=h;
}

function renderPdfs(){
  const total=KITS.filter(k=>tem(k.id)).reduce((a,k)=>a+(CONFIG.materiais[k.id]||[]).reduce((b,g)=>b+g.itens.length,0),0);
  const feitos=Object.keys(S.pdf).filter(k=>S.pdf[k]&&tem(k.split(".")[0])).length;
  let h=`<div class="saudacao" style="background:linear-gradient(135deg,#38bdf8,#0284c7);box-shadow:0 6px 0 #0369a1"><div class="mascote">📚</div><div><h2>Os seus materiais</h2><p>Abra o PDF, imprima e faça com a criança. Marque ✓ quando terminar para ganhar estrelas!</p>
    <div class="nivel-barra" style="background:rgba(255,255,255,.3);margin-top:8px"><i style="width:${total?feitos/total*100:0}%"></i></div><p style="font-size:12px;margin-top:4px">${feitos} de ${total} cadernos concluídos</p></div></div>`;
  KITS.forEach(kit=>{
    const lib=tem(kit.id);const grupos=CONFIG.materiais[kit.id]||[];
    h+=`<div class="pdf-card ${kit.id}"><h3>${kit.icone} ${kit.nome}</h3>`;
    if(!lib){
      h+=`<p style="color:var(--suave);font-weight:600;font-size:14px;margin:6px 0 12px">🔒 Sílabas difíceis (CH, LH, NH, RR, SS…) e primeiros textos. Não faz parte do seu acesso.</p>
      <a class="btn rosa" href="${CONFIG.linkUpsell}" target="_blank" rel="noopener">Desbloquear Kit 2 · ${CONFIG.precoUpsell}</a></div>`;return;
    }
    if(!grupos.length)h+=`<p style="color:var(--suave);font-weight:600;font-size:14px;margin-top:8px">⏳ Os materiais deste kit estão a ser preparados e aparecem aqui em breve.</p>`;
    grupos.forEach((g,gi)=>{
      h+=`<div class="grupo">${g.grupo}</div>`;
      g.itens.forEach((it,ii)=>{
        const k=`${kit.id}.${gi}.${ii}`;const f=!!S.pdf[k];
        h+=`<div class="mat ${f?"feito":""}">
          <button class="cx" onclick="marcaPdf('${k}')" title="Marcar como feito">${f?"✓":""}</button>
          <div class="mat-info"><b>${it.nome}</b><small>${[it.desc,it.pag?it.pag+" páginas":""].filter(Boolean).join(" · ")}${f?" · ⭐ feito":" · +30 XP"}</small></div>
          <div class="mat-acoes"><button class="btn mat-bt" onclick="abrirPdf('${kit.id}',${gi},${ii})">Abrir</button>
          <a class="btn branco mat-bt" href="${it.arq}" download title="Descarregar">⬇️</a></div></div>`;
      });
    });
    h+=`</div>`;
  });
  h+=`<div class="pdf-card" style="border-color:#bbf7d0;background:#f0fdf4;display:flex;gap:14px;align-items:center;cursor:pointer" onclick="irAba('trilha')">
    <div style="font-size:44px">🎁</div><div style="flex:1"><span class="chip" style="background:#dcfce7;border-color:#86efac;font-size:11px">PRESENTE EXTRA</span>
    <h3 style="margin-top:4px">Jogos de leitura no ecrã</h3><p style="font-size:14px;color:var(--suave);font-weight:600">A criança treina as mesmas sílabas a jogar no telemóvel, com voz, estrelas e medalhas.</p></div>
    <div style="font-size:26px">➜</div></div>`;
  if(CONFIG.suporteEmail)h+=`<p style="text-align:center;margin-top:10px;font-weight:700;color:var(--suave);font-size:14px">💬 Dúvidas? <a href="mailto:${CONFIG.suporteEmail}" style="color:var(--verde-esc)">${CONFIG.suporteEmail}</a></p>`;
  $("#abaPdfs").innerHTML=h;
}

function marcaPdf(k){
  S.pdf[k]=!S.pdf[k];
  if(S.pdf[k]){S.xp+=30;marcarDia();confetes(60);toast("+30 XP · Muito bem! ✏️")}else{S.xp=Math.max(0,S.xp-30)}
  const novas=verificaMedalhas();guardar();render();
  novas.forEach((m,i)=>setTimeout(()=>toast(`🏆 Nova medalha: ${m.nome}`),900*(i+1)));
}

function renderConquistas(){
  const lic=Object.values(S.estrelas).filter(x=>x>0).length;
  let h=`<div class="stats"><div class="stat"><b>${nivelDe(S.xp)}</b><small>Nível</small></div>
    <div class="stat"><b>${totalEstrelas()}</b><small>Estrelas</small></div><div class="stat"><b>${streakAtual()}🔥</b><small>Dias seguidos</small></div></div>
    <h3 style="margin:4px 0 10px">Medalhas (${S.medalhas.length}/${MEDALHAS.length})</h3><div class="medalhas">`;
  MEDALHAS.forEach(m=>{h+=`<div class="medalha ${S.medalhas.includes(m.id)?"":"nao"}"><div class="ic">${m.ic}</div><b>${m.nome}</b><small>${m.desc}</small></div>`});
  h+=`</div><p style="text-align:center;margin-top:18px;color:var(--suave);font-weight:700;font-size:14px">${lic} lições concluídas · ${S.xp} XP no total</p>
  <p style="text-align:center;margin-top:14px;color:var(--suave);font-weight:600;font-size:13px">📱 O progresso fica guardado só neste aparelho. Cada telemóvel ou computador tem o seu.</p>
  <p style="text-align:center;margin-top:8px"><button onclick="recomecar()" style="background:none;color:var(--suave);font-weight:700;text-decoration:underline;font-size:13px">Recomeçar do zero neste aparelho</button></p>
`;
  $("#abaConquistas").innerHTML=h;
}

function frase(){
  const fr=["Vamos ganhar mais estrelas hoje? ⭐","Cada sílaba é uma vitória! 🎉","Hoje és um campeão da leitura! 🏆","O Sapinho está à tua espera! 🐸"];
  return streakAtual()>1?`🔥 ${streakAtual()} dias seguidos! Não pares agora!`:fr[new Date().getDate()%fr.length];
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

document.querySelectorAll("nav.abas button").forEach(b=>b.onclick=()=>irAba(b.dataset.aba));
function irAba(a){
  document.querySelectorAll("nav.abas button").forEach(b=>b.classList.toggle("ativo",b.dataset.aba===a));
  $("#abaTrilha").classList.toggle("oculto",a!=="trilha");$("#abaPdfs").classList.toggle("oculto",a!=="pdfs");$("#abaConquistas").classList.toggle("oculto",a!=="conquistas");
  window.scrollTo(0,0);
}

/* =====================================================================
   VOZ (pt-PT)
   ===================================================================== */
let vozPT=null;
function pegaVoz(){const v=speechSynthesis.getVoices();vozPT=v.find(x=>x.lang==="pt-PT")||v.find(x=>/^pt/i.test(x.lang))||null}
if("speechSynthesis" in window){pegaVoz();speechSynthesis.onvoiceschanged=pegaVoz}
function fala(txt){
  if(!txt||!("speechSynthesis" in window))return;
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt.toLowerCase());
  u.lang="pt-PT";if(vozPT)u.voice=vozPT;u.rate=.8;u.pitch=1.1;speechSynthesis.speak(u);
}

/* =====================================================================
   SONS (bip simples, sem ficheiros)
   ===================================================================== */
let ac;
function bip(ok){
  try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();
  o.connect(g);g.connect(ac.destination);const t=ac.currentTime;
  if(ok){o.frequency.setValueAtTime(660,t);o.frequency.setValueAtTime(880,t+.09)}else{o.type="sawtooth";o.frequency.setValueAtTime(200,t)}
  g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.25);o.start(t);o.stop(t+.26)}catch(e){}
}

/* =====================================================================
   MOTOR DA LIÇÃO
   ===================================================================== */
let L=null;
function iniciar(kid,mi,ni){
  const kit=KITS.find(k=>k.id===kid),mod=kit.modulos[mi],no=NOS[ni];
  const qs=embaralha(mod.itens).slice(0,no.n);
  while(qs.length<no.n)qs.push(mod.itens[Math.random()*mod.itens.length|0]);
  L={kid,mi,ni,mod,no,qs,i:0,erros:0,combo:0,maxCombo:0,xp:0,estado:"resp",resposta:null,q:null};
  $("#licao").classList.remove("oculto");document.body.style.overflow="hidden";
  mostraQuestao();
}
$("#btFechar").onclick=()=>{if(confirm("Sair da lição? O progresso desta lição perde-se."))fechaLicao()};
function fechaLicao(){$("#licao").classList.add("oculto");document.body.style.overflow="";speechSynthesis&&speechSynthesis.cancel();L=null}

function todasSilabas(mod){
  if(mod.tipo==="som")return mod.itens;
  const s=new Set();mod.itens.forEach(i=>(i.s||[]).forEach(x=>s.add(x)));(mod.distratores||[]).forEach(x=>s.add(x));return [...s];
}
function opcoesCom(certa,pool,n=4){return embaralha([certa,...embaralha(pool.filter(x=>x!==certa)).slice(0,n-1)])}

function mostraQuestao(){
  const {mod,qs,i}=L;const it=qs[i];L.estado="resp";L.resposta=null;
  $("#lProg").style.width=(i/qs.length*100)+"%";
  $("#lCombo").textContent=L.combo>=2?`⚡x${L.combo}`:"";
  const rod=$("#lRodape");rod.className="licao-rodape";$("#lFeedback").innerHTML="";
  const bt=$("#btVerificar");bt.textContent="Verificar";bt.disabled=true;bt.className="btn";
  let h="";
  if(mod.tipo==="inicial"){
    const letra=it.l||it.w[0];L.q={certa:letra,falar:it.w};
    h=`<div class="pergunta">Com que vogal começa?</div><div class="figura"><div class="emoji-grande">${it.e}</div><button class="ouvir" onclick="fala('${it.w}')">🔊</button></div>
      <div class="opcoes">${opcoesCom(letra,["A","E","I","O","U"]).map(o=>`<button class="op" data-v="${o}">${o}</button>`).join("")}</div>`;
    setTimeout(()=>fala(it.w),300);
  }
  else if(mod.tipo==="som"){
    L.q={certa:it};
    h=`<div class="pergunta">Ouve e escolhe a sílaba certa</div><div class="figura"><button class="ouvir" style="width:110px;height:110px;font-size:52px;border-radius:30px" onclick="fala('${it}')">🔊</button></div>
      <div class="opcoes">${opcoesCom(it,mod.itens.filter(x=>x[0]===it[0]||Math.random()<.4)).map(o=>`<button class="op" data-v="${o}">${o}</button>`).join("")}</div>`;
    setTimeout(()=>fala(it),300);
  }
  else if(mod.tipo==="monta"){
    const pal=it.s.join("");const dist=embaralha(todasSilabas(mod).filter(x=>!it.s.includes(x))).slice(0,it.s.length>2?1:2);
    L.q={certa:pal,s:it.s,montado:[],pecas:embaralha([...it.s,...dist])};
    h=`<div class="pergunta">Monta a palavra</div><div class="figura"><div class="emoji-grande">${it.e}</div><button class="ouvir" onclick="fala('${it.d||pal}')">🔊</button></div>
      <div class="slots" id="slots"></div><div class="pecas" id="pecas"></div>`;
  }
  else if(mod.tipo==="falta"){
    const idx=it.s.length>2?(Math.random()*it.s.length|0):1;const certa=it.s[idx];
    L.q={certa,falar:it.s.join("")};
    h=`<div class="pergunta">Que sílaba falta?</div><div class="figura"><div class="emoji-grande">${it.e}</div><button class="ouvir" onclick="fala('${it.s.join("")}')">🔊</button></div>
      <div class="slots">${it.s.map((s,k)=>k===idx?`<div class="slot vazio-alvo" id="alvo">?</div>`:`<div class="slot fixo">${s}</div>`).join("")}</div>
      <div class="opcoes">${opcoesCom(certa,todasSilabas(mod)).map(o=>`<button class="op" data-v="${o}">${o}</button>`).join("")}</div>`;
  }
  else if(mod.tipo==="texto"){
    L.q={certa:String(it.a)};
    h=`<div class="pergunta">Lê a história 📖</div><div class="texto-leitura"><button class="ouvir" onclick="fala(L.qs[L.i].t)">🔊</button>${it.t}</div>
      <div class="pergunta" style="font-size:19px">${it.q}</div>
      <div class="opcoes uma">${it.o.map((o,k)=>`<button class="op texto" data-v="${k}">${o}</button>`).join("")}</div>`;
  }
  $("#lCorpo").innerHTML=h;
  if(mod.tipo==="monta")desenhaMonta();
  document.querySelectorAll("#lCorpo .op").forEach(b=>b.onclick=()=>{
    if(L.estado!=="resp")return;
    document.querySelectorAll("#lCorpo .op").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");L.resposta=b.dataset.v;
    if(mod.tipo==="falta"){$("#alvo").textContent=b.dataset.v}
    if(mod.tipo==="som"||mod.tipo==="inicial")fala(b.dataset.v==="E"?"é":b.dataset.v);
    $("#btVerificar").disabled=false;
  });
}

function desenhaMonta(){
  const q=L.q;
  $("#slots").innerHTML=q.s.map((_,k)=>{const p=q.montado[k];return `<div class="slot ${p!=null?"cheio":""}" data-k="${k}">${p!=null?q.pecas[p]:""}</div>`}).join("");
  $("#pecas").innerHTML=q.pecas.map((p,k)=>`<button class="peca ${q.montado.includes(k)?"usada":""}" data-k="${k}">${p}</button>`).join("");
  document.querySelectorAll("#pecas .peca").forEach(b=>b.onclick=()=>{
    if(L.estado!=="resp")return;const k=+b.dataset.k;if(q.montado.length>=q.s.length)return;
    q.montado.push(k);fala(q.pecas[k]);desenhaMonta();
  });
  document.querySelectorAll("#slots .slot.cheio").forEach(s=>s.onclick=()=>{
    if(L.estado!=="resp")return;q.montado.splice(+s.dataset.k,1);desenhaMonta();
  });
  L.resposta=q.montado.length===q.s.length?q.montado.map(k=>q.pecas[k]).join(""):null;
  $("#btVerificar").disabled=!L.resposta;
}

$("#btVerificar").onclick=()=>{
  if(!L)return;
  if(L.estado==="feedback"){L.i++;if(L.i>=L.qs.length)return terminaLicao();return mostraQuestao()}
  const ok=L.resposta===L.q.certa;L.estado="feedback";
  const rod=$("#lRodape"),bt=$("#btVerificar");
  if(ok){
    L.combo++;L.maxCombo=Math.max(L.maxCombo,L.combo);const ganho=10+(L.combo>=3?5:0);L.xp+=ganho;bip(true);
    rod.className="licao-rodape ok";$("#lFeedback").innerHTML=`${["Boa! 🎉","Excelente! ⭐","Isso mesmo! 💪","Fantástico! 🐸"][Math.random()*4|0]}<small>+${ganho} XP${L.combo>=3?" · combo ⚡":""}</small>`;
    document.querySelectorAll("#lCorpo .op.sel").forEach(x=>x.classList.add("certo"));
    {const f=L.q.falar;if(f)setTimeout(()=>fala(f),250);}
    if(L.combo>=3)confetes(25);
  }else{
    L.combo=0;L.erros++;bip(false);
    // repete a pergunta errada no fim (como no Duolingo), até 2 vezes
    if(L.qs.length<L.no.n+2)L.qs.push(L.qs[L.i]);
    rod.className="licao-rodape ko";
    const certaTxt=L.mod.tipo==="texto"?L.qs[L.i].o[+L.q.certa]:(L.mod.tipo==="monta"?L.q.s.join("-"):L.q.certa);
    $("#lFeedback").innerHTML=`Quase! 💛<small>A resposta certa é: <b>${certaTxt}</b></small>`;
    document.querySelectorAll("#lCorpo .op.sel").forEach(x=>x.classList.add("errado"));
    document.querySelectorAll(`#lCorpo .op[data-v="${L.q.certa}"]`).forEach(x=>x.classList.add("certo"));
  }
  $("#lCombo").textContent=L.combo>=2?`⚡x${L.combo}`:"";
  bt.textContent="Continuar";bt.className="btn "+(ok?"":"rosa");bt.disabled=false;
};

function terminaLicao(){
  const {kid,mod,no,erros,maxCombo}=L;
  const est=erros===0?3:erros<=2?2:1;
  const key=`${kid}.${mod.id}.${no.id}`;const antes=S.estrelas[key]||0;
  const bonus=(no.boss?30:15)+(est===3?15:0);
  S.estrelas[key]=Math.max(antes,est);S.xp+=L.xp+bonus;S.licoes++;
  const nvAntes=nivelDe(S.xp-L.xp-bonus);marcarDia();
  const novas=verificaMedalhas({perfeita:est===3,combo:maxCombo});guardar();
  const subiu=nivelDe(S.xp)>nvAntes;const ganhoTotal=L.xp+bonus;
  fechaLicao();render();
  $("#resCard").innerHTML=`<div class="mascote">${est===3?"🏆":"🐸"}</div>
    <div class="res-estrelas">${[0,1,2].map(k=>`<span>${k<est?"⭐":"☆"}</span>`).join("")}</div>
    <h2>${est===3?"Perfeito!":est===2?"Muito bem!":"Conseguiste!"}</h2>
    ${subiu?`<p style="font-weight:800;color:var(--laranja);margin-top:6px">⬆️ Subiste para o nível ${nivelDe(S.xp)}!</p>`:""}
    <div class="res-xp"><div>⚡ +${ganhoTotal} XP</div><div>🔥 ${streakAtual()} dia${streakAtual()===1?"":"s"}</div></div>
    ${novas.map(m=>`<div class="nova-medalha">${m.ic} Nova medalha: ${m.nome}</div>`).join("")}
    <button class="btn cheio" onclick="$('#resultado').classList.add('oculto')">Continuar ➜</button>`;
  $("#resultado").classList.remove("oculto");
  confetes(est===3?180:90);
}


/* =====================================================================
   LEITOR DE PDF (funciona dentro do WhatsApp/Instagram e no Android)
   ===================================================================== */
let leitorDoc=null,leitorObs=null;
function abrirPdf(kid,gi,ii){
  const it=CONFIG.materiais[kid][gi].itens[ii];
  $("#leitorTitulo").textContent=it.nome;
  $("#leitorBaixar").href=it.arq;
  const pg=$("#leitorPaginas");pg.innerHTML=`<div class="leitor-msg">A abrir o PDF…</div>`;
  $("#leitor").classList.remove("oculto");document.body.style.overflow="hidden";
  if(!window.pdfjsLib){pg.innerHTML=`<div class="leitor-msg">Não foi possível abrir aqui.<br><a class="btn" href="${it.arq}" download>⬇️ Descarregar PDF</a></div>`;return}
  pdfjsLib.GlobalWorkerOptions.workerSrc="/acesso/vendor/pdf.worker.min.js";
  pdfjsLib.getDocument(it.arq).promise.then(doc=>{
    leitorDoc=doc;pg.innerHTML="";
    if(leitorObs)leitorObs.disconnect();
    leitorObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)desenhaPagina(e.target)}),{root:pg,rootMargin:"600px 0px"});
    for(let n=1;n<=doc.numPages;n++){
      const d=document.createElement("div");d.className="leitor-pag";d.dataset.n=n;d.innerHTML=`<span>${n}</span>`;
      pg.appendChild(d);leitorObs.observe(d);
    }
  }).catch(()=>{pg.innerHTML=`<div class="leitor-msg">Não foi possível abrir aqui.<br><a class="btn" href="${it.arq}" download>⬇️ Descarregar PDF</a></div>`});
}
function desenhaPagina(el){
  if(el.dataset.ok||!leitorDoc)return;el.dataset.ok=1;const doc=leitorDoc;
  doc.getPage(+el.dataset.n).then(p=>{
    if(doc!==leitorDoc)return;
    const w=el.clientWidth||320,v1=p.getViewport({scale:1}),dpr=Math.min(window.devicePixelRatio||1,2);
    const vp=p.getViewport({scale:w/v1.width*dpr});
    const c=document.createElement("canvas");c.width=vp.width;c.height=vp.height;
    p.render({canvasContext:c.getContext("2d"),viewport:vp}).promise.then(()=>{el.innerHTML="";el.appendChild(c);el.style.height="auto"});
  });
}
function fecharPdf(){$("#leitor").classList.add("oculto");document.body.style.overflow="";if(leitorObs)leitorObs.disconnect();if(leitorDoc){leitorDoc.destroy();leitorDoc=null}$("#leitorPaginas").innerHTML=""}

function recomecar(){if(confirm("Apagar as estrelas, XP e medalhas deste aparelho e começar do zero?")){S=novoEstado();guardar();render();irAba("pdfs")}}

/* =====================================================================
   TOAST + CONFETES
   ===================================================================== */
let tt;
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),2200)}
const cv=$("#confetes"),cx=cv.getContext("2d");let parts=[],anim=null;
function confetes(n){
  cv.width=innerWidth;cv.height=innerHeight;const cores=["#22c55e","#ec4899","#facc15","#38bdf8","#a855f7","#fb923c"];
  for(let i=0;i<n;i++)parts.push({x:innerWidth/2+(Math.random()-.5)*200,y:innerHeight*.45,vx:(Math.random()-.5)*14,vy:-Math.random()*14-4,
    r:Math.random()*6+4,c:cores[i%cores.length],a:Math.random()*6,va:(Math.random()-.5)*.3,v:1});
  if(!anim)loop();
}
function loop(){
  cx.clearRect(0,0,cv.width,cv.height);
  parts.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.vx*=.99;p.a+=p.va;p.v-=.007;
    cx.save();cx.globalAlpha=Math.max(p.v,0);cx.translate(p.x,p.y);cx.rotate(p.a);cx.fillStyle=p.c;cx.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);cx.restore()});
  parts=parts.filter(p=>p.v>0&&p.y<cv.height+20);
  anim=parts.length?requestAnimationFrame(loop):(cx.clearRect(0,0,cv.width,cv.height),null);
}

/* arranque */
irAba("pdfs");render();
