import React from 'react'
import { useReducer } from 'react'
const initialState=0
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1;     
        case 'decrement':
            return state-1;     
        case 'clear':
            return initialState;     
            
    
        default:
            return state;
    }

}
function Counter() {
   const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <>{count}</>
        <button onclick={()=>dispatch('increment')}>Increment</button>
        <button onclick={()=>dispatch('decrement')}>decrement</button>
        <button onclick={()=>dispatch('clear')}>reset</button>
    </div>
  )
}

export default Counter