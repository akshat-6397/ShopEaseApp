import React from 'react';
import { styled } from 'styled-components';
import { FaChildren } from "react-icons/fa6";
import { FaFemale, FaMale } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-weight: 600;
  margin: 0;
  cursor: pointer;

  li {
    display: flex;
    align-items: center;
    padding: 18px 30px;
    color: #000000
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    ${'' /* border: 1px solid black; */}
    background: linear-gradient(to right, #00b4db, #0083b0);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)':'translateX(-110%)'};
    top: 0;
    ${'' /* right: 0; */}
    height: 50vh;
    width: 250px;
    padding: 0;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li{
      margin: auto;
      display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }
`;

const LeftSection = ({open}) => {

    return (
        <Ul open={open}>
            <Link to="/product"><li><FaMale style={{height: '20px', width: '20px'}}/>Men</li></Link>
            <Link to="/product"><li><FaFemale style={{height: '20px', width: '20px'}}/>Women</li></Link>
            <Link to="/product"><li><FaChildren style={{height: '25px', width: '25px', marginRight: '3px'}}/>Kids</li></Link>
        </Ul>
    );
};

export default LeftSection;