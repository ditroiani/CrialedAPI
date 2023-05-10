// Imports 
import { Router } from 'express'
import usuarioController from '../controllers/usuario-controller.js'

// Router handler
const router = new Router()

// Routes
router.post('/', usuarioController.store)
router.get('/', usuarioController.index)
router.get('/:id', usuarioController.find)
router.put('/:id', usuarioController.update)
router.delete('/:id', usuarioController.delete)

// Export router handler
export default router