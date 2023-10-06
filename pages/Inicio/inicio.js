
export default () => {
    const container = document.createElement('div');

    const template = `
            <section class="banner">
                <div class="banner_img">
                    <img src="./Assets/src/image/main/banner.png" alt="">
                    <div class="background-banner"></div>
                </div>
                <div class="toldo-set">
                    <img id="line1" src="./Assets/src/image/geral/separador horizontal 2.png" alt="Line2">
                    <img id="line2" src="./Assets/src/image/geral/separador horizontal.png" alt="Line1">
                    <img id="toldo" src="./Assets/src/image/geral/toldo.png" alt="toldo">
                </div>
            </section>
            <section class="mais_procurados">
                <div class = "Background">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <div class="line4"></div>
                    <div class="line5"></div>
                </div>
                <div class="ribbon">
                    <img src="./Assets/src/image/main/ribbon.png" alt="">
                    <h1>Mais Procurados</h1>
                </div>

                <div class="productpopular" >
                    <div id="listaProdutos"> </div>
                </div> <!-- Dinamico-->
            </section>
            `;

    container.innerHTML = template;

    // Inclua um elemento de script para carregar o main.js
    const script = document.createElement('script');
    script.src = './js/main.js';
    document.body.appendChild(script);

    // Após criar a estrutura de elementos e inserir no container
    const event = new Event('estruturaPronta');
    document.dispatchEvent(event);

    return container;
};
