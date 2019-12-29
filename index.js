const express = require("express");
var app = express();
const bodyParser=require("body-parser");

app.listen(3000);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"\\index.html");
})

app.post("/calculate", function(req, res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    res.send("The result is "+ (num1+num2));
})
