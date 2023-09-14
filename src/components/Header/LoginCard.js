import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

const LoginCard = (props) => {
  return (
    <div className="login-card">
        <h3>Welcome</h3>
        <span>To access account and manage orders</span>
        <div className='button'><Link to="/login"><button onClick={() => props.setIslogin(false)}>LOGIN / SIGNUP</button></Link></div>
    </div>
  )
}

export default LoginCard