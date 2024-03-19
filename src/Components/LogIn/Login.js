import "./Login.css"

import Logo from '../Assets/Chef.png'

import { useState } from "react"

const LogIn=()=>{
  const [phoneNumber,setphoneNumber]=useState("")

  const UpdateContact=(e)=>{
setphoneNumber(e.target.value)
  }
    return(
<div class="container">
      
     
     
          <div className="LoginFirstLayer">
            <img className="ChefLogo" src={Logo} alt="ChefLogo"/>

            <h1 class="header">Login</h1>
          </div>
          <div className="LoginSecondLayer">
          <form>
          <input onChange={UpdateContact} value={phoneNumber} placeholder="Enter Your Contact Number"class="input-field" type="tel" name="mobile" maxlength="10" />
          <h3>OTP</h3>
       
          <input class="otp-input" type="tel" name="otp1" maxlength="1" size="1" />
          <input class="otp-input" type="tel" name="otp2" pattern="[0-9]" maxlength="1" size="1" />
          <input class="otp-input" type="tel" name="otp3" pattern="[0-9]" maxlength="1" size="1" />
          <input class="otp-input" type="tel" name="otp4" pattern="[0-9]" maxlength="1" size="1" />
       

        <button class="OTPSubmit">LogIn</button>
      </form>
      </div>
    </div>
    )
}



export default LogIn