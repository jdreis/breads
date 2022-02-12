const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 3000

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