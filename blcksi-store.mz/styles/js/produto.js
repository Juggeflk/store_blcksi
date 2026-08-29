(function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var produto = PRODUTOS.find(function (p) { return p.id === id; });

  var container = document.getElementById("produtoContainer");
  if (!container) { return; }

  if (!produto) {
    container.innerHTML = '<div class="catalog-empty">produto não encontrado. <a href="index.html">voltar ao início</a></div>';
    return;
  }

  var icon = CATEGORIA_ICON[produto.categoria] || "ti-photo";
  var categoriaLabel = CATEGORIA_LABEL[produto.categoria] || produto.categoria;
  document.title = produto.nome + " — BLCKSI";

  var imagens = (produto.imagens && produto.imagens.some(function (i) { return i; }))
    ? produto.imagens.filter(function (i) { return i; })
    : [];

  var mainImgHtml = imagens.length
    ? '<img id="galleryMainImg" src="' + imagens[0] + '" alt="' + produto.nome + '">'
    : iconSVG(icon, 'style="font-size:40px; color:var(--text-dim);" id="galleryMainImg"');

  var thumbsHtml = imagens.length
    ? imagens.map(function (src, i) {
        return '<button class="' + (i === 0 ? "active" : "") + '" data-img="' + src + '"><img src="' + src + '" alt="miniatura" loading="lazy"></button>';
      }).join("")
    : "";

  var sizeHtml = "";
  if (produto.tamanhos && produto.tamanhos.length) {
    sizeHtml =
      '<div class="option-group">' +
        '<div class="option-label">TAMANHO</div>' +
        '<div class="size-options" id="sizeOptions">' +
          produto.tamanhos.map(function (t, i) {
            return '<button class="' + (i === 0 ? "active" : "") + '" data-size="' + t + '">' + t + '</button>';
          }).join("") +
        '</div>' +
      '</div>';
  }

  container.innerHTML =
    '<div class="breadcrumb">' +
      '<a href="index.html">início</a> / <a href="' + produto.categoria + '.html">' + categoriaLabel.toLowerCase() + '</a> / ' + produto.nome +
    '</div>' +
    '<div class="product-layout">' +
      '<div>' +
        '<div class="gallery-main">' + mainImgHtml + '</div>' +
        (thumbsHtml ? '<div class="gallery-thumbs" id="galleryThumbs">' + thumbsHtml + '</div>' : '') +
      '</div>' +
      '<div>' +
        '<div class="product-category">' + categoriaLabel.toUpperCase() + '</div>' +
        '<h1 class="product-name">' + produto.nome + '</h1>' +
        '<div class="product-price">' + formatarPreco(produto.preco) + '</div>' +
        sizeHtml +
        '<button class="btn" id="buyBtn" style="width:100%;">comprar</button>' +
        '<p class="product-description">' + produto.descricao + '</p>' +
      '</div>' +
    '</div>';

  var relatedGrid = document.getElementById("relatedGrid");
  if (relatedGrid) {
    var mesmaCategoria = PRODUTOS.filter(function (p) {
      return p.categoria === produto.categoria && p.id !== produto.id;
    });

    // baralha (Fisher-Yates) para mostrar peças diferentes a cada visita
    for (var i = mesmaCategoria.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = mesmaCategoria[i];
      mesmaCategoria[i] = mesmaCategoria[j];
      mesmaCategoria[j] = tmp;
    }

    var relacionados = mesmaCategoria.slice(0, 3);

    if (relacionados.length === 0) {
      relatedGrid.parentElement.style.display = "none";
    } else {
      relatedGrid.innerHTML = relacionados.map(function (p) {
        var img = p.imagens && p.imagens[0]
          ? '<img src="' + p.imagens[0] + '" alt="' + p.nome + '" loading="lazy">'
          : iconSVG(icon, 'style="font-size:24px; color:var(--text-dim);"');
        return '<a class="related-card" href="produto.html?id=' + encodeURIComponent(p.id) + '">' + img + '</a>';
      }).join("");
    }
  }

  var buyBtn = document.getElementById("buyBtn");
  if (buyBtn) {
    buyBtn.addEventListener("click", function () {
      var tamanhoAtivo = document.querySelector("#sizeOptions button.active");
      var tamanho = tamanhoAtivo ? tamanhoAtivo.getAttribute("data-size") : "";
      var url = "pagamento.html?id=" + encodeURIComponent(produto.id);
      if (tamanho) { url += "&tamanho=" + encodeURIComponent(tamanho); }
      window.location.href = url;
    });
  }
})();
