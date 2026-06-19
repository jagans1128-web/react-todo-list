import React, { useReducer, useState } from 'react'

function Usereduce() {
    const[state,dispatch]=useReducer(reducerfun,{count:0})
    const [incerment,setincrement]  = useState(0)
    const add = ()=>{
          dispatch()

    }
    const decrement =()=>{
       setincrement(incerment-1)
    }

  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={decrement}>-</button>
       <h1>{incerment}</h1>

    </div>
  )
}

export default Usereduce
