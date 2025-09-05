const btn = document.createElement('button');
btn.id = 'backToTop';
btn.textContent = '▲';
btn.style.position = 'fixed';
btn.style.bottom = '20px';
btn.style.right = '20px';
btn.style.display = 'none';
btn.className = 'btn btn-warning';
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(btn);
});
btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) return;
  scrollTimeout = setTimeout(() => {
    btn.style.display = window.scrollY > 100 ? 'block' : 'none';
    scrollTimeout = null;
  }, 200);
});
