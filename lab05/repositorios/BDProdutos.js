import { database } from '../db.js'
import mongodb from 'mongodb'

class ProdutosRepository{
  async getProdutos(){
    let db = await database.connect()
    let produtosCollection = await db.collection('produtos').find().toArray()
    return produtosCollection
  }

  async insertProdutos(produto, user){
    let db = await database.connect()
    let obj = {...produto, user}
    db.collection('produtos').insertOne(obj)
  }

  async updateProdutos(editProduct){
    let obj = {
      id: editProduct.id,
      nome: editProduct.nome,
      categoria: editProduct.categoria,
      desc: editProduct.desc,
      preco: editProduct.preco,
    }
    
    produtos = produtos.map(produto => {
      return produto.id == editProduct.id ? obj : produto
    })
  }

  async getProdutosByUser(user){
    let db = await database.connect()
    let produtosCollection = await db.collection('produtos').find({user: user}).toArray()
    return produtosCollection
  }

}

export const produtosRepository = new ProdutosRepository();
