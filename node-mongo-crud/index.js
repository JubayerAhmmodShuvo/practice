const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
const ObjectId= require("mongodb").ObjectId;

app.use(cors());
app.use(express.json());

//DpDtGJuYbaVAJN8f
//dbuser1

const uri =
  "mongodb+srv://dbuser1:DpDtGJuYbaVAJN8f@cluster0.aimhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const collection = client
      .db("myFirstDatabase")
      .collection("myFirstCollection");
     app.get('/user',async (req, res) =>
    {
      const query = {};
      const cursor = collection.find(query);
      const users = await cursor.toArray();
      res.send(users);
   }) 

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("added new user", newUser);
      const result = await collection.insertOne(newUser);
      res.send(result);
    });
    app.get('/user/:id', async (req, res) => { 
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const user = await collection.findOne(query);
      res.send(user);
    })

    app.put('/user/:id', async (req, res) => { 
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const newUser = req.body;
      const result = await collection.updateOne(query, {$set: newUser});
      res.send(result);
    })

    app.delete("/user/:id", async (req, res) => { 
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await collection.deleteOne(query);

        res.send(result);
    });

  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
