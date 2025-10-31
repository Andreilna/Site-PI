# Ceres – Site institucional

Site estático com foco em agricultura inteligente, fazendas verticais e sustentabilidade.

## Estrutura
- `index.html`: página inicial
- `news.html`: notícias e tendências
- `project.html`: detalhes do projeto Greenrise
- `team.html`: equipe Ceres
- `404.html`: página de erro
- `css/style.css`: estilos globais
- `js/java.js`: navegação e botão de voltar ao topo
- `img/`: imagens
- `robots.txt`, `sitemap.xml`: SEO técnico
- `manifest.webmanifest`: PWA básico
- `humans.txt`: créditos

## Desenvolvimento
- Fonte: Montserrat via Google Fonts (carregada no `<head>`)
- Execute em qualquer servidor estático (ex.: `npx serve` ou hospedagem estática)

## Boas práticas aplicadas
- Acessibilidade: skip link, `aria-current`, `aria-expanded`
- Performance: `defer` em scripts, `loading="lazy"` em imagens não críticas
- SEO: meta description, Open Graph, Twitter Card, canonical, sitemap
- Segurança: `rel="noopener noreferrer"` para links com `target="_blank"`

## Personalização
- Cores e espaçamentos em `:root` dentro de `css/style.css`
- Ícone do site em `img/favicon.ico`

## Hospedagem
- Ajuste a `canonical` e sitemap conforme o domínio final
