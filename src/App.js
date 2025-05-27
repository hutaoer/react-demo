import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import { useState, useCallback, useMemo } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const handleClick = () => {
    console.log('handleClick is called')
    setNum(2);
    setCount(count + 1);
  }
  console.log('App is update')
  const handleClick2 = useCallback(() => {
    console.log('handleClick2 is called')
    // setCount(count - 1);
  }, [num])

  const num2 = useMemo(() => {
    console.log('num2 is called')
    return num * 2;
  }, [num])
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h1>num: {num2}</h1>
      <Demo1 onClick={handleClick}/>
      <Demo2 num={num2}/>
    </div>
  );
}

export default App;
