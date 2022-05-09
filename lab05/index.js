import express from 'express';
import { produtosRepository } from './repositorios/BDProdutos.js' 
import { categoriasRepository } from './repositorios/BDCategorias.js'
import basicAuth from 'express-basic-auth'
import { database } from './db.js'

const app = express()
const port = 3000;
const db = await database.connect()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const mongoAuthorizer = (user, password, cb) => {
  db.collection('users').findOne({user, password}).then(user => {
    return cb(null, !!user)
  })
}

app.use('/produtos-cadastrar', basicAuth({authorizer: mongoAuthorizer, authorizeAsync: true, challenge: true}))
app.use('/produtos/meus-produtos', basicAuth({authorizer: mongoAuthorizer, authorizeAsync: true, challenge: true}))
app.get('/', (req, res) => {
  res.redirect('/produtos')
})

app.get('/produtos', async (req, res) => {
  let produtos = await produtosRepository.getProdutos()
  let categorias = await categoriasRepository.getCategorias()
  res.render('produtos', {title: `Produtos`, subTitle: `Produtos cadastrados`, produtos, categorias})
})

app.get('/produtos-cadastrar',async (req, res) => {
  let basic = Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':')
  let categorias = await categoriasRepository.getCategorias()
  res.render('produtos-cadastrar', {title: `Produtos`, subTitle: `Cadastrar produtos`, categorias, produto: null, user: basic[0]})
})

app.post('/produtos-cadastrar', (req, res) => {
  let basic = Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':')
  produtosRepository.insertProdutos(req.body, basic[0])
  res.redirect('/produtos')
})

app.get('/produtos/meus-produtos', async (req, res) => {
  let basic = Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':')
  let categorias = await categoriasRepository. getCategorias()
  let produtos = await produtosRepository.getProdutosByUser(basic[0])
  res.render('meus-produtos', {title: `Produtos`, subTitle: `Produtos cadastrados`, user: basic[0], categorias, produtos})
})

app.listen(port, () => {
  console.log(`Running at ${port}`)
})
