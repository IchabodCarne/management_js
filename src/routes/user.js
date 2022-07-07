import express from 'express'
const router = express.Router()
import { register } from '../controller/user'

router.post('/register', function (req, res, next) {
  register(req, res, next)
})

export default router
