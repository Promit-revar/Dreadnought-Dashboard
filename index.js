const express= require('express');
const bodyParser=require('body-parser');
const app=express();
const Port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/Landingpage.html');
});
app.get('/dashboard',(req,res)=>{
    res.sendFile(__dirname+'/public/dashboard.html');
});

app.listen(Port,()=>console.log(`Server Running on Port ${Port}`));