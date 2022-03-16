import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
 <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [ users , setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name= {user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{border: '4px solid red',margin:'20px',borderRadius:'25px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}



function Counter() {
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={increaseCount}>Incrase</button> <br />
      <button onClick={decreaseCount}>DEcrase</button>
    </div>
  )
}

// function Product(props) {
//   return (
//     <div className="product" >
//       <h3>Name:{props.name} </h3>
//       <p>Price:</p>
//     </div>
//   )
// }

 /*  <div className="App">
     <Product name="laptop" ></Product>
    </div> */
export default App;
