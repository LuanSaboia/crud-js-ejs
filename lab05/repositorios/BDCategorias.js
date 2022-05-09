import { database } from '../db.js'


class CategoriasRepository {
  async getCategorias() {
    let db = await database.connect()
    let categoriasCollection = db.collection('categorias').find({})
    return await categoriasCollection.toArray()
  } 
}

export const categoriasRepository = new CategoriasRepository();
