const express = require("express");
const ejs = require('ejs');
const path = require('path');
const expressLayout  = require('express-ejs-layouts');
const app= express();

const PORT = process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.render('home');
})

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})