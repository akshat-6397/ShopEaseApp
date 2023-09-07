import React from 'react';
import "./style.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
        <div className='icons'>
            <BsLinkedin style={{height: '30px', width: '30px'}} />
            <BsGithub style={{marginLeft: '30px', height: '30px', width: '30px'}}/>
        </div>
        <div className='text'>
            Made by Akshat Mathur
        </div>
    </div>
  )
}

export default Footer;