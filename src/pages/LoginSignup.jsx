import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='enter Your Email' />
          <input type="password"placeholder='Enter Password' />
        </div>
        <button>Continue</button>
      
      <p className='loginsignup-login'>
        Already have account? <span>Login here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By clicking, i agree to term of use & privacy policy.</p>
      </div>
      </div>
    </div>
  )
}

export default LoginSignup
