import React,{useState} from "react"


function Counter() {
     let x = 1;
    const [ num,Setnum] = useState(x)
 

  function addcount() {
   Setnum((e)=>{
     return e + 1
   })
  }

  return (
    <div>
        <h1>{num}</h1>
      <button onClick={addcount}>Add</button>
    </div>
  );
}

export default Counter;