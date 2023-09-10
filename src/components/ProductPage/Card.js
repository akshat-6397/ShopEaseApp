import React, { useState } from 'react'
import './style.scss';
import { BiShoppingBag } from "react-icons/bi";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

const Card = () => {
    const [favClick, setFavClick] = useState(false);
    const handleFavClick = () => {
        setFavClick(!favClick);
    };
  return (
    <div className='card'>
        <div className='image' style={{position: 'relative'}}>
            {favClick?<AiFillHeart style={{position: 'absolute', right: 10, top: 10, cursor: 'pointer', color: '#0083b0'}} onClick={handleFavClick}/>:<AiOutlineHeart style={{position: 'absolute', right: 10, top: 10, cursor: 'pointer', color: '#0083b0'}} onClick={handleFavClick} />}
            <img alt="cardImage" src="https://i.pinimg.com/originals/31/61/e3/3161e377210fd32b4584a080dcdd3e82.jpg"/>
            <div style={{position:'absolute', backgroundColor: '#ffffff', bottom: 15, left: 10, display: 'flex', justifyContent:'center', alignItems: 'center', padding: '2px 3px'}}><AiFillStar style={{color: '#0083b0', size: '5px'}} /><span style={{fontSize: '13px', color: '#0083b0',fontWeight: 'bold' }}>4.4|230</span></div>
        </div>
        <div className='card-bottom'>
            <h4>Louis Phillipe</h4>
            <div className='card-label'>
                <div className='strike-text'>
                    <span>Rs.1627</span>
                    <s style={{opacity: '0.7'}}>Rs.2200</s>
                </div>
                <label>(26% OFF)</label>
            </div>
            <div className='button'>
                <span><BiShoppingBag style={{marginRight: '10', fontWeight:'bold'}}/>ADD TO BAG</span>
            </div>
        </div>
    </div>
  )
}

export default Card