const express=require("express");

var app=express();
var bodyparser=require("body-parser")

app.get(function(resp,req,next){
    console.log("This is middleware");
    next();
})

app.get("/hello",function(){
    resp.sendFile("/public/hello.html",{root:_dirname});
})

app.send("/about",function(req,res){
    resp.send("<h1> About us</h1>");
})

app.listen(9090,function(){
    console.log("server is runnning at port 9090");
})