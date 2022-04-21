const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

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
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
