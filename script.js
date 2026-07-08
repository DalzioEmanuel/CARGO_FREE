const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    navPanel.classList.toggle('open');
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.textContent = 'Request sent';
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.textContent = 'Request a Quote';
      submitButton.disabled = false;
      form.reset();
      alert('Thanks! Your request has been received. We will contact you shortly.');
    }, 900);
  });
}
