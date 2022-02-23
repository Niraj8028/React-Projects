import React, {useState} from 'react';
import "./style.css"

function App() {

  const [count,setCount]= useState(0);
  return (
    <div>
    <h1>Counter</h1>
    <h2>The current count is {count}</h2>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>(count>10 ? "":setCount(count+1))}>Increment</button>
    <button onClick={()=>(setCount(count-1))}>decrement</button>
    </div>
  )
}

export default App;
