const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const numberRoutes = require('./routes/numberRoutes');
const url = 'mongodb://localhost:27017/calculator'

const app = express();
const port = 9876;


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(bodyParser.json());
app.use('/numbers', numberRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
