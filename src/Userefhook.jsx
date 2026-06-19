
import React, { useRef } from 'react'

function Userefhook() {
  const inputref = useRef()

  const display = () => {
    console.log(inputref.current.value)
  }

  return (
    <div>
      <h1>Input</h1>

      <input
        type="text"
        ref={inputref}
      />

      <button onClick={display}>
        Show Value
      </button>
    </div>
  )
}

export default Userefhook