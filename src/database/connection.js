import Sequelize from 'sequelize'
import dbConfig from '../config/database.mjs'

// Models
import Usuario from '../models/usuario.js'
const models = [Usuario]

// Create connection
const sequelize = new Sequelize(dbConfig)

// Test Connection
try {
    await sequelize.authenticate()
    console.log('Database connected!')
} catch (error) {
    console.log('Unable to connect to the database', error)
}

// Pass connection models
models.forEach(model => model.init(sequelize))