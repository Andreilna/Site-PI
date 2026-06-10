# Site-PI

Site estático da **Equipe Ceres** com foco em agricultura inteligente, sustentabilidade e inovação no campo.

## Visão Geral

Este repositório contém o projeto `Ceres`, um site institucional estático desenvolvido com **HTML5**, **CSS3** e **JavaScript**.

O site apresenta os principais projetos da equipe, como a fazenda vertical inteligente **Greenrise**, o sistema de monitoramento **Selene**, notícias e informações sobre o grupo.

## O que está neste repositório

- `Ceres/index.html` — página principal do site.
- `Ceres/css/style.css` — estilos visuais do site.
- `Ceres/js/script.js` — lógica de navegação e interações.
- `Ceres/manifest.webmanifest` — manifesto PWA.
- `Ceres/sitemap.xml` — mapa do site para SEO.
- `LICENSE` — licença do projeto.
- `README.md` — documentação do repositório.

## Como usar

### Abrir localmente

Basta abrir o arquivo `Ceres/index.html` em um navegador moderno.

### Rodar com servidor local (recomendado)

No Windows ou em outro sistema com Python 3:

```bash
cd Ceres
python -m http.server 8000
```

Depois acesse no navegador:

```text
http://localhost:8000
```

Ou com Node.js:

```bash
cd Ceres
npx http-server
```

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts (Montserrat)
- PWA básico via `manifest.webmanifest`

## Principais características

- Site estático sem backend
- Layout responsivo
- Navegação por âncoras
- Práticas básicas de SEO com meta tags e sitemap
- Melhorias de acessibilidade com `skip link` e atributos ARIA
- Estrutura simples para fácil manutenção

## Estrutura de pastas

```bash
Site-PI/
├── Ceres/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   ├── js/
│   │   └── script.js
│   ├── index.html
│   ├── manifest.webmanifest
│   └── sitemap.xml
├── LICENSE
└── README.md
```

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais detalhes.
