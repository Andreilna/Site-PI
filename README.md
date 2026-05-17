<!-- =============================== -->
<!--        🌱 EQUIPE CERES          -->
<!-- =============================== -->

# 🌾 Equipe Ceres — Site Oficial  

[![Status](https://img.shields.io/badge/status-online-success?style=for-the-badge&logo=vercel)](https://equipe-ceres.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Author](https://img.shields.io/badge/By-Drey-ff69b4?style=for-the-badge&logo=github)](https://github.com/Dinozin)

---

## 🪴 Visão Geral

O **site oficial da Equipe Ceres** é uma plataforma digital criada para representar nossa equipe de desenvolvimento e inovação tecnológica voltada ao **agronegócio sustentável** e **sistemas inteligentes**.

Com um design limpo, informativo e interativo, o projeto reúne tudo sobre a Ceres — desde sua formação até os projetos autônomos de **fazendas verticais orientadas por redes neurais**.

🌐 **Acesse agora:** [https://equipe-ceres.vercel.app/](https://equipe-ceres.vercel.app/)

---

## 🌟 Missão da Ceres

> **“Cultivar o futuro através da tecnologia.”**  
> A Ceres é formada por jovens desenvolvedores e pesquisadores que unem **ciência, tecnologia e sustentabilidade** para criar soluções inovadoras voltadas ao campo e à automação agrícola.

---

## 🧭 Estrutura do Site

O projeto contém diversas seções interativas, pensadas para apresentar o trabalho da equipe de forma clara e moderna:

| Seção | Descrição | Arquivo |
|-------|------------|---------|
| 🏠 **Home** | Página inicial com apresentação da Equipe Ceres | `index.html` |
| 🧑‍🤝‍🧑 **Sobre** | História, propósito e integrantes da Equipe Ceres | `pages/about.html` |
| 📊 **Projetos** | Visão geral dos principais projetos desenvolvidos | `pages/project.html` |
| 🌾 **Greenrise** | Detalhes do projeto de fazenda vertical com IA | `pages/greenrise.html` |
| 🌙 **Selene** | Informações sobre o projeto Selene | `pages/selene.html` |
| 📰 **Notícias** | Atualizações, eventos e conquistas da equipe | `pages/news.html` |
| 👥 **Equipe** | Apresentação dos integrantes e suas funções | `pages/team.html` |
| 💬 **Contato** | Formulário de contato para parcerias e dúvidas | `pages/contact.html` |
| ❌ **Erro 404** | Página exibida quando conteúdo não é encontrado | `pages/404.html` |

---

## � Como Executar Localmente

### Pré-requisitos
- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Um servidor HTTP local (opcional, mas recomendado)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd Site-PI
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Ceres
   ```

3. **Inicie um servidor local** (escolha uma opção):
   
   - **Com Node.js (http-server):**
     ```bash
     npx http-server
     ```
   
   - **Com Python 3:**
     ```bash
     python -m http.server 8000
     ```
   
   - **Ou simplesmente abra** `index.html` diretamente no navegador

4. **Acesse no navegador:**
   - Local: `http://localhost:8000` (ou a porta indicada)
   - Arquivo: `file:///path/to/Ceres/index.html`

---

## �🛠️ Tecnologias Utilizadas

O site foi desenvolvido **sem frameworks**, utilizando **HTML, CSS e JavaScript puros**, priorizando leveza e performance:

| Tecnologia | Função |
|-------------|--------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Estilo, layout responsivo e animações |
| **JavaScript (Vanilla)** | Funcionalidades dinâmicas e interatividade |
| **Vercel** | Hospedagem e deploy contínuo |
| **Google Fonts (Montserrat)** | Tipografia moderna e legível |

---

## 🌐 SEO e Performance

O site implementa as melhores práticas de otimização:

- ✅ **Meta tags otimizadas** para buscadores (Open Graph, Twitter Card)
- ✅ **Sitemap.xml** para melhor indexação no Google
- ✅ **PWA (Progressive Web App)** com `manifest.webmanifest`
- ✅ **Lazy loading** de imagens não críticas
- ✅ **Scripts com defer** para não bloquear carregamento
- ✅ **Links seguros** com `rel="noopener noreferrer"`
- ✅ **Acessibilidade** com aria-labels e skip links

---

## ♿ Acessibilidade

O projeto segue as normas WCAG 2.1 Level AA:

- Navegação com teclado completa
- Skip links para conteúdo principal
- Atributos ARIA apropriados
- Contraste de cores adequado
- Textos alternativos em imagens importantes

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Desenvolvido pela Equipe Ceres**  
🔗 Acesse: [https://equipe-ceres.vercel.app/](https://equipe-ceres.vercel.app/)

---

## 💬 Suporte e Contato

Tem dúvidas ou sugestões? Entre em contato através do formulário no site ou abra uma **issue** neste repositório.

**Email:** [contato da equipe]  
**GitHub:** [Equipe Ceres]

---

<div align="center">

**🌾 Cultivando o futuro através da tecnologia! 🌾**

</div>

---

## 🧩 Estrutura de Pastas

```bash
📁 Site-PI/
├── 📁 Ceres/
│   ├── 📄 index.html              # Página principal
│   ├── 📄 manifest.webmanifest    # Configuração PWA
│   ├── 📄 sitemap.xml             # Mapa do site (SEO)
│   ├── 📄 README.md               # Documentação técnica
│   ├── 📁 css/
│   │   └── style.css              # Estilos globais
│   ├── 📁 js/
│   │   └── java.js                # Funcionalidades e animações
│   ├── 📁 img/                    # Imagens e ícones
│   └── 📁 pages/
│       ├── 404.html               # Página de erro
│       ├── about.html             # Sobre a equipe
│       ├── contact.html           # Contato
│       ├── greenrise.html         # Projeto Greenrise
│       ├── news.html              # Notícias
│       ├── project.html           # Projetos
│       ├── selene.html            # Projeto Selene
│       └── team.html              # Equipe
├── 📄 LICENSE
└── 📄 README.md
