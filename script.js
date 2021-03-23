const express = require('express')
const app = express()

const port = 4000;

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', function (req, res) {
  res.sendFile(__dirname + '\\index.html')
})
 
app.listen(port , function (){
    console.log(`App is listen on ${port}`);
})
