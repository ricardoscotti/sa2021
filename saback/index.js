//import { express } from "express";

const express = require('express')
const app = express()
const port = 3334
import ArtistaController from './src/controllers/ArtistaController'
import EstabelecimentoController from './src/controllers/EstabelecimentoController'
import UsuarioController from './src/controllers/UsuarioController'
import EventoController from './src/controllers/EventoController'
import AvaliacaoArtistaController from './src/controllers/AvaliacaoArtistaController'
import "./src/database/database"
import auth from './src/middlewere/auth'
app.use(express.json())



app.post('/auth/usuario', UsuarioController.index)
app.use(auth)
app.post('/avaliacaoartista', AvaliacaoArtistaController.avaliaartista);
app.get('/avaliacaoartista', AvaliacaoArtistaController.index);
app.get('/artistas',auth, ArtistaController.all);
app.get('/artistas/:id', ArtistaController.unique)
app.get('/estabelecimentos', EstabelecimentoController.all);
app.get('/estabelecimentos/:id', EstabelecimentoController.unique);
app.get('/eventos', EventoController.index);
app.post('/eventos/criar', EventoController.create);
app.put('/eventos/:id', EventoController.update);
app.delete('/eventos/:id', EventoController.delete);
app.get('/eventoestabelecimento/:id', EventoController.indexporid); 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
























