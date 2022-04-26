let arrayCategorias = [
  {
    chave: 1,
    valor: "Revista",
    campoPersonalizado: [

    ]
  }, {
    chave: 2,
    valor: "Filme",
    campoPersonalizado: [

    ]
  }, {
    chave: 3,
    valor: "Livro",
    campoPersonalizado: [

    ]
  },
  
  // {
  //   chave: 2,
  //   valor: "Revista",
  // },
  // {
  //   chave: 3,
  //   valor: "Jornal",
  // },
];

class Category {
  addCategoria(categoria) {
    let custom = categoria.campoPersonalizado.toString();
    categoria.campoPersonalizado = custom;
    arrayCategorias.push(categoria);
    return arrayCategorias;
  }

  getCategoria() {
    return arrayCategorias;
  }

  deleteCategoria(chave) {
    arrayCategorias = arrayCategorias.filter((categoria) => {
      return categoria.chave != chave;
    });
    return arrayCategorias;
  }
}

module.exports = new Category();
