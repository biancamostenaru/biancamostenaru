document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');

  navToggle && navToggle.addEventListener('click', function () {
    if (navList.style.display === 'flex') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
    }
  });

  // Contact form -> mailto
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const subject = encodeURIComponent(document.getElementById('subject').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    if (!name || !email || !subject || !message) {
      alert('Completați toate câmpurile.');
      return;
    }

    const to = 'mostenarubianca25@stud.ase.ro';
    const body = `Nume: ${name}%0D%0AEmail expeditor: ${email}%0D%0A%0D%0A${message}`;
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;

    // Încearcă să deschizi mail clientul implicit
    window.location.href = mailto;
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});