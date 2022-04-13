var express = require("express")
var app = express()

// test and listen to the port
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const cardList = [    
    {
        title: "Orange",
        image: "images/orange_cut.png",
        link: "About Orange",
        description: "An orange is a fruit of various citrus species in the family Rutaceae."
     },
    {
       title: "Lime",
       image: "images/lime_cut.png",
       link: "About Lime",
       description: "A lime is a citrus fruit, which is typically round, green in color and contains acidic juice vesicles."
    },
]

// get API returning statusCode,cardList data and message 
app.get('/api/projects',(req,res) =>{
    res.json({statusCode: 200, data: cardList, message:"Success"})
})

// define the port as 3000
var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    console.log("press Ctrl + C to quit")
})