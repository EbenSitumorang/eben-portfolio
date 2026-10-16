const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
const photo=document.getElementById('profilePhoto'),placeholder=document.getElementById('photoPlaceholder');
photo.addEventListener('load',()=>{photo.hidden=false;placeholder.hidden=true;});
photo.addEventListener('error',()=>{photo.hidden=true;placeholder.hidden=false;});
if(photo.complete&&photo.naturalWidth>0){photo.hidden=false;placeholder.hidden=true;}
const sections=document.querySelectorAll('main section[id]'),links=document.querySelectorAll('.nav a');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
