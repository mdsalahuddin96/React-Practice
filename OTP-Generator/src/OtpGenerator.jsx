import { useEffect,useState } from "react";


export const OTPGenerator = () => {
  const [otp,setOtp]=useState(null)
  const [timer,setTimer]=useState(null)
  useEffect(()=>{
    if(timer===0||timer===null){
      return;
    }
    const id=setTimeout(()=>{
      setTimer(timer-1)
    },1000)
    return ()=>clearTimeout(id)
  },[timer])

  const generateOtp=()=>{
    const otp=Math.floor(100000 + Math.random() * 900000);
    setOtp(otp)
    setTimer(5)
  }

  return(
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp!==null?otp:"Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="polite">{timer>0&&`Expires in: ${timer} seconds`}{timer===0&&'OTP expired. Click the button to generate a new OTP.'}</p>
      <button id='generate-otp-button' onClick={generateOtp} disabled={timer>0?true:false}>Generate OTP</button>
    </div>
  )

}; 