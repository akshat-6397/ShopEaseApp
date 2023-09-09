import React from 'react'
import './style.scss';
import { BiShoppingBag } from "react-icons/bi";

const Card = () => {
  return (
    <div className='card'>
        <div className='image'>
            <img alt="cardImage" src="https://i.pinimg.com/originals/31/61/e3/3161e377210fd32b4584a080dcdd3e82.jpg"/>
        </div>
        <div className='card-bottom'>
            <h4>Louis Phillipe</h4>
            <div className='card-label'>
                <div className='strike-text'>
                    <span>Rs.1627</span>
                    <s>Rs.2200</s>
                </div>
                <label>(26% OFF)</label>
            </div>
            <div className='button'>
                <span><BiShoppingBag style={{marginRight: '10'}}/>ADD TO BAG</span>
            </div>
        </div>
    </div>
  )
}

export default Card