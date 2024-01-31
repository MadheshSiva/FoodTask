const express = require('express')
const bodyParser = require('body-parser')
const {insertData} = require('./insertFood')
const {getData} = require('./getFood')
const cors = require('cors')
const app = express()
const PORT = 3060
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(bodyParser.json())

const Router = express.Router()


const inseertedData = Router.post('/uploadData',insertData)
app.use('/',inseertedData)

const gotData = Router.get('/getFoods',getData)
app.use('/',gotData)
app.listen(PORT,() => {
    console.log(`server started at ${PORT}`)
})
