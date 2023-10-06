
 produtos = [
    {
      nome: 'Beijinho',
      imagem: '../Assets/src/image/main/produtos/beijinho.png',
      display: '../Assets/src/image/main/rectangle product.png',
      valor: 19.99
    },
    {
      nome: 'Boliviano',
      imagem: '../Assets/src/image/main/produtos/boliviano.png',
      display: '../Assets/src/image/main/rectangle product.png',
      valor: 9.99
    },
    {
      nome: 'Pastel de Belém',
      imagem: '../Assets/src/image/main/produtos/pastel doce.png',
      display: '../Assets/src/image/main/rectangle product.png',
      valor: 39.99
    },
    {
        nome: 'Coxinha',
        imagem: '../Assets/src/image/main/produtos/beijinho.png',
        display: '../Assets/src/image/main/rectangle product.png',
        valor: 19.99
      },
      {
        nome: 'Kibe',
        imagem: '../Assets/src/image/main/produtos/boliviano.png',
        display: '../Assets/src/image/main/rectangle product.png',
        valor: 9.99
      },
      {
        nome: 'Pão Delícia',
        imagem: '../Assets/src/image/main/produtos/pastel doce.png',
        display: '../Assets/src/image/main/rectangle product.png',
        valor: 39.99
      },
      {
        nome: 'Kibe',
        imagem: '../Assets/src/image/main/produtos/boliviano.png',
        display: '../Assets/src/image/main/rectangle product.png',
        valor: 9.99
      },
      {
        nome: 'Pão Delícia',
        imagem: '../Assets/src/image/main/produtos/pastel doce.png',
        display: '../Assets/src/image/main/rectangle product.png',
        valor: 39.99
      }
    // Adicione mais produtos conforme necessário
  ];
 

  function exibirProdutos() {
    const listaProdutosDiv = document.getElementById('listaProdutos');
  
    if (!listaProdutosDiv) {
      console.error("Elemento 'listaProdutos' não encontrado.");
      return;
    }

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
  
      listaProdutosDiv.appendChild(produtoDiv);
    });
    }

    exibirProdutos();

  
  
  
  
  










