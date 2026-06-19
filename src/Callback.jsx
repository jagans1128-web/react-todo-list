import React, { useState } from 'react'

function Callback() {
    const [num,setnum]= useState(0)
    const [change,setchange]=useState(false)
    const displaynum = ()=>{
        return(
            [num+1,num+2,num+3]
        )
    }
    const theme={
        backgroundColor: change? "white":"black",
        color:change?"black":"white"

    }
  return (
    <div style={theme}>
        <input value={num} type='number' onChange={(e) => setnum(Number(e.target.value))}/>
       
        <button onClick={()=>setchange((curr)=>!curr)}>toodle</button>
        <div>
            <ul>
                {
                    displaynum().map((text,index)=>(
                        <li>{text}</li>
                    ))
                }
                
            </ul>
        </div>
      
    </div>
  )
}

export default Callback
