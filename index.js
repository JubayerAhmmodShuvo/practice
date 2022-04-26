const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const  jwt= require('jsonwebtoken');

const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());


function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });

  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: "Forbidden" });
    }
    req.user = decoded;
    console.log(decoded);

   });


   
  
  next();
  
}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aimhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const serviceCollection= client.db("genius-car").collection("service");
    const orderCollection= client.db("genius-car").collection("order");

    app.post('/login', (req, res) => {
      const user = req.body;
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1d",
      });
      res.send({ accessToken });

    })
    
    app.get('/service', async (req, res) => { 
      const query = {};
      const cursor = serviceCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/service/:id', async (req, res) => { 
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.send(service);
    })

    app.post('/service', async (req, res) => {
      const service = req.body;
      const result = await serviceCollection.insertOne(service);
      res.send(result);
    })

    app.get('/order', verifyJWT, async (req, res) => { 
      const decodedEmail = req.user.email;
      const email = req.query.email;
      if (email === decodedEmail) {
       
        const query = { email: email };
        const cursor = orderCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      }
      else { 
        res.send({ error: "Forbidden" });
      }
      
     
    
    })

    app.post('/order', async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.send(result);
    })

  }
  finally {
    
  }
}
run().catch(console.dir);



app.get('/', (req, res) => { 
    res.send('Hello World!');
})

app.listen(port, () =>
  console.log(`Listening on port ${port}`));


