var express = require("express")
var app = express()

// define the port as 3000
var port = process.env.port || 3000;

// test and listen to the port
// app.use(express.static(_dirname+'/public'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

app.listen(port,()=>{
    console.log("App listening to: "+port)
    console.log("press Ctrl + C to quit")
})