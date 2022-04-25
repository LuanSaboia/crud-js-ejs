let arrayCategorias = [
  {
    chave: 1,
    valor: "Filme",
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
// let campoPersonalizado = [
  
// ];

class Category {
  addCategoria(categoria) {
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
