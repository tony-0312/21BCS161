const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/calculator'

const app = express()
app.use(bodyParser.json())
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

const testrouter = require('./routes/numbers')
app.use('/numbers',testrouter)

const PORT = 9000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));