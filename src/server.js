// Imports
import app from './app.js'

// Port
const port = process.env.APP_PORT

// Listen
app.listen(port, () => {
    console.log('Server listen in => ', port)
})