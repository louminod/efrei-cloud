const {
    MongoClient
} = require('mongodb');
const express = require('express');
const app = express();

const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || "";


app.get('/', async (req, res) => {
    res.send('Welcome !');
});

app.get('/notes', async (req, res) => {

    MongoClient.connect(MONGO_URL, async function (err, db) {
        if (err) throw err;

        var dbo = db.db("dev");
        dbo.collection("notes").find({}).toArray(function (err, result) {
            if (err) res.send(err);
            res.send(result);
            db.close();
        });
    });
});

app.listen(PORT, async () => {
    console.log('Example app listening on port : ' + PORT)
});