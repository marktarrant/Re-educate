const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./db');
const collection = 'student';

//serves static html file to user
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//returns the database collection
//return all documents within collection
//toarray, converts to an array 
//if there is an erorr log the error
//if no error console the documents and provide the documents via json
app.get('/getStudent', (req, res) => {
    db.getDB().collection(collection).find({}).toArray((err,documents) => {
        if(err)
            console.log(err);
        else {
            console.log(documents);
            res.json(documents);
        }
    })
});

//update student document method
app.put('/:id', (req,res)=> {
    // Primary Key of student Document we wish to update
    const studentID = req.params.id;
    // Document used to update
    const userInput = req.body; 
    // Find Document By ID and Update
    db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(studentID)}, {$set : {student : userInput.student}}, {returnOriginal : false}, (err, result) => {
        if(err) {
            console.log(err);
            }
        else {
            res.json(result);
        }
    });
});

//server side method for creating a student
//creates a new document relating to the student 
app.post('/', (req,res) => {
    const userInput = req.body;
    //connect to the database collection known as collection which is the student db
    //uses the insertOne method to insert a new collection and creates a primary key relating to that student
    db.getDB().collection(collection).insertOne(userInput, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json({result : result, document : result.ops[0]});
        }
    });
});

//server side delete method
//id is the primary key relating to the document to be deleted
//useful if a student wants to shutdown their account
app.delete('/:id', (req, res) => {
    const studentID = req.params.id; 
    db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(studentID)},(err, result)=>{
        if(err) {
            console.log(err); 
        } else {
            res.json(result);
        }
    });
});

//connect to db
//pass in a callback, if there is an error, console log an error
//terminate application if error 
//if able to connect, listen on port of choice and log connected successully 
db.connect((err) => {
    if(err) {
        console.log("unable to connect to database"); 
        console.log(err);
        process.exit(1); 
    } else {
        app.listen(3000, () => { 
            console.log("connected to database, app listening on port 3000"); 
        });
    }
})

