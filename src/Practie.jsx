import React, { useState } from 'react'

function Practie() {
    const [inputdata, setinputdata] = useState()
    const [listdisplay, setlistdisplay] = useState([])
    const userinput = () => {
        if (inputdata.trim() == "") return;
        setlistdisplay((prev) => [...prev, inputdata])
       setinputdata("")

    }
    const listdelete = (indexof) => {
        setlistdisplay((prev) => prev.filter((text, index) => index !== indexof))

    }
    return (
        <div>
            <div style={{
                maxWidth: "500px",
                margin: "50px auto",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
            }}> 
                <div style={{  display: "flex",
      gap: "10px",
      marginBottom: "20px",}}>
                <input value={inputdata} style={{  flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px", }} onChange={(e) => setinputdata(e.target.value)} />
                </div>
                <button onClick={userinput} style={{
                    padding: "10px 20px",
                    backgroundColor: "#409eff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }} >add</button>
                <div>
                    <ul style={{  listStyle: "none", padding: 0,}}>
                        {listdisplay.map((text, index) => (
                            <li key={index} onClick={() => listdelete(index)}
                                style={{      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
                                


                                }} >{text}<span><button style={{
                                    padding: "5px 10px",
                                    backgroundColor: "#f56c6c",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}>delete</button></span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Practie
