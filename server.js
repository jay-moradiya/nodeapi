const express = require('express')
require('./config/db') // MONGODB connection
const app = express()
const bodyParser = require('body-parser') // body-parser
const port = process.env.PORT || 3000 // running port
const route = require('./routes/userRouts')  // route
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
route(app)

// server is running on...
app.listen(port, () => {
    console.log(`server running on ${port} ...`);
})