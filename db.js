const mongo = require('mongodb');
const mongose = require('mongoose');


class database {

    constructor() { }

    async connectToMongo() {
        const url = "mongodb://localhost:27017";

        let client = new mongo.MongoClient(url, {
            userNewUrlParser: true,
            useUnifiedTopology: true,
        });
        let connected = await client.connect();
        this.db = connected.db("324115385");

        console.log("DB connected!");
    }


    getDb() {
        return this.db;
    }

    async connectToMongoose() {
        try {
            const url = "mongodb://localhost:27017/324115385";
            await mongose.set('useCreateIndex', true);
            await mongose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("mongoose connected!");
        }
        catch (err) { console.log('error: ', err); }
    }


}

module.exports = new database();