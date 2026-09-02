/* ============================================================
   ANUBISZ VASKAPUJA — ALKALMAZÁSLOGIKA
   Semmi nem küld adatot sehova. Minden a böngészőben marad.
   ============================================================ */
(function(){
'use strict';

/* ---------- segéd ---------- */
var $=function(s,root){return (root||document).querySelector(s)};
var $$=function(s,root){return [].slice.call((root||document).querySelectorAll(s))};
function hash(n){n=(n*2654435761)%4294967296;return Math.abs(Math.floor(n));}
function pick(arr,seed){return arr[(seed===undefined?Math.floor(Math.random()*arr.length):hash(seed)%arr.length)]}
function fmt(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
var toastEl=$('#toast'),tt;
function toast(m){toastEl.textContent=m;toastEl.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toastEl.classList.remove('on')},3400);}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

var HO=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'];
var NAP=['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'];
var now=new Date();
var dayKey=now.getFullYear()*10000+(now.getMonth()+1)*100+now.getDate();

/* ---------- csillagok + hullócsillag ---------- */
(function(){
  var c=$('#stars');if(!c)return;
  for(var i=0;i<80;i++){var s=document.createElement('i');var z=Math.random()*2+1;
    s.style.width=z+'px';s.style.height=z+'px';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';
    s.style.animationDelay=(-Math.random()*4)+'s';c.appendChild(s);}
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  function hull(){
    var e=document.createElement('span');e.className='shoot';
    var szog=25+Math.random()*25,tav=380+Math.random()*520,rad=szog*Math.PI/180;
    e.style.setProperty('--ang',szog+'deg');
    e.style.setProperty('--dx',Math.round(Math.cos(rad)*tav)+'px');
    e.style.setProperty('--dy',Math.round(Math.sin(rad)*tav)+'px');
    e.style.left=(Math.random()*80-5)+'%';e.style.top=(Math.random()*45-5)+'%';
    e.style.animationDuration=(1.5+Math.random()*1.2)+'s';
    c.appendChild(e);setTimeout(function(){e.remove()},3200);setTimeout(hull,3600+Math.random()*8000);
  }
  setTimeout(hull,1800);
})();

/* ---------- ticker ---------- */
(function(){
  var t=$('#tickerTrack');if(!t)return;
  var items=TICKER.slice();
  var lifted=fmt(1248913+hash(dayKey)%3000);
  items.unshift('Eddig '+lifted+' rontást vettünk le, ma '+(37+hash(dayKey+1)%140)+'-et');
  t.innerHTML=items.concat(items).map(function(x){return '<span>'+esc(x)+'</span>'}).join('');
})();

/* ---------- dátum + hold ---------- */
function moonPhase(d){var syn=29.530588853,ref=Date.UTC(2000,0,6,18,14);var days=(d.getTime()-ref)/86400000;var a=((days%syn)+syn)%syn;return a/syn;}
var mp=moonPhase(now),mi=Math.floor(mp*8+0.5)%8;
$('#utilDate').innerHTML=now.getFullYear()+'. '+HO[now.getMonth()]+' '+now.getDate()+'., '+NAP[now.getDay()];
$('#moonBig').textContent=MOONS[mi][0];$('#moonLab').textContent=MOONS[mi][1];
$('#moonSub').textContent=MOONS[mi][2]+' · '+Math.round(mp*100)+'%';
$('#utilMoon').textContent=MOONS[mi][1];

/* ---------- press ---------- */
$('#press').innerHTML='<span class="lbl">Ahogy láthattad</span>'+PRESS.map(function(p){return '<span>'+esc(p)+'</span>'}).join('');

/* ---------- számlálók ---------- */
function countUp(el,to,dur){
  var start=null,from=0;
  function step(ts){if(!start)start=ts;var p=Math.min(1,(ts-start)/dur);var e=1-Math.pow(1-p,3);
    el.textContent=fmt(Math.round(from+(to-from)*e));if(p<1)requestAnimationFrame(step);}
  requestAnimationFrame(step);
}
(function(){
  var done=false;
  var io=new IntersectionObserver(function(en){
    en.forEach(function(x){if(x.isIntersecting&&!done){done=true;
      $$('.stat .n[data-to]').forEach(function(el){countUp(el,parseInt(el.getAttribute('data-to'),10),1800)});}});
  },{threshold:.3});
  var s=$('#stats');if(s)io.observe(s);
  $('#statLifted').setAttribute('data-to',1248913+hash(dayKey)%3000);
})();

/* ---------- reveal ---------- */
(function(){
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
  $$('.rv').forEach(function(el){io.observe(el)});
})();

/* ---------- kártyák ---------- */
function imgPath(i){return KEPMAPPA+(i<10?'0':'')+i+KEPKITERJESZTES}
function backHTML(){return HATRAJZ}
function cardHTML(lap,rev){
  var i=LAPOK.indexOf(lap);
  var fb='<div class="fb"><div class="rn">'+lap.r+'</div><div class="sym">'+lap.s+'</div></div>';
  return '<div class="inner"><img src="'+imgPath(i)+'" alt="'+esc(lap.n)+'" loading="lazy" onerror="this.parentNode.innerHTML=this.getAttribute(\'data-fb\')" data-fb="'+esc(fb)+'"></div>'+
    '<div class="cap"><span class="cr">'+lap.r+'</span>'+esc(lap.n)+(rev?' <em>· fordítva</em>':'')+'</div>';
}
function drawCard(el,lap,rev){el.className='tcard'+(rev?' rev':'');el.innerHTML=cardHTML(lap,rev);}

/* ---------- napi lap ---------- */
(function(){
  var idx=hash(dayKey)%LAPOK.length,rev=hash(dayKey+7)%100<32,L=LAPOK[idx];
  drawCard($('#dayCard'),L,rev);
  drawCard($('#heroCard'),L,false);
  $('#dcDate').textContent='A nap lapja · '+now.getFullYear()+'. '+HO[now.getMonth()]+' '+now.getDate()+'.';
  $('#dcTitle').textContent=L.r+' — '+L.n+(rev?' (fordítva)':'');
  $('#dcText').textContent=rev?L.d:L.u;
  var ei=48+hash(dayKey+3)%50;
  $('#dcMeta').innerHTML=(rev?'Fordított állás':'Egyenes állás')+' · elem: '+L.el+' · holdfázis: '+MOONS[mi][1].toLowerCase()+' · erőindex <b class="gold">'+ei+'/100</b> · kozmikus 1RM-módosító <b class="gold">'+(rev?'−':'+')+(1.25*(1+hash(dayKey+5)%4)).toString().replace('.',',')+' kg</b>';
  $('#dcKw').innerHTML=L.k.map(function(k){return '<span class="kw">'+esc(k)+'</span>'}).join('');
  $('#dcRit').innerHTML='<b>A nap szertartása</b>'+esc(L.rit)+'<div class="mute small" style="margin-top:6px">Kísérő kristály: '+esc(L.cr)+'</div>';
})();

/* ---------- háromlapos vetés ---------- */
var picked=[],order=[];
function shuffle(){
  picked=[];order=[];
  for(var i=0;i<LAPOK.length;i++)order.push(i);
  for(var j=order.length-1;j>0;j--){var r=Math.floor(Math.random()*(j+1));var t=order[j];order[j]=order[r];order[r]=t;}
  var d=$('#deck');d.innerHTML='';
  order.forEach(function(ix){
    var m=document.createElement('div');m.className='mini';m.innerHTML='<span>&#9790;</span>';
    m.addEventListener('click',function(){
      if(picked.length>=3||m.classList.contains('used'))return;
      m.classList.add('used');
      var rev=Math.random()<0.32;
      picked.push({L:LAPOK[ix],rev:rev});
      var slot=$('.tcard[data-slot="'+(picked.length-1)+'"]');
      drawCard(slot,LAPOK[ix],rev);slot.setAttribute('data-slot',picked.length-1);
      if(picked.length===3)interpret();
    });
    d.appendChild(m);
  });
  $$('.tcard[data-slot]').forEach(function(s,i){s.className='tcard back';s.innerHTML='<div class="inner">'+backHTML()+'</div><div class="cap">&nbsp;</div>';s.setAttribute('data-slot',i)});
  $('#reading').classList.remove('on');
}
function interpret(){
  var P=['Ami húz vissza','Ahol most állsz','Ami a rúdon vár'];
  var html='<h3>A vetés olvasata</h3>';
  picked.forEach(function(c,i){
    html+='<p><b class="gold">'+P[i]+' — '+c.L.r+' '+esc(c.L.n)+(c.rev?' (fordítva)':'')+':</b> '+esc(c.rev?c.L.d:c.L.u)+'</p>';
  });
  var names=picked.map(function(c){return c.L.n});
  var revs=picked.filter(function(c){return c.rev}).length;
  var v='';
  for(var i=0;i<EGYUTT.length;i++){if(names.indexOf(EGYUTT[i].a)>-1&&names.indexOf(EGYUTT[i].b)>-1){v=EGYUTT[i].v;break;}}
  if(!v){
    if(revs===3)v='Mindhárom lap fordítva jött ki. Ez a szentélyben nem katasztrófát jelent, hanem azt, hogy a hét akadálya belül van, nem a rúdon. Kezdd az alvással, folytasd a reggelivel, és a rúd majd utolér.';
    else if(revs===0)v='Egyetlen fordított lap sincs. Ritka, tiszta vetés: a héten az akadályok külsők — időbeosztás, foglalt gép, forgalom, fantom. Ezeket meg lehet kerülni; a belsőket nem kellett volna.';
    else v=VEGSZO[hash(names.join('').length*17+revs*31+picked[0].L.r.length)%VEGSZO.length];
  }
  var elems=picked.map(function(c){return c.L.el});
  var dom=elems.sort(function(a,b){return elems.filter(function(v){return v===a}).length-elems.filter(function(v){return v===b}).length}).pop();
  html+='<div class="verdict"><b>Az együttállás:</b> '+esc(v)+'</div>';
  html+='<div class="conf">Bizonyosság: '+(91+Math.floor(Math.random()*9))+','+Math.floor(Math.random()*10)+'%</div> <div class="conf">Uralkodó elem: '+esc(dom)+'</div> <div class="conf">Ajánlott ellenszer: '+esc(picked[1].L.cr)+'</div>';
  $('#reading').innerHTML=html;$('#reading').classList.add('on');
}
$('#reshuffle').addEventListener('click',function(){shuffle();toast('A pakli megkeverve. A rontás is.')});
$('#autoBtn').addEventListener('click',function(){
  shuffle();var ms=$$('.mini');
  [0,1,2].forEach(function(i){setTimeout(function(){if(ms[i])ms[i].dispatchEvent(new MouseEvent('click',{bubbles:true}))},i*480)});
});
shuffle();

/* ---------- orákulum ---------- */
function oracleLine(){
  var o=ORAKULUM;
  return pick(o.al)+' '+pick(o.ige)+' '+pick(o.tgy)+'. '+pick(o.zar);
}
function oracleAnswer(){
  var q=$('#oq').value.trim();
  var line=oracleLine();
  var out=$('#oout');
  out.innerHTML='<div class="q" style="opacity:0">'+(q?'<span class="mute small" style="display:block;font-style:normal;font-family:var(--cond);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">A kérdésedre („'+esc(q.slice(0,80))+(q.length>80?'…':'')+'”) az Orákulum így felel:</span>':'')+'„'+esc(line)+'”</div>'+
    '<div class="src">Bizonyosság: <b>'+(93+Math.floor(Math.random()*7))+','+Math.floor(Math.random()*10)+'%</b> · Forrás: <b>'+esc(pick(FORRAS))+'</b> · Kísérő lap: <b>'+esc((function(L){return L.r+' '+L.n})(pick(LAPOK)))+'</b></div>';
  var qel=$('.q',out);requestAnimationFrame(function(){qel.style.transition='opacity .9s';qel.style.opacity=1});
}
$('#oBtn').addEventListener('click',oracleAnswer);
$('#oq').addEventListener('keydown',function(e){if(e.key==='Enter')oracleAnswer()});
$('#oAgain').addEventListener('click',function(){$('#oq').value='';oracleAnswer()});
$('#oout').innerHTML='<div class="q">„'+esc(oracleLine())+'”</div><div class="src">A mai első kinyilatkoztatás · Forrás: <b>'+esc(pick(FORRAS,dayKey))+'</b></div>';

/* ---------- horoszkóp ---------- */
(function(){
  var zg=$('#zgrid');var wk=Math.floor(now.getTime()/604800000);
  ZOD.forEach(function(z,i){
    var d=document.createElement('div');d.className='z';
    d.innerHTML='<span class="sym">'+z.s+'</span><span class="nm">'+z.n+'</span><span class="dt">'+z.d+'</span>';
    d.addEventListener('click',function(){
      $$('.z').forEach(function(e){e.classList.remove('active')});d.classList.add('active');
      var pw=55+hash(wk*13+i*7)%44;var L=LAPOK[hash(wk*29+i*11)%LAPOK.length];
      var out=$('#zout');
      out.innerHTML='<h3>'+z.s+' '+z.n+'</h3><div class="sub">Heti erőelőrejelzés · elem: '+z.el+' · uralkodó bolygó: '+z.bo+' · '+now.getFullYear()+'. '+HO[now.getMonth()]+'</div>'+
        '<div class="zline"><span>Üzenet</span><span>'+esc(z.t)+'</span></div>'+
        '<div class="zline"><span>Uralkodó izom</span><span>'+esc(z.iz)+'</span></div>'+
        '<div class="zline"><span>Kedvező</span><span>'+esc(z.g)+'</span></div>'+
        '<div class="zline"><span>Tiltott gép</span><span>'+esc(z.b)+'</span></div>'+
        '<div class="zline"><span>Szerencsehozó</span><span>'+esc(z.l)+'</span></div>'+
        '<div class="zline"><span>Szerencse-tárcsa</span><span>'+z.ta+' kg — ezt tedd fel utoljára, akkor is, ha nem fér</span></div>'+
        '<div class="zline"><span>Kozmikus 1RM-módosító</span><span class="gold">'+esc(z.m)+'</span></div>'+
        '<div class="zline"><span>Kísérő lap</span><span>'+L.r+' '+esc(L.n)+' — '+L.k.join(', ')+'</span></div>'+
        '<div class="zline"><span>Rontásvédelem</span><span>'+pw+'% — a maradékot bemelegítéssel kell pótolni<div class="bar"><i style="width:0"></i></div></span></div>';
      out.classList.add('on');
      requestAnimationFrame(function(){requestAnimationFrame(function(){$('.bar i',out).style.width=pw+'%'})});
      if(window.innerWidth<700)out.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
    zg.appendChild(d);
  });
  /* aszcendens */
  $('#ascBtn').addEventListener('click',function(){
    var n=$('#ascName').value.trim()||'Névtelen kereső';
    var dv=$('#ascDate').value;var sq=$('#ascLift').selectedIndex;
    var seed=0;for(var i=0;i<n.length;i++)seed+=n.charCodeAt(i)*(i+3);
    if(dv){var p=dv.split('-');seed+=parseInt(p[1],10)*31+parseInt(p[2],10);}
    seed+=sq*97;
    var Z=ZOD[hash(seed)%12],L=LAPOK[hash(seed+11)%LAPOK.length],el=['Tűz','Föld','Levegő','Víz'][hash(seed+13)%4];
    var mod=[-2.5,-1.25,0,1.25,2.5,5][hash(seed+17)%6];
    $('#ascOut').innerHTML='<b class="gold">'+esc(n)+'</b> vasaszcendense: <b class="gold">'+Z.s+' '+Z.n+'</b> · erőházának ura: <b class="gold">'+L.r+' '+esc(L.n)+'</b> · uralkodó elem: '+el+'.<br>'+
      'Ez azt jelenti, hogy a Nap-jegyed edzene, de az aszcendensed <i>'+esc(Z.b.toLowerCase())+'</i> ürüggyel nem hagyja. Kozmikus 1RM-módosítód: <b class="gold">'+(mod>=0?'+':'−')+String(Math.abs(mod)).replace('.',',')+' kg</b>. Kísérő kristály: '+esc(L.cr)+'.';
  });
})();

/* ---------- rontásvizsgálat ---------- */
(function(){
  var scanning=false;
  $('#scanBtn').addEventListener('click',function(){
    if(scanning)return;scanning=true;
    var f=$('#scanFill'),t=$('#scanText'),r=$('#result');
    r.classList.remove('on');f.style.width='0%';
    var p=0,i=-1;t.textContent=SCANMSG[0];
    var iv=setInterval(function(){
      p=Math.min(100,p+Math.random()*9+4);f.style.width=p+'%';
      var ni=Math.min(SCANMSG.length-1,Math.floor(p/13));if(ni!==i){i=ni;t.textContent=SCANMSG[i];}
      if(p>=100){clearInterval(iv);scanning=false;
        var c=CURSES[Math.floor(Math.random()*CURSES.length)];
        t.textContent='Vizsgálat lezárva · találat: 1 aktív rontás · rontásindex '+c.ix+'/100';
        $('#sev').textContent=c.s;$('#curseName').textContent=c.n;$('#curseDesc').textContent=c.d;
        $('#curseCure').innerHTML='<b>Ellenszer:</b> '+esc(c.c);
        r.classList.add('on');}
    },170);
  });
  /* csakra-audit */
  $('#chBtn').addEventListener('click',function(){
    var wrap=$('#chakras');wrap.innerHTML='';
    var blocked=Math.floor(Math.random()*6); /* a korona sosem blokkolt */
    CHAKRA.forEach(function(c,i){
      var pct=i===6?100+Math.floor(Math.random()*60):(i===blocked?8+Math.floor(Math.random()*20):55+Math.floor(Math.random()*44));
      var d=document.createElement('div');d.className='ch'+(i===blocked?' blocked':'');d.style.setProperty('--c',c.c);
      d.innerHTML='<div class="dot"><span>'+c.ic+'</span></div><div class="n">'+c.n+'</div><div class="m">'+c.m+'</div><div class="pct">'+pct+'%</div>';
      wrap.appendChild(d);
    });
    var b=CHAKRA[blocked];
    $('#chOut').innerHTML='<b class="gold">Blokkolt csakra: '+b.n+' ('+b.m+').</b> '+esc(b.t)+'<div class="ritual" style="margin-top:12px"><b>Feloldás</b>'+esc(b.cure)+'</div><p class="mute small" style="margin:10px 0 0">A korona-csakra (bicepsz) '+(100+Math.floor(Math.random()*60))+'%-on áll. Ez nem hiba, hanem diagnózis.</p>';
  });
})();

/* ---------- vastörvények ---------- */
$('#tenets').innerHTML=TENETS.map(function(t,i){
  return '<div class="tenet rv"><div class="num">'+['I','II','III','IV','V','VI','VII','VIII','IX'][i]+'</div><div class="ic">'+t.ic+'</div><h3>'+esc(t.n)+'</h3><p>'+esc(t.t)+'</p><div class="law">„'+esc(t.law)+'”</div></div>';
}).join('');

/* ---------- aura ---------- */
(function(){
  var led=$('#ledger');
  led.innerHTML=AURA.map(function(a,i){
    return '<label class="li"><input type="checkbox" data-v="'+a.v+'"><span class="t">'+esc(a.t)+'</span><span class="v '+(a.v>0?'plus':'minus')+'">'+(a.v>0?'+':'−')+fmt(Math.abs(a.v))+'</span></label>';
  }).join('');
  function calc(){
    var sum=0;$$('input',led).forEach(function(c){if(c.checked)sum+=parseInt(c.getAttribute('data-v'),10)});
    var big=$('#auraBig'),orb=$('#auraOrb');
    big.textContent=(sum<0?'−':'')+fmt(Math.abs(sum));big.classList.toggle('neg',sum<0);orb.classList.toggle('neg',sum<0);
    var r=RANK[0];for(var i=0;i<RANK.length;i++){if(sum>=RANK[i].min)r=RANK[i]}
    $('#auraRank').textContent=r.n;$('#auraDesc').textContent=r.d;
    orb.style.opacity=Math.min(1,.35+Math.abs(sum)/8000);
  }
  led.addEventListener('change',calc);calc();
})();

/* ---------- akadémia ---------- */
$('#courses').innerHTML=COURSES.map(function(c){
  return '<div class="course rv"><span class="badge">'+esc(c.b)+'</span><div class="ic">'+c.ic+'</div><h3>'+esc(c.n)+'</h3><p>'+esc(c.t)+'</p>'+
    '<div class="spec"><span>Időtartam: <b>'+esc(c.h)+'</b></span><span>Tandíj: <b>'+esc(c.dij)+'</b></span></div>'+
    '<button class="btn ghost sm" data-fake="Jelentkezésedet a Kapuőr feljegyezte. Nincs jelentkezés, nincs kurzus — az oldal szatíra.">Jelentkezem</button></div>';
}).join('');

/* ---------- bolt ---------- */
function stars(n){return '★★★★★'.slice(0,n)+'☆☆☆☆☆'.slice(0,5-n)}
$('#shop').innerHTML=PROD.map(function(p){
  return '<div class="prod rv"><div class="pimg">'+p.s+(p.rb?'<span class="ribbon '+p.rbc+'">'+esc(p.rb)+'</span>':'')+'</div><div class="pbody"><h4>'+esc(p.n)+'</h4>'+
   '<div class="stars5">'+stars(p.r)+'<em>('+p.rc+')</em></div><p class="d">'+esc(p.d)+'</p>'+
   '<div class="price">'+(p.o?'<s>'+p.o+'</s>':'')+p.p+'</div><div class="stock'+(p.low?' low':'')+'">'+esc(p.st)+'</div>'+
   '<button class="btn sm" data-fake="Nincs kosár, nincs rendelés, nem árulunk semmit. A rezgés viszont ingyen a tiéd.">Kosárba</button></div></div>';
}).join('');

/* ---------- tudomány ---------- */
$('#studies').innerHTML=STUDIES.map(function(s){return '<div class="study rv"><h4>'+esc(s.h)+'</h4><div class="cite">'+esc(s.c)+'</div><p>'+esc(s.t)+'</p></div>'}).join('');
$('#chartRows').innerHTML=CHART.map(function(c){return '<div class="crow"><span>'+esc(c.l)+(c.note?' <span class="mute small">('+esc(c.note)+')</span>':'')+'</span><div class="b"><i data-w="'+c.v+'"></i></div><span class="v">'+c.v+'%</span></div>'}).join('');
(function(){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){$$('.crow .b i').forEach(function(i){i.style.width=i.getAttribute('data-w')+'%'});io.disconnect()}})},{threshold:.4});io.observe($('#chart'))})();
$('#team').innerHTML=TEAM.map(function(t){return '<div class="person"><div class="av">'+t.ic+'</div><div><b>'+esc(t.n)+'</b><span>'+esc(t.t)+'</span></div></div>'}).join('');

