// Imports
import { Router } from 'express'
import indexController from '../controllers/index-controller.js'

// Router Handler
const router = new Router()

// Routes
router.get('/', indexController.index)

// Export router handler
export default router