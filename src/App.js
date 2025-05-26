import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log('handleClick is called')
    setCount(count + 1);
  }
  console.log('App is update')
  
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <Demo1 onClick={handleClick}/>
      <Demo2 name={count}/>
    </div>
  );
}

export default App;
