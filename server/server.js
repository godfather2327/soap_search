const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');
let se;
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors());

app.all('/*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Origin", "https://soap2day.ac")
    next();
  });

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://webbew:mongodbwebbew@api.51jhh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

MongoClient.connect(uri, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

app.get('/:search', async (req, res) => {
    se=req.params.search;
    res.redirect('https://soap2day.ac/search/keyword/'+se);
  })

  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })