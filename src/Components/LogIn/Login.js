import React, { useState } from "react";
import {signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
import  auth  from '../LogIn/Setup'
import "./Login.css";
import Logo from '../Assets/Chef.png';


const LogIn = () => {
  const [phoneNumbers, setPhoneNumber] = useState("");
 
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp,setotp]=useState("")
  const [otpView,SetOTPView]=useState("none")
  const [contactView,setcontactView]=useState("")
 
  
  // Use the imported auth instance

  const sendOTP = async() => {
    if(phoneNumbers===''||phoneNumbers.length!==10){
      alert("Enter Valide Mobile Number")
    }else{
      try{
        const phoneNumberWithCountryCode = `+91${phoneNumbers}`;
        const recatpcha= new RecaptchaVerifier(auth,"recaptcha",{})
        const confirmation=signInWithPhoneNumber(auth,phoneNumberWithCountryCode,recatpcha)
       
        setConfirmationResult(confirmation)
      
      }catch(error){
       
        console.error("An error occurred while sending OTP:", error);
      }
     
    }
    
};

  const verifyOTP = async() => {
    console.log(confirmationResult)
    try{

      const data=await confirmationResult.confirm(otp)
      console.log(data)
      setotp("SuccesfullyLogin")
    }catch(error){
      console.log(error)
     
    }
  };

  return (
    <div className="container">

      <div className="LoginFirstLayer">
        <img className="ChefLogo" src={Logo} alt="ChefLogo" />
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
          
          
        </div>
        <button className="OTPSubmit" onClick={verifyOTP}>Verify OTP</button>
      </div>
    </div>
  );
};

export default LogIn;
