// Imports
import express from 'express'
import 'dotenv/config'

// Routes imports
import indexRoute from './routes/indexRoute.js'
import usuarioRoute from './routes/usuarioRoute.js'
import ('./database/connection.js')

class App {
    // Init app
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        console.log("Loading middlewares...")
    }

    routes() {
        this.app.use('/', indexRoute)
        this.app.use('/usuario/', usuarioRoute)
        console.log("Loading routes...")
    }
}

export default new App().app