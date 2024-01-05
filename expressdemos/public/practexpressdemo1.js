const express=require("express");


var app=express();
const bodyparser =require("body-parser");


app.use(function(req,resp,next){
    console.log("this is first Middleware");
    console.log("url : " + req.url);
    next();

})

app.use(function(req,resp,next){
    console.log("this is first middle ware :")
    console.log("url : "+ req.url);
    next();
})

app.get("/home",function(){
    //resp.send("<h1>Home page</h1>")
    resp.send("<h1>Home page</h2>")
})

app.get("/aboutus",function(req,resp,next){
    var str="Hello Good Morining";
    str+="How are you Today";
    resp.send(next);
})

app.listen(function(){
    console.log("The Port 9090 ");
})