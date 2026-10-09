// Seleciona os elementos do HTML
const botao = document.getElementById("btnSobre");
const texto = document.getElementById("textoSobre");

// Controla a exibição do texto
let textoVisivel = false;

// Exibe ou oculta a apresentação
botao.addEventListener("click", function () {
    if (!textoVisivel) {
        texto.textContent =
            "Sou desenvolvedor em formação e trabalho em projetos próprios para aprender e aplicar meus conhecimentos. Tenho experiência prática com HTML, CSS, JavaScript, PHP, MySQL, APIs e Flutter. Estou desenvolvendo projetos como DevNexus e MotoCar, buscando evoluir continuamente na programação.";

        botao.textContent = "Ocultar apresentação";
        textoVisivel = true;
    } else {
        texto.textContent = "";
        botao.textContent = "Sobre mim";
        textoVisivel = false;
    }
});
