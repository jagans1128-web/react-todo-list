import htmlimg from "./asscet/html.png"
import jsimg from "./asscet/download (1).jpg"
import cssimg from "./asscet/download.jpg"
import React,{useState} from "react"





function Card(props) {
  const [show , setshow] = useState(false)
    function purchase(){
      
    }

  return (
    <div className="navbar">
      <img src={htmlimg} alt="html" />
      <h1>{props.name}</h1>
      
      <h1>{props.price}</h1>
    
       <button onClick={() => setshow(true)} onDoubleClick={()=>{
        setshow(false)
       }}>Show Input</button>

      {show && <input className="input" />}
    </div>
  );
}



export default Card;
