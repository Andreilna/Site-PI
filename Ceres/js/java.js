document.addEventListener('DOMContentLoaded', () => {
  // ===== MENU HAMBÚRGUER =====
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    // Garantir estado inicial do aria-expanded
    if (!menuToggle.hasAttribute('aria-expanded')) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    });

    // Fechar menu ao clicar em um link (mobile)
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ===== BOTÃO VOLTAR AO TOPO =====
  const btnTopo = document.getElementById('btnTopo');

  const toggleTopoButton = () => {
    if (!btnTopo) return;
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    btnTopo.style.display = scrollPos > 200 ? 'block' : 'none';
  };

  window.addEventListener('scroll', toggleTopoButton, { passive: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (btnTopo) {
    btnTopo.addEventListener('click', scrollToTop);
  }
});