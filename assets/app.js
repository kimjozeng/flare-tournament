
const menu=document.querySelector('[data-menu]');const nav=document.querySelector('[data-nav]');if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-card]').forEach(c=>c.hidden=f!=='all'&&c.dataset.status!==f)}));
