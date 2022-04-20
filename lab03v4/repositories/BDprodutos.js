let arrayProdutos = [
  {
    id: 0,
    nome: "Doutor Estranho",
    dados: "Filme",
    descricao: "Um bom filme",
    preco: "10"
  },
  // {
  //   id: 2,
  //   nome: "Doutor Estranho",
  //   categoria: "Filme",
  //   descricao: "bom",
  //   preco: "10"
  // },
];

class Product {
  addProduto(produto) {
    arrayProdutos.push(produto);
    return arrayProdutos;
  }

  getProduto() {
    return arrayProdutos;
  }

  editProduto(product, id) {
    arrayProdutos = arrayProdutos.map((produto) => {
      return produto.id == id ? product : produto;
    });
    return arrayProdutos;
  }
  
  getProdutoId(id) {
    let produto = arrayProdutos.filter(product => {
      return product.id == id;
    })
    
    return produto[0];
  }
}

module.exports = new Product();
