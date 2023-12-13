import express from 'express'
import { getViloes, excluirVilao, adicionarVilao } from '../ControleVilao/viloes.js'

const router = express.Router()

router.get('/viloes', getViloes)
router.delete('/viloes/:id', excluirVilao)
router.post('/viloes', adicionarVilao)

export default router