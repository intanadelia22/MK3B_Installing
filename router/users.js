const express = require('express')
const router = express.Router()

const users = [
    {id: 1, nama: "Intan", email: "liannavic08@gmail.com"},
    {id: 2, nama: "Adelia", email: "alaia22@gmail.com"},
]

// GET semua user
router.get('/users', (req, res) => {
    res.json(users)
})

// POST user baru
router.post('/user', (req, res) => {
    users.push(req.body)
    res.json(users)
})

// PUT (update) user berdasarkan ID
router.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user')
})

// DELETE user berdasarkan ID
router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
})

// Ekspor router agar bisa digunakan di index.js
module.exports = router
