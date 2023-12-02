import React, { useState } from 'react'
import './style.scss';
import { BiShoppingBag } from "react-icons/bi";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

const  Card = ({data}) => {
    const [favClick, setFavClick] = useState(false);
    const handleFavClick = () => {
        setFavClick(!favClick);
    };
  return (
    <div className='card'>
        <div className='image' style={{position: 'relative'}}>
            {favClick?<AiFillHeart style={{position: 'absolute', right: 10, top: 10, cursor: 'pointer', color: 'red'}} onClick={handleFavClick}/>:<AiOutlineHeart style={{position: 'absolute', right: 10, top: 10, cursor: 'pointer', color: 'red'}} onClick={handleFavClick} />}
            <img alt="cardImage" src={data?.img}/>
            <div style={{position:'absolute', backgroundColor: '#d3d3d3', bottom: 15, left: 10, display: 'flex', justifyContent:'center', alignItems: 'center', padding: '2px 3px'}}><AiFillStar style={{color: '#000000', size: '5px'}} /><span style={{fontSize: '13px', color: '#000000',fontWeight: 'bold' }}>{data?.ratings}|{data?.reviews}</span></div>
        </div>
        <div className='card-bottom'>
            <h4>{data?.brand}</h4>
            <p>{data?.name}</p>
            <div className='card-label'>
                <div className='strike-text'>
                    <span>{data?.discountedPrice}</span>
                    <s style={{opacity: '0.7'}}>{data?.price}</s>
                </div>
                <label>({data?.discountPercentage} OFF)</label>
            </div>
            <div className='button'>
                <span><BiShoppingBag style={{marginRight: '10', fontWeight:'bold'}}/>ADD TO BAG</span>
            </div>
        </div>
    </div>
  )
}

export default Card