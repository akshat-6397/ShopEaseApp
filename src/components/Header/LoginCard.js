import React from 'react';
import "./style.scss";

const LoginCard = () => {
  return (
    <div className="login-card">
        <h3>Welcome</h3>
        <span>To access account and manage orders</span>
        <div className='button'><button>LOGIN / SIGNUP</button></div>
    </div>
  )
}

export default LoginCard