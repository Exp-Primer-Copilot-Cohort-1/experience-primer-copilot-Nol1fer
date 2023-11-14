// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1

// Load modules
const express = require('express')
const app = express()
const port = 3000

// Load data
const comments = require('./comments.json')

// Create web server
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/comments', (req, res) => {
  res.send(comments)
})

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === Number(req.params.id))
  res.send(comment)
})

// Start and listen the server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})