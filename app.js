const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const routes = require('./router/routes')
const notFound = require('./middleware/notFound')
const errorHandler = require("./middleware/error");
require('express-async-errors')
//middleware
app.use(express.json())

//routes
app.use('/api/v1/products', routes)
app.get('/', (req, res) => {
    res.send(
      '<h1> Store api </h1> <a href="/api/v1/products"> View products </a>'
    );
})
//errors
app.use([notFound, errorHandler]);

const port = process.env.PORT || 3000
connectDB(process.env.MONGO_URI).then(() => {
    app.listen(port, ()=> console.log(`server listening on port ${port}`))
}).catch(err=> console.log(err))