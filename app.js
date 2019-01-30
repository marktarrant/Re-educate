const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./db');
const collection = 'student';

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

