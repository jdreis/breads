const express = require('express');
const router = express.Router()
const Bread = require('../models/bread')

// INDEX
router.get('/', (req, res) => {
    res.render('Index', 
        {
            breads: Bread
        }
    )
    // res.send(Bread)
})

// SHOW
router.get('/:id', (req, res) => {
    res.send(Bread[req.params.id])
})

module.exports = router