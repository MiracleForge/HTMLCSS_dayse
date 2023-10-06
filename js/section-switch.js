import Inicio from "../pages/Inicio/inicio.js";
import Catálogo from "../pages/Catálogo/catalogo.js";
import Orçamento from "../pages/Orçamento/orcamento.js";
import SobreNós from "../pages/SobreNos/sobrenos.js";

const main = document.querySelector("#dynamic-main");
const removenav = document.querySelector(".secundary_nav"); // Corrija a seleção da classe secundary_nav // construção page

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        controlarNavDisplay(); // Chama a função para controlar o display da classe removenav //temporaria
        switch (window.location.hash) {
            case "":
                main.appendChild(Inicio());
                break;
            case "#inicio":
                main.appendChild(Inicio());
                break;
            case "#catalogo":
                main.appendChild(Catálogo());
                break;
            case "#orcamento":
                main.appendChild(Orçamento());
                break;
            case "#contact":
                main.appendChild(SobreNós());
                break;
            default:
                main.appendChild(Inicio());
                break;
        }
    });
}

// Função para controlar o display da classe removenav/ // temporaria
function controlarNavDisplay() {
    switch (window.location.hash) {
        case "#catalogo":
        case "#orcamento":
        case "#contact":
            removenav.style.display = "none";
            break;
        default:
            removenav.style.display = "block";
            break;
    }
}

window.addEventListener("load", () => {
    main.appendChild(Inicio());
    init();
});
