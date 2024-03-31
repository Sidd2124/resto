import React, { useState } from "react";
import {signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
import  auth  from '../LogIn/Setup'
import "./Login.css";



const LogIn = (props) => {
  const [phoneNumbers, setPhoneNumber] = useState("");
 
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp,setotp]=useState("")
  const [otpView,SetOTPView]=useState("none")
  const [contactView,setcontactView]=useState("")
  const[timer,settimer]=useState(0)
  const[minute,setminute]=useState(0)

  const value=localStorage.getItem("Token")
  console.log(value)
 
  const Clock=()=>{
    const timing = setInterval(() => {
    settimer(prevTime=>{
      if(prevTime===59){
        setminute(prevMinute=>prevMinute+1) 
        if(minute===2){
          clearInterval(timing)
        }
        return 0;
      }
      else{
        return prevTime+1
        
      }
    })
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timing);
  }


 
 

  const sendOTP = async () => {
    if (phoneNumbers === '' || phoneNumbers.length !== 10) {
        alert("Enter Valid Mobile Number");
    } else {
        try {
            const phoneNumberWithCountryCode = `+91${phoneNumbers}`;
            const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phoneNumberWithCountryCode, recaptchaVerifier);
            console.log(confirmation)
            localStorage.setItem("Token","VerifiedUser")
            if(confirmation.confirm){
              
              SetOTPView("")
      setcontactView("none")
      Clock()
            }
            setConfirmationResult(confirmation);
        } catch (error) {
            console.error("An error occurred while sending OTP:", error);
        }
    }
};


const verifyOTP = async () => {
  try {
     
      if (otp.trim() === '') {
          alert("Please enter OTP");
          return;
      }

      if (confirmationResult) {
          const result = await confirmationResult.confirm(otp);
          const {history}=props
          history.push("/Store")
        
          
          console.log("OTP verified successfully", result);

          
      } else {
          console.error("No confirmation result available.");
          alert("Please send OTP first");
      }
  } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Error verifying OTP. Please try again.");
  }
};


  return (
    <div className="container">

      <div className="LoginFirstLayer">
        <img className="ChefLogo" src="https://i.ibb.co/0nT2Cjq/0845c232253239-56766f2d063c9.gif" alt="ChefLogo" />
        <h3 className="Title">IDeal Kitchen Welcome's You</h3>
        <h1 className="header">Login</h1>
     
   
        
   
      </div>
      <div className="LoginSecondLayer" style={{ display: contactView }}>
        <div className="Row">
          <h3>+91</h3>
          <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumbers} placeholder="Enter Your Contact Number" pattern="[0-9]" className="input-field" type="tel" name="mobile" maxLength="10" />
        </div>
        <button className="OTPSubmit" onClick={sendOTP}>Send OTP</button>
        <div id="recaptcha">

        </div>
      </div>
      <div className="OTPContainer" style={{display:otpView}}>
        <h3>Enter Your OTP</h3>
        <div>
          
        <input onChange={(e) => setotp(e.target.value)} style={{backgroundColor:"white"}} value={otp} placeholder="Here you go.." pattern="[0-9]" className="input-field" type="tel" maxLength="6" />
        <p>{minute<=9?`0${minute}`:minute}:{timer<=9?`0${timer}`:timer}</p>
          
        </div>
        <button className="OTPSubmit" onClick={verifyOTP}>Verify OTP</button>
  
      </div>
    </div>
  );
};

export default LogIn;
