(function () {
  var categoria = document.body.getAttribute("data-categoria");
  var grid = document.getElementById("catalogGrid");
  if (!grid || !categoria) { return; }

  var lista = PRODUTOS.filter(function (p) { return p.categoria === categoria; });

  // ordem aleatoria, mas fixa durante a sessao (guardada no sessionStorage):
  // muda quando o cliente abre o site de novo (nova aba/sessao), mas nao muda
  // so por navegar entre paginas ou dar "voltar" dentro da mesma visita.
  var chaveOrdem = "ordemCatalogo:" + categoria;
  var idsGuardados = null;
  try {
    var bruto = sessionStorage.getItem(chaveOrdem);
    if (bruto) { idsGuardados = JSON.parse(bruto); }
  } catch (e) { idsGuardados = null; }

  if (idsGuardados && idsGuardados.length) {
    var porId = {};
    lista.forEach(function (p) { porId[p.id] = p; });

    var ordenada = idsGuardados
      .map(function (id) { return porId[id]; })
      .filter(Boolean);

    // produtos novos (adicionados depois de a ordem ter sido guardada) vao no fim
    var idsConhecidos = {};
    ordenada.forEach(function (p) { idsConhecidos[p.id] = true; });
    lista.forEach(function (p) {
      if (!idsConhecidos[p.id]) { ordenada.push(p); }
    });

    lista = ordenada;
  } else {
    // baralha (Fisher-Yates) e guarda a ordem para o resto da sessao
    for (var i = lista.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = lista[i];
      lista[i] = lista[j];
      lista[j] = tmp;
    }
    try {
      sessionStorage.setItem(chaveOrdem, JSON.stringify(lista.map(function (p) { return p.id; })));
    } catch (e) { /* sessionStorage indisponivel, segue sem guardar */ }
  }

  if (lista.length === 0) {
    grid.innerHTML = '<div class="catalog-empty">ainda não há produtos nesta categoria</div>';
    return;
  }

  var icon = CATEGORIA_ICON[categoria] || "ti-photo";

  grid.innerHTML = lista.map(function (p) {
    var zoom = p.thumbZoom || 1;
    var pos = p.thumbPos || "center";
    var style = 'style="object-position:' + pos + ';' +
      (zoom !== 1 ? 'transform:scale(' + zoom + ');' : '') + '"';
    var img = p.imagens && p.imagens[0]
      ? '<img src="' + p.imagens[0] + '" alt="' + p.nome + '" loading="lazy" ' + style + '>'
      : iconSVG(icon);
    return (
      '<a class="product-card" href="produto.html?id=' + encodeURIComponent(p.id) + '">' +
        '<div class="thumb">' + img + '</div>' +
        '<div class="info">' +
          '<div class="name">' + p.nome + '</div>' +
          '<div class="price">' + formatarPreco(p.preco) + '</div>' +
        '</div>' +
      '</a>'
    );
  }).join("");
})();
