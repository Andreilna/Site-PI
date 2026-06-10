document.addEventListener("DOMContentLoaded", () => {
  // MENU
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  if (menuToggle && nav) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      const open = nav.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // BACK TO TOP
  const btnTopo = document.getElementById("btnTopo");
  window.addEventListener(
    "scroll",
    () => {
      if (!btnTopo) return;
      btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
    },
    { passive: true },
  );
  btnTopo?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // SCROLL REVEAL (subtle fade-in)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(
      ".project-card, .news-card, .about-card, .team-card, .why-card, .stat-item, .metric",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
      observer.observe(el);
    });
});