const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send(Math.random()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type','text/html')
//     res.end('<h1>Dynamic web page</h1> <p> With random value: </p>' + Math.random())
// })

// server.listen(2222)