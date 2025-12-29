// seleciona os elementos do HTML
const botao = document.getElementById("btnSobre");
const texto = document.getElementById("textoSobre");

// controla se o texto está visível
let textoVisivel = false;

// adiciona evento de clique
botao.addEventListener("click", function () {
  if (!textoVisivel) {
    texto.textContent =
      "Sou estudante de tecnologia, focado em desenvolvimento web e criação de projetos práticos para evoluir como desenvolvedor.";
    botao.textContent = "Ocultar";
    textoVisivel = true;
  } else {
    texto.textContent = "";
    botao.textContent = "Sobre mim";
    textoVisivel = false;
  }
});
