const express= require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.send("HELLO WORLD");
});
app.get('/dashboard',(req,res)=>{
    res.sendFile(__dirname+'/public/dashboard.html');
});
app.post('/submit',(req,res)=>{
    res.send(req.body);
});
app.listen(8000,()=>console.log("Server Running on Port 8000"));