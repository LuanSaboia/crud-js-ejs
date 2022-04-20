let arrayCategorias = [
  {
    chave: 1,
    valor: "Filme",
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
