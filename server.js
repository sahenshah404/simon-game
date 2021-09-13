const express= require("express");
const { dirname } = require("path");
const app= express();

app.get("/",(req,res)=>{
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname+"\\index.html");
})
app.get("/game.js",(req,res)=>{
    res.setHeader('content-type', 'text/js');
    res.sendFile(__dirname+"\\game.js");
})
app.get("/styles.css",(req,res)=>{
    res.setHeader('content-type', 'text/css');
    res.sendFile(__dirname+"\\styles.css");
})
app.get("/*",(req,res)=>{
    res.setHeader('content-type', 'audio/mpeg');
    res.sendFile(__dirname+"\\"+req.params[0]);
})

app.listen(3000,()=>{
    console.log("server started");
});