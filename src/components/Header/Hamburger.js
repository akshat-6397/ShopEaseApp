import React, { useState } from 'react';
import LeftSection from './LeftSection';
import { styled } from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 16px;
  margin-left: 10px;
  display: flex;
  justifycontent: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 1.5rem;
    margin-top: 5px;
    height: 2px;
    background-color: ${({ open }) => (open ? "black" : "#000000")};
    border-radius: 10px;
    transform-origin: 2px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
    @media (min-width: 768px){
        display: none;
    }
  }
`;

const Hamburger = () => {
    const[open, setOpen] = useState(false);
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <LeftSection open={open}/>
        </>
    );
};

export default Hamburger;