const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'));


app.get("/",function(req,res){
    res.sendfile('index.html');
    });

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("server is running")
});