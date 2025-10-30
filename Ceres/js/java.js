document.addEventListener('DOMContentLoaded', () => {
    // ===== MENU HAMBÚRGUER =====
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            // Alterna atributo aria-expanded para acessibilidade
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // ===== BOTÃO VOLTAR AO TOPO =====
    const btnTopo = document.getElementById('btnTopo');

    const toggleTopoButton = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        btnTopo.style.display = scrollPos > 200 ? 'block' : 'none';
    };

    window.addEventListener('scroll', toggleTopoButton);

    // Scroll suave para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (btnTopo) {
        btnTopo.addEventListener('click', scrollToTop);
    }

    // ===== EFEITOS ADICIONAIS (opcional) =====
    // Você pode adicionar animações ou classes CSS para hover do botão
    // Exemplo: btnTopo.classList.add('show') / remove('show')
});