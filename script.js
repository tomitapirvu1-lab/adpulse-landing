// year
document.getElementById('y')?.textContent = new Date().getFullYear();

// toggle detalii
document.querySelectorAll('[data-toggle]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const sel = btn.getAttribute('data-toggle');
    const box = document.querySelector(sel);
    const open = box.style.display === 'block';
    document.querySelectorAll('.reveal').forEach(x=>x.style.display='none');
    box.style.display = open ? 'none' : 'block';
  });
});

// back to top
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{ toTop.style.display = window.scrollY > 220 ? 'block' : 'none'; });
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// mailto
function openMail(e){
  e.preventDefault();
  const nume = document.getElementById('nume').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const body = encodeURIComponent(`Nume: ${nume}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:tomita.pirvu01@gmail.com?subject=AdPulse%20—%20Cerere%20oferta&body=${body}`;
}
window.openMail = openMail;
