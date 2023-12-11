import React, { useState } from 'react'
import './index.css';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step,setStep] =useState(1);
  const[isOpen,setIsOpen] = useState(true);
  //const step=1;
  function eventhandler1(){
    if(step>1)
    setStep((s)=>s-1);
  }

  function eventhandler2(){
    if(step<3)
    setStep((step)=>step+1) 
  }
  return (<div>
    <button className='close' onClick={()=>setIsOpen((is)=>!is)}>&times;</button>
    {isOpen ? 
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step>=1 ? "active" : ""}`}>1</div>
        <div className={`${step>=2 ? "active" : ""}`}>2</div>
        <div className={`${step>=3 ? "active" : ""}`}>3</div>
      </div>
      <div className='message'>
        Step {step}:{messages[step-1]}
      </div>
      <div className='buttons'>
        <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={eventhandler1} >Previous</button>
        <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={eventhandler2}>Next</button>
      </div>
    </div> : "Please try Again later :("
  }
  </div>
  )
}

export default App