
import { useEffect, useState } from "react"


const Useeffecthook = () => {
    const [num ,setnum] = useState(100)
    const [num2,setnum2] = useState(200)
    useEffect(()=>{
        setnum(300)
        console.log("hijagan")
        return(
            ()=>{
                setnum(100)
                console.log("clear")
            }
        )

    } , [num2])

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=> { setnum(num + 1 )}}>firstbutton</button>
      <h1>{num2}</h1>
      <button  onClick={()=> { setnum2(num2 +1)}}>secondbutton</button>

    </div>
  )
}

export default Useeffecthook
