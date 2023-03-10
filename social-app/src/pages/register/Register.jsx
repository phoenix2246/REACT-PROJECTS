import React from 'react'
import './register.css'

export const Register = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">WMA Social</h3>
                <span className="loginDesc">Connect with firends and the world around you on WMA Social</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input type="text"  placeholder='Username' className="loginInput" />

                    <input type="text"  placeholder='Email' className="loginInput" />
                    <input type="text"  placeholder='Password' className="loginInput" />
                    <input type="text"  placeholder='Password Again' className="loginInput" />

                    <button className="loginBtn">Sign Up</button>
                    
                    <button className="registerBtn">Log Into your account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
