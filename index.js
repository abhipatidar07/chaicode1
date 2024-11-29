// import express from "express"
require('dotenv').config
const express = require('express')


const app = express();

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.get('/login',(req,res)=>{
    res.send("or lodu aa gya fir");
})

app.listen(process.env.PORT,()=>{
    console.log('success')
})