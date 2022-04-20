const express = require('express');
const cors=require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World jij!');
})

const users = [
  {id:1, name: 'John', age: 20, email: 'john.doe@gmail.com'},
  {id:2, name: 'Bob', age: 30 , email: 'john.doe@gmail.com'},
  {id:3, name: 'Kate', age: 25, email: 'john.doe@gmail.com'},
  {id:4, name: 'Jack', age: 40, email: 'john.doe@gmail.com'},
  {id:5, name: 'Jill', age: 35, email: 'john.doe@gmail.com'},
  {id:6, name: 'Jill', age: 35, email: 'john.doe@gmail.com'},
  {id:7, name: 'Jill', age: 35, email: 'john.doe@gmail.com'},
  {id:8, name: 'Jill', age: 35, email: 'john.doe@gmail.com'}

];

app.get('/users', (req, res) => { 
  res.send(users);
})

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id == id);
  res.send(user);
})

app.get('/fruits', (req, res) => {
  const fruits = ['apple', 'banana', 'orange', 'pear'];
  res.send(fruits);
})
app.post('/users', (req, res) => {  
  console.log('request',req.body);
  const user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  }
  users.push(user);
  res.send(user);
})

app.get('/fruits/mango/fazle', (req, res) => {
res.send('mango');
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});