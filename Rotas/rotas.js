import express from 'express'
import { iniciarBatalha, getHerois, adicionarHeroi, getViloes, adicionarVilao } from '../Controle/controle.js'

const router = express.Router()

router.post('/batalhar', iniciarBatalha)

router.get('/herois', getHerois)
router.post('/herois', adicionarHeroi)

router.get('/viloes', getViloes)
router.post('/viloes', adicionarVilao)



export default router