/* ---------- vélemények ---------- */
$('#reviews').innerHTML=REV.map(function(r){
  return '<div class="rev rv"><div class="top"><span class="who">'+esc(r.w)+'</span><span class="stars5">'+stars(r.r)+'</span><span class="ok">Igazolt rezgés</span><span class="when">'+r.t+'</span></div><p>'+esc(r.x)+'</p></div>';
}).join('');

/* ---------- naptár ---------- */
(function(){
  var DOW=['H','K','Sze','Cs','P','Szo','V'];var cy=now.getFullYear(),cm=now.getMonth(),sel=null;
  function verdict(y,m,d){
    var ph=moonPhase(new Date(y,m,d,12));
    if(Math.abs(ph-0.5)<0.05)return VER[12]; /* PR-ablak telihold körül */
    return VER[hash(y*10000+(m+1)*100+d)%12];
  }
  function build(){
    var c=$('#cal');c.innerHTML='';$('#mlabel').textContent=cy+'. '+HO[cm];
    DOW.forEach(function(d){var e=document.createElement('div');e.className='dow';e.textContent=d;c.appendChild(e)});
    var f=(new Date(cy,cm,1).getDay()+6)%7,dm=new Date(cy,cm+1,0).getDate();
    for(var i=0;i<f;i++){var x=document.createElement('div');x.className='day empty';c.appendChild(x)}
    for(var d=1;d<=dm;d++)(function(d){
      var v=verdict(cy,cm,d);var e=document.createElement('div');
      e.className='day '+v.t+((cy===now.getFullYear()&&cm===now.getMonth()&&d===now.getDate())?' today':'')+(sel===cy+'-'+cm+'-'+d?' sel':'');
      e.innerHTML=d+'<span class="dot">'+v.e+'</span>';
      e.addEventListener('click',function(){sel=cy+'-'+cm+'-'+d;$$('.day').forEach(function(y){y.classList.remove('sel')});e.classList.add('sel');
        $('#calout').innerHTML='<b>'+cy+'. '+HO[cm]+' '+d+'.</b> '+v.e+' — '+esc(v.x);});
      c.appendChild(e);
    })(d);
  }
  $('#prev').addEventListener('click',function(){cm--;if(cm<0){cm=11;cy--}build()});
  $('#next').addEventListener('click',function(){cm++;if(cm>11){cm=0;cy++}build()});
  build();
})();

