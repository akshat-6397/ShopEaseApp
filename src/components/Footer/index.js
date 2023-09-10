import React from 'react';
import "./style.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
        <div className='icons'>
            <BsLinkedin style={{height: '30px', width: '30px'}} />
            <BsGithub style={{marginLeft: '30px', height: '30px', width: '30px'}}/>
        </div>
        <div className='text'>
            Made with <AiFillHeart style={{ height: "18px", width: "18px", marginLeft: '3px', marginRight: '3px', color: 'red'}} /> by Akshat Mathur
        </div>
    </div>
  )
}

export default Footer;