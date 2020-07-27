const express = require('express')
const app = express();
const  engines = require('consolidate');

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/jquery',(req,res)=>{
    res.render('jquerydemo');
})

const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log('Server is running ... ');