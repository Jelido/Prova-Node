import express from 'express'
import heroiRoutes from './RotasHerois/herois.js'
import vilaoRoutes from './RotasViloes/viloes.js'
import batalhaRoutes from './RotaBatalha/batalha.js'

const app = express()

app.use(express.json())

app.use(heroiRoutes)
app.use(vilaoRoutes)
app.use(batalhaRoutes)

app.listen(3000, () => console.log('Servidor iniciado'))
