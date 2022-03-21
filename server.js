var express = require("express")
var app = express()

// test and listen to the port
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// define the port as 3000
var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    console.log("press Ctrl + C to quit")
})