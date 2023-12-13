import express from 'express'
import {getHerois, excluirHeroi, adicionarHeroi}from '../ControleHeroi/herois.js'

const router = express.Router()

router.get('/herois', getHerois)
router.delete('/herois/:id', excluirHeroi)
router.post('/herois', adicionarHeroi)

export default router
