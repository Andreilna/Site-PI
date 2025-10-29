document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidade do Menu Hambúrguer
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            // Acessibilidade: Alterna o atributo aria-expanded
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 2. Funcionalidade do Botão Voltar ao Topo
    const btnTopo = document.getElementById("btnTopo");

    // Mostra/Esconde o botão com base na posição do scroll
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // Mostra o botão após 200px de scroll
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    }

    // Função para voltar ao topo (com scroll suave)
    window.topFunction = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});