const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = 're-educate';
const url = 'mongodb://localhost:27017';
const mongoOptions = {useNewUrlParser: true};

const state = {
    db: null
};

//cb = callback
//if there is a database connection, call the callback
//if there isnt a database connection, use the mongoclient to connect to the database
//check if there is an error, if there is an error, pass back to the callback
//if there is no error, set state then call the callback
const connect = (cb) => {
    if(state.db) 
        cb();
    else { 
        MongoClient.connect(url,mongoOptions,(err,client) => {
            if(err)
                cb(err);
            else {
                state.db = client.db(dbname);
                cb();
                }
        });
    }
}

//primary key method
//returns an object ID object which is used to query the database using the primary key
const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

//method to get the database
const getDB = () => {
    return state.db; 
}

//expose the functions

module.exports = {getDB, connect, getPrimaryKey};