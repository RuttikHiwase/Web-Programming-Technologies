const express=require("express");

const app=express();

const bodyParser=require(bodyparser);
const bodyparser=require(bodyparser);

const m1=require("./module1");
app.use(bodyparser.urlencoded({extended:false}));

get.app("/login",function(resp,req){
    resp.sendFile("/public/login.html",{root__dirname})

    get.post("/validate",function(resp,req){
        var u=m1.validateuser(req.body.uname,req.body.pass);
        if(u== null){
            resp.send("<h1> invalid user</h1>")
        }
        else{
            resp.send("/public/login.html",{root__dirname})
        }

        
    })

    // app.get("/calculate",function(req,resp){
    //     var num1=parseInt(req.query.num1);
    //     var btn=req.query.btn;
    //     if(btn==="add"){
    //         var num2=parseInt(req.query.num2);
    //         var ans=m1.addition(num1,num2);
    //         resp.send("<h1>Addition : "+ans+"</h1>" )
    //     }else{
    //         var ans=m1.factorial(num1);
    //         resp.send("<h1>Factorial : "+ans+"</h1>" )
    //     }    
    
    // })

    app.get("/calculate",function(req,resp){
        var num1=parseInt(req.query.num1);
        var btn=req.query.btn;
        if(btn==="add"){
            var num2=parseInt(req.query.num2);
            var ans=m1.addition(num1,num2);
            resp.send("<h1> Addition : "+ ans +"</h1">)
        }
        else{
            var ans=m1.factorial(num1);
            resp.send("<h1>Factorial : "+ ans+"</h1>")
        }
    })
})