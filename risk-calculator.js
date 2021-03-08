/*
    Node.js code goes in this file. -Erik
*/

const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
   fs.readFile('index.html', (err, data) => {
       res.writeHead(200, { 'Content-Type': 'text/html'})
       res.end(data)
   })
  })
  
  server.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'))