const express = require('express');
const app = express();
const path = require('path');


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'))


app.use('/static' , express.static(path.join(__dirname , 'public')))

app.get('/',(req, res) => {
    res.render('home')
})

app.get('/blogs',(req,res) => {
    res.render('blogs')
})

app.get('/media',(req,res) => {
    res.render('media')
})

app.get('/studio',(req,res) => {
    res.render('studio')
})

app.get('/forest',(req,res) => {
    res.render('forest')
})

app.get('/sea',(req,res) => {
    res.render('sea')
})

app.get('/river',(req,res) => {
    res.render('river')
})

app.get('/sky',(req,res) => {
    res.render('sky')
})
app.get('/desert',(req,res) => {
    res.render('desert')
})

app.get('/waterfall',(req,res) => {
    res.render('waterfall')
})

app.get('/noti',(req,res) => {
    res.render('noti')
})
app.listen(3000 , () => {
    console.log("LISTENING ON PORT 3000")
})