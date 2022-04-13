require('dotenv').config()
var express = require("express")
var app = express()
var cors = require("cors")
const MongoClient = require('mongodb').MongoClient; // create a MongoClient. by calling it from the require file, call MongoClient class from it. Store it into a constant.
let projectCollection;

// Database connection via MongoDB
const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cloudbootcamp.ngbrg.mongodb.net/SIT725_2022?retryWrites=true&w=majority" // no hyphen is accepted for database name
const client = new MongoClient(uri,{ useNewUrlParser: true })

// test and listen to the port
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// using cors (cross-origin resource sharing)
app.use(cors())

// function creating a collection
const createCollection = (collectionName) => {
    client.connect((err,db) => { // connect to the client
        projectCollection = client.db().collection(collectionName); // save it to our projectCollection
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback); // insert into project
}

// getProjects function. MongoDB query, whatever variable storing in projectCollection, find with no criteria, getting all objects in the collection. Return as an array.
const getProjects =(callback) => {
    projectCollection.find({}).toArray(callback);
}

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

// get API returning statusCode,cardList data and message. statusCode 400 as error, 200 as Success
app.get('/api/projects',(req,res) =>{
    getProjects((err,result) => {
        if(err) {
        res.json({statusCode: 400, message:err})
        }
        else {
        res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

// create a post API start storing data into the collection
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body) 
    var newProject = req.body;
    insertProjects(newProject,(err,result) => { //insertProjects function, a MongoDB request
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})

// define the port as 3000
var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    console.log("press Ctrl + C to quit")
    createCollection("fruits")
})