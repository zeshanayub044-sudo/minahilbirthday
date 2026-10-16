// Personalize this gift here. Keep musicFile null unless you add a local audio file.
const birthdayConfig = {
  birthdayGirl: 'Minahil', boyfriend: 'Muneeb', fatherName: 'Zaib',
  birthdayDate: '2026-10-19', timeZone: 'Asia/Karachi',
  websiteTitle: 'A Magical Birthday for Minahil',
  romanticSignature: 'Forever Yours, Muneeb ❤️',
  enableMusic: true, musicFile: null, enableParticles: true, enableConfetti: true,
  prominentGreeting: 'Happy Birthday, My Beautiful {name}! ❤️',
  loveReply: 'Sending all my love right back to you, {name}! ❤️'
};
(() => {
'use strict';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const mobile = matchMedia('(max-width: 700px)');
const scenes = $$('.scene');
let chapter = 0, transitioning = false, card = 0, giftOpened = false, candlesOut = false;
let transitionTimer, toastTimer;
const effectTimers = new Set();
const later = (fn, delay) => { const id = setTimeout(() => { effectTimers.delete(id); fn(); }, reduced.matches ? 0 : delay); effectTimers.add(id); return id; };
const replace = text => text.replaceAll('{name}', birthdayConfig.birthdayGirl);
document.title = birthdayConfig.websiteTitle;
$$('[data-name]').forEach(e => e.textContent = birthdayConfig.birthdayGirl);
$$('[data-boyfriend]').forEach(e => e.textContent = birthdayConfig.boyfriend);
$$('[data-father]').forEach(e => e.textContent = birthdayConfig.fatherName);
$$('[data-signature]').forEach(e => e.textContent = birthdayConfig.romanticSignature);
const birthday = new Date(birthdayConfig.birthdayDate + 'T00:00:00+05:00');
const format = options => new Intl.DateTimeFormat('en-GB', {timeZone: birthdayConfig.timeZone, ...options}).format(birthday);
$$('[data-date]').forEach(e => e.textContent = format({day:'numeric', month:'long', year:'numeric'}));
$$('[data-birthday-day]').forEach(e => { const day = Number(format({day:'numeric'})); const suffix = day > 10 && day < 14 ? 'th' : ({1:'st',2:'nd',3:'rd'}[day % 10] || 'th'); e.textContent = `${day}${suffix} ${format({month:'long'})}`; });
function dateNote() {
 const parts = new Intl.DateTimeFormat('en-CA',{timeZone:birthdayConfig.timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
 const value = type => parts.find(p=>p.type===type).value;
 const today = `${value('year')}-${value('month')}-${value('day')}`;
 if(today < birthdayConfig.birthdayDate) {
 const days = Math.max(0, Math.ceil((Date.parse(birthdayConfig.birthdayDate+'T00:00:00Z')-Date.parse(today+'T00:00:00Z'))/86400000));
 $('#date-note').textContent = `${days} ${days===1?'day':'days'} until your special day · The magic is already yours`;
 } else $('#date-note').textContent = today === birthdayConfig.birthdayDate ? 'Today, all this magic is for you.' : 'A little birthday magic, yours to revisit.';
}
dateNote();
for(let i=0;i<7;i++){const dot=document.createElement('span');$('#progress').append(dot);}
function updateScene(focus=true){
 scenes.forEach((scene,i)=>{scene.classList.toggle('active',i===chapter);scene.inert=i!==chapter;scene.setAttribute('aria-hidden',String(i!==chapter));});
 document.body.dataset.chapter=chapter;
 $$('#progress span').forEach((dot,i)=>{dot.classList.toggle('current',i===chapter);dot.classList.toggle('visited',i<chapter);});
 $('#progress').setAttribute('aria-label',`Chapter ${chapter+1} of 7`);
 $('#back').hidden=chapter===0;
 if(focus) scenes[chapter].querySelector('h1,h2').focus({preventScroll:true});
}
function go(next){
 if(transitioning || next<0 || next>6)return;
 transitioning=true;
 if(chapter===0 || chapter===1)burst(innerWidth/2,innerHeight/2,'✧',22);
 chapter=next;updateScene();
 if(chapter===1 || chapter===6)$$('.garden .bloom').forEach(e=>{e.style.animation='none';requestAnimationFrame(()=>e.style.animation='');});
 clearTimeout(transitionTimer);transitionTimer=setTimeout(()=>transitioning=false,reduced.matches?0:700);
}
$$('[data-next]').forEach(b=>b.addEventListener('click',()=>go(chapter+1)));
$('#back').addEventListener('click',()=>go(chapter-1));
function burst(x,y,symbol='♡',count=18,confetti=false){
 if(reduced.matches || (!birthdayConfig.enableParticles&&!confetti) || (confetti&&!birthdayConfig.enableConfetti))return;
 const container=$('#bursts');const amount=innerWidth<700?Math.min(count,24):count;
 for(let i=0;i<amount;i++){
 const p=document.createElement('span');p.className='burst'+(confetti?' confetti':'');if(!confetti)p.textContent=symbol;
 p.style.left=x+'px';p.style.top=y+'px';p.style.setProperty('--x',`${(Math.random()-.5)*Math.min(innerWidth,800)}px`);p.style.setProperty('--y',`${confetti?80+Math.random()*innerHeight:(Math.random()-.7)*430}px`);p.style.setProperty('--r',`${Math.random()*600-300}deg`);
 if(confetti)p.style.background=[birthdayConfig.enableConfetti?'#e8c78d':'','#f4a7bc','#c9a7eb','#fff8f2'][i%4];
 container.append(p);p.addEventListener('animationend',()=>p.remove(),{once:true});
 }
}
function toast(text){clearTimeout(toastTimer);$('#toast').textContent=text;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),5000);}
$('#secret').addEventListener('click',e=>{toast(`Psst... ${birthdayConfig.boyfriend} loves you more than this little website could ever explain. ❤️`);const r=e.currentTarget.getBoundingClientRect();burst(r.x,r.y,'♡',10);});
function showCard(next){card=(next+3)%3;$$('.love-card').forEach((e,i)=>{e.classList.toggle('selected',card===i);e.hidden=mobile.matches && i!==card;e.setAttribute('aria-pressed',String(i===card));});$('#card-count').textContent=`0${card+1} / 03`;}
$('#card-prev').addEventListener('click',()=>showCard(card-1));$('#card-next').addEventListener('click',()=>showCard(card+1));
$$('.love-card').forEach((e,i)=>{
 e.addEventListener('click',()=>{showCard(i);const r=e.getBoundingClientRect();burst(r.x+r.width/2,r.y+60,'✧',9);});
 e.addEventListener('pointermove',event=>{if(mobile.matches||reduced.matches||event.pointerType!=='mouse')return;const r=e.getBoundingClientRect();e.style.transform=`perspective(800px) rotateX(${-(event.clientY-r.y-r.height/2)/40}deg) rotateY(${(event.clientX-r.x-r.width/2)/40}deg)`;});
 e.addEventListener('pointerleave',()=>e.style.transform='');
});
$('.cards').addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();showCard(card+(e.key==='ArrowRight'?1:-1));if(mobile.matches)$$('.love-card')[card].focus();}});
let startX=0,startY=0;
$('.cards').addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY;},{passive:true});
$('.cards').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))showCard(card+(dx<0?1:-1));},{passive:true});
mobile.addEventListener('change',()=>showCard(card));showCard(0);
$('#gift').addEventListener('click',()=>{
 if(giftOpened)return;giftOpened=true;$('#gift').disabled=true;$('#gift').classList.add('opening');
 later(()=>burst(innerWidth/2,innerHeight/2,'♡',20),800);
 later(()=>{$('#gift').hidden=true;$('#gift-hint').hidden=true;$('#letter').hidden=false;$('#gift-next').hidden=false;$('.letter-text').focus({preventScroll:true});},1700);
});
for(let i=0;i<5;i++){const c=document.createElement('span');c.className='candle';c.innerHTML='<span class="flame"></span><span class="smoke"></span>';$('.candles').append(c);}
$('#blow').addEventListener('click',()=>{
 if(candlesOut)return;candlesOut=true;$('#blow').disabled=true;
 $$('.flame').forEach(e=>e.style.animationDuration='.12s');
 $$('.candle').forEach((e,i)=>later(()=>e.classList.add('out'),250+i*150));
 later(()=>{$('#cake').classList.add('celebrated');$('#cake').setAttribute('aria-label','A birthday cake with all five candles extinguished');$('#cake-message').hidden=false;$('#blow').hidden=true;$('#cake-next').hidden=false;burst(innerWidth/2,innerHeight*.25,'',60,true);burst(innerWidth/2,innerHeight*.5,'♡',18);$('#cake-next').focus({preventScroll:true});},1300);
});
$('#send-love').addEventListener('click',()=>{burst(innerWidth/2,innerHeight*.6,'♡',35);toast(replace(birthdayConfig.loveReply));});
$('#replay').addEventListener('click',()=>{
 effectTimers.forEach(clearTimeout);effectTimers.clear();clearTimeout(transitionTimer);clearTimeout(toastTimer);
 giftOpened=false;candlesOut=false;transitioning=false;chapter=0;showCard(0);
 $('#gift').hidden=false;$('#gift').disabled=false;$('#gift').classList.remove('opening');$('#gift-hint').hidden=false;$('#letter').hidden=true;$('#gift-next').hidden=true;$('.letter-text').scrollTop=0;
 $$('.candle').forEach(e=>e.classList.remove('out'));$$('.flame').forEach(e=>e.style.animationDuration='');$('#cake').classList.remove('celebrated');$('#cake').setAttribute('aria-label','A rose decorated two tier birthday cake with five lit candles');$('#cake-message').hidden=true;$('#blow').hidden=false;$('#blow').disabled=false;$('#cake-next').hidden=true;
 $('#toast').classList.remove('show');$('#bursts').replaceChildren();updateScene();
});
// Original vector roses, reused as a floral frame without external assets.
$$('.garden').forEach(g=>{for(let i=0;i<3;i++){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 220');svg.innerHTML='<use href="#rose"/>';g.append(svg);}});
if(birthdayConfig.enableParticles){
 const n=innerWidth<700?20:38;
 for(let i=0;i<n;i++){const s=document.createElement('i');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=Math.random()*4+'s';$('#stars').append(s);}
 for(let i=0;i<(innerWidth<700?9:16);i++){const p=document.createElement('span');p.className='particle'+(i%3===0?' petal':'');if(i%3!==0)p.textContent=i%2?'·':'✧';p.style.left=Math.random()*100+'%';p.style.setProperty('--duration',20+Math.random()*18+'s');p.style.setProperty('--delay',-Math.random()*30+'s');$('#particles').append(p);}
}
// No audio is requested until a valid optional file has been explicitly configured.
let audio=null;
if(birthdayConfig.enableMusic&&birthdayConfig.musicFile){
 audio=new Audio(birthdayConfig.musicFile);audio.loop=true;audio.volume=.25;$('#music').disabled=false;$('#music').setAttribute('aria-label','Play background music');$('#music').title='Toggle background music';$('#music').setAttribute('aria-pressed','false');
 $('#music').addEventListener('click',async()=>{if(audio.paused){try{await audio.play();$('#music').setAttribute('aria-pressed','true');$('#music').setAttribute('aria-label','Pause background music');}catch{toast('The music could not play. Your birthday magic is still here.');}}else{audio.pause();$('#music').setAttribute('aria-pressed','false');$('#music').setAttribute('aria-label','Play background music');}});
 audio.addEventListener('error',()=>{audio.pause();$('#music').disabled=true;$('#music').title='Music unavailable';});
}
document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('paused',document.hidden);if(document.hidden&&audio){audio.pause();$('#music').setAttribute('aria-pressed','false');$('#music').setAttribute('aria-label','Play background music');}});
// The exact birthday greeting is present prominently within the garden chapter.
$('#title-1').replaceChildren();const greeting=replace(birthdayConfig.prominentGreeting);$('#title-1').textContent=greeting;
updateScene(false);
})();
