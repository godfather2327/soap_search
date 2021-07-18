const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');
let se;
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors());


const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const [page] = await browser.pages();

    await page.goto(`https://soap2day.ac/`);

    console.log(page.url());
    console.log(typeof page.url());

    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    res.header("User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0");
      res.header("Vary","Origin")
    // res.header("Access-Control-Allow-Origin", "https://soap2day.ac")
    next();
  });

//MongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://webbew:mongodbwebbew@api.51jhh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices"); 
})

MongoClient.connect(uri, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

app.get('/:search', async (req, res) => {
    se=req.params.search;
    //res.redirect('https://soap2day.ac/search/keyword/'+se);
    res.send({"url":'https://soap2day.ac/search/keyword/'+se});
  })

app.post('/stored',function(req,res){
  console.log(req.body);
  MongoClient.connect(uri, (err, client) => {
    var db =client.db('soap_search')
    db.collection('users').insertOne(req.body,(err,data)=>{
    if(err) return conole.log(err);
    res.send('saved to db'+data)
  })
  })
  
})
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });