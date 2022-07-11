import express from 'express'
import { register, login, updatePsw } from '../controller/login'

const router = express.Router()

router.post('/register', function (req, res, next) {
  register(req, res, next)
})
router.post('/login', function (req, res, next) {
  login(req, res, next)
})
router.post('/updatePsw', function (req, res, next) {
  updatePsw(req, res, next)
})

export default router
