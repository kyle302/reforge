// src/db/mongo.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://kyle242:wzGwHnGdaDeTGhqh@cluster0.dwwnngf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db = null;

async function connectToMongo() {
    try {
        await client.connect();
        db = client.db("yourDatabaseName");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
}

function getDb() {
    return db;
}

module.exports = { connectToMongo, getDb };