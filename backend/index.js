// index.js ye file express server jaise kaam karega.
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000


app.use(cors)

// agar req.body use karna hai toh ye middleware lagana padhega
app.use(express.json())


//Avialable Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook Backend listening on port http://localhost:${port}`)
}) 
