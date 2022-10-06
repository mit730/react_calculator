import React, { useEffect, useState } from 'react';

const App=()=>{

  const[input, setInput] = useState(0);

  
const handleChange=(e)=>{
   setInput(e.target.value)
}

const handleClick=(e)=> { 
 setInput(input + e.target.value);
}
const backSpace=()=>{
  setInput(input.slice(0,-1))
}
const handleCalculate=()=>{
  setInput(eval(input))
}
const handleZero=()=>{
  setInput(0)
}


  return (
     <>
      <h2>Calculator</h2>
       <div className="main">
         <input type="text" value={input} id='result'
          onChange={handleChange}/>

         <div>
           <button className="btn" onClick={handleClick} value='.' >.</button>
           <button className="btn" onClick={handleClick} value='8' >8</button>
           <button className="btn" onClick={handleClick} value='9' >9</button>
           <button className="btn" onClick={handleClick} value='-' >-</button> 
         </div>
         <div>
           <button className="btn" onClick={handleClick} value='4' >4</button>
           <button className="btn" onClick={handleClick} value='5' >5</button>
           <button className="btn" onClick={handleClick} value='6' >6</button>
           <button className="btn" onClick={handleClick} value='+' >+</button> 
         </div>
         <div>
           <button className="btn" onClick={handleClick} value='1' >1</button>
           <button className="btn" onClick={handleClick} value='2' >2</button>
           <button className="btn" onClick={handleClick} value='3' >3</button>
           <button className="btn" onClick={handleClick} value='*' >*</button> 
         </div>
         <div>
           <button className="btn" onClick={backSpace} value='C' >C</button>
           <button className="btn" onClick={handleClick} value='/' >/</button>
           <button className="btn" onClick={handleZero} value='0' >0</button>
           <button className="btn" onClick={handleCalculate} value='=' >=</button> 
         </div>
       </div>
     </>
  )
}

export default App;