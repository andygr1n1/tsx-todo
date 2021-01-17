import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Sidenav = styled.ul `
  display: none;
  flex-direction: column;
  position: fixed; 
  width: 420px;
  height: 100%;
  background: #01bfa5;
  box-shadow: 1px 1px 1px 1px #01bfa5;
  z-index: 2;
  color: snow;
   
   li {
    color: inherit;
    margin: 2rem;
    border-bottom: 1px solid snow;
    cursor:pointer;
    
    &:first-child {
     margin-top: 100px;
    }
    
      a {
        color: inherit;
        display: inline-block;
        width: 100%;
        &:hover {
          color: #333;
        }
      }  
      
       &:hover {
         border-bottom: 1px solid #333;
         transition: border-bottom-color 0.3s;
        }    
   }
   
   @media(max-width: 992px) {
      display: flex;
   }
   
   @media(max-width: 550px) {
      width: 100%;
   }
  
`

const SidenavToggle = styled.div`  
  display: none;
  width: 50px;
  height: 100%;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
   color: #333;
   transition: color 0.3s;
  }
  
  @media(max-width: 992px) {
  display: flex;
  }
`

export const Navbar: React.FC = () => {
    const [hiddenToggler, setHiddenToggler] = useState(true);
    const [hidden, setHidden] = useState('hidden');
    useEffect(() => {
    }, [])

    const toggleMenu = () => {
        console.log('click')
        setHiddenToggler(!hiddenToggler);
        hiddenToggler ? setHidden("visible") : setHidden('hidden');
    }

    return  (
        <>
            <nav>
                <div className="nav-wrapper teal accent-4">
                    <NavLink to="/" className="brand-logo center">TSX</NavLink>
                    <SidenavToggle onClick={toggleMenu}><i className="material-icons">menu</i></SidenavToggle>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink className="a" to="/">To-do app</NavLink></li>
                        <li><NavLink className="a" to="/information" >Information</NavLink></li>
                    </ul>
                </div>
            </nav>

            <Sidenav  className={hidden} >
                <li><NavLink onClick={toggleMenu} to="/">To-do list</NavLink></li>
                <li><NavLink onClick={toggleMenu} to="/information">Information</NavLink></li>
            </Sidenav>
        </>
    )
}
