// Link do formulario de contacto no Formspree (formspree.io -> o teu formulario -> endpoint).
// Substitui "COLOCAR_LINK_AQUI" pelo link completo, ex: "https://formspree.io/f/abcd1234"
var FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnvzno";

var THEME_KEY = "blcksiTema";

function blcksiAplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  var btn = document.getElementById("themeToggle");
  if (btn) {
    var icon = btn.querySelector("i");
    if (icon) { icon.className = tema === "neon" ? "ti ti-flame" : "ti ti-moon"; }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var temaAtual = document.documentElement.getAttribute("data-theme") || "dark";
  blcksiAplicarTema(temaAtual);

  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var novo = document.documentElement.getAttribute("data-theme") === "neon" ? "dark" : "neon";
      blcksiAplicarTema(novo);
      try { localStorage.setItem(THEME_KEY, novo); } catch (e) { /* localStorage indisponivel */ }
    });
  }

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "56px";
      nav.style.right = "24px";
      nav.style.background = "var(--bg-card)";
      nav.style.border = "0.5px solid var(--border-strong)";
      nav.style.borderRadius = "8px";
      nav.style.padding = "12px 20px";
      nav.style.gap = "12px";
    });
  }

  var thumbs = document.querySelectorAll("#galleryThumbs button");
  var mainImg = document.getElementById("galleryMainImg");
  if (thumbs.length && mainImg) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        thumbs.forEach(function (t) { t.classList.remove("active"); });
        thumb.classList.add("active");
        var src = thumb.getAttribute("data-img");
        if (src) { mainImg.src = src; }
      });
    });
  }

  var sizeButtons = document.querySelectorAll("#sizeOptions button");
  if (sizeButtons.length) {
    sizeButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        sizeButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
      });
    });
  }

  var paymentMethods = document.querySelectorAll("#paymentMethods .payment-method");
  if (paymentMethods.length) {
    paymentMethods.forEach(function (method) {
      method.addEventListener("click", function () {
        paymentMethods.forEach(function (m) {
          m.classList.remove("active");
          m.innerHTML = "<span>" + m.getAttribute("data-method") + "</span>";
        });
        method.classList.add("active");
        method.innerHTML = "<span>" + method.getAttribute("data-method") + "</span><i class=\"ti ti-check\"></i>";
      });
    });
  }

  var confirmForm = document.getElementById("confirmForm");
  var paymentForm = document.getElementById("paymentForm");
  var formSuccess = document.getElementById("formSuccess");
  if (confirmForm && paymentForm && formSuccess) {
    confirmForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var pedido = window.PEDIDO_ATUAL;
      var nome = document.getElementById("nome");
      var contacto = document.getElementById("contacto");
      var metodoEl = document.querySelector("#paymentMethods .payment-method.active");
      var metodo = metodoEl ? metodoEl.getAttribute("data-method") : "";

      if (pedido && pedido.produto) {
        var linhas = [
          "Novo pedido — BLCKSI",
          "Produto: " + pedido.produto.nome,
          pedido.tamanho ? "Tamanho: " + pedido.tamanho : null,
          "Preço: " + formatarPreco(pedido.produto.preco),
          "Método: " + metodo,
          "Nome: " + (nome ? nome.value : ""),
          "Contacto: " + (contacto ? contacto.value : ""),
          "",
          "Nota: a partir do dia em que o pagamento for efetuado, começa a contar o prazo de entrega — a encomenda é entregue num espaço de até 7 dias."
        ].filter(Boolean);

        var texto = encodeURIComponent(linhas.join("\n"));
        var numeroWhatsapp = "258849220801";
        window.open("https://wa.me/" + numeroWhatsapp + "?text=" + texto, "_blank");
      }

      paymentForm.style.display = "none";
      formSuccess.style.display = "block";
    });
  }

  var contactForm = document.getElementById("contactForm");
  var contactSuccess = document.getElementById("contactSuccess");
  var contactError = document.getElementById("contactError");
  if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector("button[type=submit]");
      var textoOriginal = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "a enviar...";
      if (contactError) { contactError.style.display = "none"; }

      var dados = {
        nome: document.getElementById("cNome").value,
        contacto: document.getElementById("cContacto").value,
        mensagem: document.getElementById("cMensagem").value,
        _gotcha: document.getElementById("cGotcha").value
      };

      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(dados)
      })
        .then(function (res) {
          if (!res.ok) { throw new Error("falha no envio"); }
          contactForm.style.display = "none";
          contactSuccess.style.display = "block";
        })
        .catch(function () {
          if (contactError) {
            contactError.style.display = "block";
          } else {
            alert("Não foi possível enviar a mensagem. Tente novamente ou contacte-nos pelo WhatsApp.");
          }
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = textoOriginal;
        });
    });
  }

  var amountButtons = document.querySelectorAll("#amountOptions button");
  var giftAmount = document.getElementById("giftAmount");
  if (amountButtons.length && giftAmount) {
    amountButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        amountButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        giftAmount.textContent = btn.getAttribute("data-amount");
      });
    });
  }
});
