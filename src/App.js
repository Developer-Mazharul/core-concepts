import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Shumi', 'Shima', 'Kajoli', 'Rotna', 'Hasan'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$199.99'},
    {name: 'PDF Reader', price: '$6.9'},
    {name: 'Adobe Premiere Pro', price: '$199.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove={ () => setCount(count -1)}>Decease</button>
      <button onMouseMove={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRedius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = {name: 'Photoshop', price: '$99.99'}
  console.log(name, price)
  return (
    <div style={productStyle}>
        <h2>{name}</h2>
        <h5>{price}</h5>
        <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{border: '2px solid gold', width: '400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Proffession: {props.job}</p>
    </div>
  )
}

export default App;
