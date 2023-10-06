export default () => {
    const container = document.createElement('div');
    
    const template = `
        <div class = "Emconstrucao">
        <h1>Página em Construção</h1>
        <img src="./Assets/src/image/navi/Logo Sabor de Mainha.png" alt="Página Em Construção">
        </div>
        `
    container.innerHTML = template;

    return container;
}