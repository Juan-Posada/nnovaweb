const bodyParser = require('body-parser')
const express    = require('express') // Se llama la dependencia del Framework
const morgan     = require('morgan')
const app        = express()

if (process.env.NODE_ENV !== 'production') {
    // Cargamos las variables de entorno
    require('dotenv').config()
}

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false})) // Permite recibir datos del formulario
app.use(bodyParser.json()) //Permite recibir solicitudes en json


// Rutas del API


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')} 💻`)
})