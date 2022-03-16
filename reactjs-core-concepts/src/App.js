import logo from './logo.svg';
import './App.css';

const number = 555;
const singer={name:'maha',age:22};
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
      
    </div>
  );
}
function Person() {
  return (
    <div className="person">
      <h1>Sakib  AL Hasan</h1>
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