/* ---------- glosszárium, gyik, legolvasottabb ---------- */
$('#gloss').innerHTML=GLOSS.map(function(g){return '<div class="gl rv"><b>'+esc(g.n)+'</b><span>'+esc(g.t)+'</span></div>'}).join('');
$('#faq').innerHTML=FAQ.map(function(f){return '<details><summary>'+esc(f.q)+'</summary><p>'+esc(f.a)+'</p></details>'}).join('');
$('#topread').innerHTML=TOPREAD.map(function(t){return '<li><a href="'+t.h+'">'+esc(t.t)+'</a><span class="dat">'+esc(t.m)+'</span></li>'}).join('');

/* ---------- interakciók ---------- */
document.addEventListener('click',function(e){
  var f=e.target.closest('[data-fake]');
  if(f){e.preventDefault();toast(f.getAttribute('data-fake')||'Ez a menüpont nem létezik. Az oldal szatíra.');return;}
});
$('#nlBtn').addEventListener('click',function(){
  var v=$('#nlMail').value.trim();
  toast(v?'Nincs hírlevél, nincs adatbázis — a beírt cím sehova nem került el. A beavatás mégis megtörtént.':'A beavatáshoz nem kell semmi. Ez a lényege.');
  $('#nlMail').value='';
});
$('#ckOk').addEventListener('click',function(){$('#cookie').style.display='none'});
$('#burger').addEventListener('click',function(){$('#nav').classList.toggle('open')});
$$('nav.main a').forEach(function(a){a.addEventListener('click',function(){$('#nav').classList.remove('open')})});
['dragenter','dragover','dragleave','drop'].forEach(function(e){document.addEventListener(e,function(v){v.preventDefault()},false)});
})();
