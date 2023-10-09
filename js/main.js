// NAVIGATION CONTROL
const menuCake = document.querySelector(".gg-menu-cake")
const navLinks = document.querySelector(".navigation")

menuCake.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})


// Carrega os arquivos no JSON e seleciona os 8 produtos mais clicados
async function carregarmaisprocurados() {
  console.log('carregando json');
  try {
      const response = await fetch('./data/produtos.json');
      if (!response.ok) {
          throw new Error('Falha ao carregar produtos');
      }

      const data = await response.json();

      // Classifica os produtos com base na quantidade de cliques em ordem decrescente
      data.sort((produtoA, produtoB) => produtoB.cliques - produtoA.cliques);

      // Seleciona os 8 primeiros produtos na classificação (os mais clicados)
      const produtosMaisClicados = data.slice(0, 8);

      return produtosMaisClicados;
  } catch (error) {
      console.error(error);
  }
}


//exibir os mais procurados dos produtos
export async function exibirmaisprocurados () {
  const listaprocuradosDiv = document.getElementById('listaProdutos');
  if (!listaprocuradosDiv) {
    console.error("Elemento 'listaProdutos' não encontrado, verificar criação da div");
    return;
  }

  const produtos = await carregarmaisprocurados(); 

  produtos.forEach((produto) => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');
   
    const imagem = document.createElement('img');
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    imagem.classList.add('produto-imagem');

    const display = document.createElement('img');
    display.src = produto.display;
    display.classList.add('produto-display');

    const nome = document.createElement('p');
    nome.textContent = produto.nome;
    nome.classList.add('produto-nome');

    const valor = document.createElement('p');
    valor.textContent = `R$ ${produto.valor.toFixed(2)}`;
    valor.classList.add('produto-valor');

    produtoDiv.appendChild(imagem);
    produtoDiv.appendChild(nome);
    produtoDiv.appendChild(valor);
    produtoDiv.appendChild(display);

    listaprocuradosDiv.appendChild(produtoDiv);
});
}




  
  










