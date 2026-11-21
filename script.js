// Mobile menu
const btn = document.querySelector('.menu-btn');
const list = document.querySelector('nav ul');
if (btn && list) {
  btn.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

// Contact form check
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const msg = document.getElementById('form-msg');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const text = form.message.value.trim();
    if (!name || !email || !text) {
      e.preventDefault();
      msg.textContent = 'Please fill in your name, email and message.';
      msg.style.color = '#C2255C';
    }
  });
}
