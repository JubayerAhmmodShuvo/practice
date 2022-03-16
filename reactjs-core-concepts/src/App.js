import logo from './logo.svg';
import './App.css';

const number = 555;
const singer={name:'maha',age:22};
function App() {
  const nayoks = ['Ruber', 'Bapparaz','Sakib','Jorina','Misir Ali','Anwae']; 
  return (
    <div className="App">
      {
nayoks.map(nayok => <Person name= {nayok}></Person>)
      }
      {/* <Person name={nayoks[0]} ></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2 ]}></Person> */}
      
      <Friend></Friend>
      
    </div>
  );
}
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Profession: Cricketer</p>
    </div>
  )
  
}

function Friend() {
  return (
    <div className="asen">
      <h3>Name : Dulal Chowdhury</h3>
      <p>Job: maramari</p>
    </div>
  )
}

export default App;
