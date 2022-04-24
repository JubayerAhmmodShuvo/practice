const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mrk3z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try { 
    await client.connect();
    const productCollection= client.db("emajohn").collection("product");

    app.get('/product', async (req, res) => {
      const page = parseInt(req.query.page);
      const size=parseInt(req.query.size);
      const query = {};
      const cursor = productCollection.find(query);
      let products;
      if (page|| size) {
        products = await cursor.skip(page*size).limit(size).toArray();
      }
      else {
              products = await cursor.toArray();

      }
      res.send(products);

     
    });

     app.get("/productC", async (req, res) => {
     
       const count = await productCollection.estimatedDocumentCount();
       res.send({ count });
      
     });
    
     app.post('/productB', async (req, res) => {
      const keys = req.body;
      const ids = keys.map(id => (id));
      const query = { _id: { $in: ids } };
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);

    }); 


  }
  finally { }

}
 run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('John is running and waiting for ema!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
