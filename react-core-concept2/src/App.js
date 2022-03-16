import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
 <div className="App">
    {/* <Counter></Counter> */}
    </div>
  );
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
