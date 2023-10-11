export default () => {
    const container = document.createElement('div');
    
    const template = `
    <section class= "Catalogo"> 

    <section class="all_products">

    <section class = "filter">
    <div class = "nav_filter>
    <form id="search">
        <input type="text" id="search-box" placeholder="Pesquisar Produtos">
        <i class="fas fa-search" style="color: #000000; background-color: #ffffff; border: none;"></i>

    </form>
    <button id= "order"> <img src="./Assets/src/image/main/arrows.png" alt=""> <h2> Ordenar por </h2> </button>
    <button id= "filter"> <img src="./Assets/src/image/main/filter.png" alt=""> <h2> Filtro</h2> </button>
    </div>

    <ul>
        <li class="active">Todos os Produtos</li>
        <li><img src="./Assets/src/image/navi/mobilenav_line.png" alt=""></li>
        <li>Bolos</li>
        <li><img src="./Assets/src/image/navi/mobilenav_line.png" alt=""></li>
        <li>Salgados</li>
        <li><img src="./Assets/src/image/navi/mobilenav_line.png" alt=""></li>
        <li>Doces</li>
        <li><img src="./Assets/src/image/navi/mobilenav_line.png" alt=""></li>
    </ul>
    </section>

        <div class = "ribbon_allproducts">
            <img src="./Assets/src/image/main/ribbon.png" alt="">
            <h1>Produtos</h1>
        </div>

        <div class ="Product">
            <div id="showproduct">
            </div>
        </div>
    </section>

    </section>
    `
    container.innerHTML = template;

    return container;
}