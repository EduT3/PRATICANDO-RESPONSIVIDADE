# Praticando Responsividade · AluraBooks

Exercício de catálogo de livros com HTML, CSS e JavaScript, baseado no projeto educacional AluraBooks.

## O que o projeto faz

- Layout mobile-first, com breakpoints existentes em 1024 e 1728 pixels.
- Menus de categorias operáveis pelo teclado e fechamento com Escape.
- Carrosséis independentes, com paginação, setas e mensagens de acessibilidade.
- Rolagem horizontal de livros como alternativa quando o Swiper não carrega.
- Idioma da página, nomes acessíveis dos campos e descrições das imagens.
- Ajustes de contraste, foco e contenção dos cards em telas pequenas.

## Executar

Abra `index.html` em um navegador moderno. Não há instalação de dependências, build ou servidor obrigatório. Para desenvolvimento, também é possível servir a pasta com qualquer servidor estático, por exemplo `python -m http.server 8000` e acessar `http://localhost:8000`.

## Estrutura

- `index.html`: estrutura e catálogo.
- `styles.css`, `styles/` e `reset.css`: estilos.
- `img/`: ilustrações do exercício.
- `script.js`: comportamento da página.

## Limites e cuidados

- Busca, favoritos, sacola, perfil e cadastro de e-mail são demonstrativos; não enviam dados nem realizam compras.
- Links com `#` são placeholders do exercício.
- Swiper 8 via CDN e Google Fonts precisam de internet; a página oferece alternativa de rolagem sem o Swiper.
- Imagens e marcas são mantidas como parte do material de estudo, sem afiliação comercial.

## Roteiro de verificação manual

1. Confira 320, 768, 1024 e 1728 pixels de largura.
2. Abra Categorias com Tab + Espaço e feche com Escape.
3. Teste paginação e setas em cada carrossel; o outro não deve mudar.
4. Bloqueie o CDN e confira que os livros continuam acessíveis por rolagem.
5. Verifique a página com zoom de 200% e navegação por teclado.

Não há suíte de testes de navegador configurada no repositório. O roteiro acima deve ser executado antes de publicar alterações. Nenhum deploy é feito por estes arquivos.
