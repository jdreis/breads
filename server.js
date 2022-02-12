const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 3000

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
    res.send('welcome')
})

// CONTROLLER
const breadController = require('./controllers/breads_controller')
app.use('/breads', breadController)

// 404
app.get('*', (req, res) => {
    res.send('404 Page Not Found')
})

app.listen(PORT)