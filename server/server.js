const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(urlencoded({extended:true}))

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://webbew:mongodbwebbew@api.51jhh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })