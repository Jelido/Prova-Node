import express from 'express'
import { iniciarBatalha } from '../ControleBatalha/batalha.js'

const router = express.Router()

router.post('/batalhar', iniciarBatalha)
export default router
