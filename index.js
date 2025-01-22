const express = require('express')
const app = express()
const userrouter = require('./router/users')

const port = 3000

app.get('/', (req, res) => {
  res.send('Senang mengenalmu!')
})

app.use(userrouter)
// app.get('/users', (req, res) => {
//   res.send('Got All Users!')
// })

// app.post('/user', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user/:id', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user/:id', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
