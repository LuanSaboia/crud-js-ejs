const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(urlencoded({ extended: true }));

const category = require("./repositories/BDcategorias");
const product = require("./repositories/BDprodutos");

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Lab MPA", message: "Bem vindo ao Lab MPA" });
});
app.get("/categorias", (req, res) => {
  res.render("categorias", {
    title: "Lab MPA",
    categoria: category.getCategoria(),
  });
});
app.post("/categoria-salvar", (req, res) => {
  let add = category.addCategoria(req.body);
  res.render("categorias", { title: "Lab MPA", categoria: add });
});
app.get("/categoria-deletar/:chave", (req, res) => {
  let removeCategoria = category.deleteCategoria(req.params.chave);
  res.render("categorias", { title: "Lab MPA", categoria: removeCategoria });
});

app.get("/produtos", (req, res) => {
  res.render("produtos", {
    title: "Lab MPA",
    produto: product.getProduto(),
  });
});
app.get("/produto-novo", (req, res) => {
  res.render("produto-novo", {
    title: "Lab MPA",
    produto: product.getProduto(),
    categoria: category.getCategoria(),
  });
});
app.post("/produto-salvar", (req, res) => {
  let add = product.addProduto(req.body);
  res.redirect("/produtos");
  res.render("produto-novo", { title: "Lab MPA", produto: add,  categoria: category.getCategoria(),});
});
app.get("/produto-editar/:id", (req, res) => {
  //let editarProduto = product.editProduto(req.body.id, req.params.id);
  let editarProduto = product.getProdutoId(req.params.id);
  res.render("produto-editar", {
    title: "Lab MPA",
    //produto: editarProduto,
    editProduto: editarProduto,
    categoria: category.getCategoria(),
  });
});
app.post("/produto-editar/:id", (req, res) => {
  let editarProduto = product.editProduto(req.body, req.params.id);
  res.redirect("/produtos");
  // res.render("produto-editar", {
  //   title: "Lab MPA",
  //   editProduto: editarProduto,
  //   categoria: category.getCategoria(),
  // });
});