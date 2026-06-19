import React, { useState, useMemo } from 'react';

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const Appp = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Use useMemo to optimize performance so slowFunction only runs when 'number' changes
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  };

  return (
    <>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>{doubleNumber}
      </div>
    </>
  );
};

export default Appp;