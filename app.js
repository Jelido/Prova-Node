import express from 'express'
import Rotas from './Rotas/rotas.js'

const app = express()

app.use(express.json())

app.use(Rotas)


app.listen(3000, () => console.log('Servidor iniciado'))
