const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hx876.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: "Unauthorized Access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: "Forbidden" });
    }
    req.decoded = decoded;
    next();
  });


  }


async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const serviceCollection = client
      .db("doctors_portal")
      .collection("services");
    const bookingCollection = client
      .db("doctors_portal")
      .collection("bookings");
    const usersCollection = client
      .db("doctors_portal")
      .collection("users");

    /**
     * API Naming Convention
     * app.get('/booking)/get all bookings in this collection or get omore than one or more than one or by filter
     * app.get('/booking/:id)/get booking by id
     * app.post('/booking)/create booking
     * app.patch('/booking/:id)/update booking
     * app.delete('/booking/:id)/delete booking
    
     */

    app.get('/booking',verifyJWT, async (req, res) => { 
      const patient = req.query.patient;
      const decodedEmail = req.decoded.email;
      if (patient === decodedEmail) {
        const query = { patient: patient };
        const bookings = await bookingCollection.find(query).toArray();
        res.send(bookings);
      }
      else { 
       return res.status(403).send({ error: "Forbidden" });
      }
      

   

    })

    app.post("/booking", async (req, res) => {
      const booking = req.body;
      const query = {
        treatment: booking.treatment,
        date: booking.date,
        patient: booking.patient,
      };
      const exists = await bookingCollection.findOne(query);
      if (exists) { 
        return res.send({success:false, booking:exists})
      }
      const result = await bookingCollection.insertOne(booking);
      return res.send({success:true, result});
    });

    app.get('/user', verifyJWT, async (req, res) => {
      const users = await usersCollection.find().toArray();
      res.send(users);
    })
     app.get("/admin/:email", async (req, res) => {
       const email = req.params.email;
       const user = await usersCollection.findOne({ email: email });
       const isAdmin = user.role === "admin";
       res.send({ admin: isAdmin });
     });

     app.put("/user/admin/:email", verifyJWT, async (req, res) => {
       const email = req.params.email;
       const requester = req.decoded.email;
       const requesterAccount = await usersCollection.findOne({
         email: requester,
       });
       if (requesterAccount.role === "admin") {
         const filter = { email: email };
         const updateDoc = {
           $set: { role: "admin" },
         };
         const result = await usersCollection.updateOne(filter, updateDoc);
         res.send(result);
       } else {
         res.status(403).send({ message: "forbidden" });
       }
     });

    app.put('/user/:email', async (req, res) => {
      const emial = req.params.email;
      const user = req.body;
      const filter = { email: emial };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      }
      const result = await usersCollection.updateOne(filter, updateDoc, options);
      const token = jwt.sign({ email: emial }, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
       res.send({result,token:token});
      
    })

    app.get("/service", async (req, res) => {
      const query = {};
      const services = await serviceCollection.find(query).toArray();
      res.send(services);
    });

    app.get("/available", async (req, res) => {
      const date = req.query.date;
      //step 1: get all services
      const services = await serviceCollection.find().toArray();
     

      //step 2 : get the bookings for that day
      const query = { date: date };
      const bookings = await bookingCollection.find(query).toArray();

      // step 3: get the bookings for each service
      services.forEach(service => {
        // step: find the bookings for that services
        const serviceBookings = bookings.filter(book => book.treatment === service.name);
        //  step 5: select slot for the service bookings : ['','',]
        const bookedSlots = serviceBookings.map(book => book.slot);
        // step 6: select the available slots for the service
        const availableSlots = service.slots.filter(slot => !bookedSlots.includes(slot));
        // step 7: update the service with the available slots
        service.slots = availableSlots;



      })

      res.send(services);

    })
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Doctor!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
