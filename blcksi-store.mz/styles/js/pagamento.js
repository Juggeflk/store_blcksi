(function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var tamanho = params.get("tamanho");
  var produto = PRODUTOS.find(function (p) { return p.id === id; });

  var summary = document.getElementById("orderSummary");
  if (!summary) { return; }

  if (!produto) {
    summary.innerHTML = '<div class="catalog-empty">nenhum produto selecionado. <a href="index.html">voltar ao início</a></div>';
    return;
  }

  window.PEDIDO_ATUAL = { produto: produto, tamanho: tamanho };

  var icon = CATEGORIA_ICON[produto.categoria] || "ti-photo";
  var img = produto.imagens && produto.imagens[0]
    ? '<img src="' + produto.imagens[0] + '" alt="' + produto.nome + '">'
    : iconSVG(icon, 'style="font-size:22px; color:var(--text-dim);"');

  summary.innerHTML =
    '<div class="thumb" style="display:flex; align-items:center; justify-content:center;">' + img + '</div>' +
    '<div class="info">' +
      '<h4>' + produto.nome + '</h4>' +
      '<p>' + (tamanho ? "Tamanho " + tamanho : "") + '</p>' +
    '</div>' +
    '<div class="price">' + formatarPreco(produto.preco) + '</div>';

  var instructionsValor = document.getElementById("instructionsValor");
  if (instructionsValor) {
    instructionsValor.textContent = formatarPreco(produto.preco);
  }
})();
