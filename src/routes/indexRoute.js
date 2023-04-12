// Imports
import { Router } from 'express'
import indexController from '../controllers/indexController.js'

// Router Handler
const router = new Router()

// Routes
router.get('/', indexController.index)

// Export router handler
export default router