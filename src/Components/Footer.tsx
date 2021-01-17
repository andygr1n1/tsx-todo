import React from 'react';
import styled from "styled-components";
import In from "../img/in.png"
import fb from "../img/fb.png"
import cat from "../img/cat.png"

const Fblock = styled.footer`
  color: #333;  
  width: 100%;
  margin: 20px 0;   
`
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  color: inherit;
  &:hover {
    color: #01bfa5;
    font-weight: bolder;
    transition: color 0.2s;
  }  
    img {width: 25px; margin: 0 10px}
  }
  
    @media (max-width: 500px) {
    flex-direction: column;
    width: auto;
    margin: 0 auto;           
    a{
    width: 115px;
    margin: 0.5rem;
    justify-content: left;
    }
  }
`

export const Footer: React.FC = () => {
    return (
        <Fblock>
           <Social>
               <a href="https://www.linkedin.com/in/andrew-grini/" target="_blank" rel="noreferrer"><img src={In} alt="in"/>LinkedIn</a>
               <a href="https://github.com/andygr1n1/tsx-todo" target="_blank" rel="noreferrer"><img src={cat} alt="github"/>Github</a>
               <a href="https://www.facebook.com/andygrini/" target="_blank" rel="noreferrer"><img src={fb} alt="fb"/>Facebook</a>
           </Social>
        </Fblock>
    )
}
