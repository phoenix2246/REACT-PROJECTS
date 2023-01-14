import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">WMA Social</h3>
                <span className="loginDesc">Connect with firends and the world around you on WMA Social</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text"  placeholder='Email' className="loginInput" />
                    <input type="text"  placeholder='Password' className="loginInput" />
                    <button className="loginBtn">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="registerBtn">Register</button>

                </div>
            </div>
        </div>
    </div>
  )
}
