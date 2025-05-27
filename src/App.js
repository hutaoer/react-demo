import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import { useState, useCallback, useMemo } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const handleClick = () => {
    console.log('handleClick is called')
    // setNum(num + 1);
    setCount(count + 1);
  }
  console.log('App is update')

  const num2 = useMemo(() => {
    console.log('num2 is called')
    return num * 2;
  }, [num])
  const getNum = useMemo(() => {
    console.log('getNum is called')
    let number =  0;
    for(let i=0;i<100000000;++i){
        number = number +i-(number-i*1.1);
    }
    return number;
  }, [num])

  // const getNum = useMemo(() => {
  //   console.log('getNum is called')
  //   return num * 2;
  // }, [num])

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h1>num: {getNum}</h1>
      <Demo1 onClick={handleClick}/>
      <Demo2 num={num2}/>
    </div>
  );
}

export default App;
