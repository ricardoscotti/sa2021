//import { express } from "express";

const express = require('express')
const app = express()
const port = 3334
import ArtistaController from './src/controllers/ArtistaController'
import EstabelecimentoController from './src/controllers/EstabelecimentoController'
import UsuarioController from './src/controllers/UsuarioController'
import "./src/database/database"

app.use(express.json())

app.get('/artistas', ArtistaController.index);

app.get('/estabelecimentos', EstabelecimentoController.index);

app.get('/usuario/:login', UsuarioController.index)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
























