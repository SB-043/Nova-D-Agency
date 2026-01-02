// Smooth scroll ONLY for in-page hash links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

 
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
    content?.classList.remove('shifted');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});



// ===============================
// SIDEBAR TOGGLE FUNCTIONALITY
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');
  const backdrop = document.getElementById('backdrop');
  const content = document.querySelector('.content');

  if (!sidebar || !toggleBtn || !backdrop) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('active');
    backdrop.classList.toggle('active', isOpen);

    if (window.innerWidth >= 768 && content) {
      content.classList.toggle('shifted', isOpen);
    }

    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  backdrop.addEventListener('click', () => {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
    content?.classList.remove('shifted');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});


// Lucide icons init
lucide.createIcons();


// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// Simple reveal animation on scroll
const revealElements = document.querySelectorAll('.service-card, .showcase-card');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
