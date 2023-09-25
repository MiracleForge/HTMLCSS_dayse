const produtos = [
    {
      nome: 'Beijinho',
      imagem: './assets/image/prod.beijinho.png', // Inclua a extensão do arquivo (por exemplo, ".jpg")
      valor: 19.99
    },
    {
      nome: 'Boliviano',
      imagem: './assets/image/prod.boliviano.png', // Inclua a extensão do arquivo (por exemplo, ".jpg")
      valor: 9.99
    },
    {
      nome: 'Pastel de Belém',
      imagem: './assets/image/prod.pastelbelem.png', // Inclua a extensão do arquivo (por exemplo, ".jpg")
      valor: 39.99
    },
    // Adicione mais produtos conforme necessário
  ];
  
  function exibirProdutos() {
    const listaProdutosDiv = document.getElementById('listaProdutos');

    produtos.forEach((produto) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;
        imagem.classList.add('produto-imagem');

        const nome = document.createElement('p');
        nome.textContent = produto.nome;
        nome.classList.add('produto-nome');

        const valor = document.createElement('p');
        valor.textContent = `R$ ${produto.valor.toFixed(2)}`;
        valor.classList.add('produto-valor');

        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(valor);

        listaProdutosDiv.appendChild(produtoDiv);
    });
}

exibirProdutos();
console.log('Função exibirProdutos foi chamada.');


  
  