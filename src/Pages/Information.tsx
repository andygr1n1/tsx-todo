import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

const Resources = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 60px 0;
  
  a:not(:first-child) {
    margin-left: 25px
  }
  
  button {
  margin-left: 25px;
  }
  
  @media(max-width: 700px) {
  flex-wrap: wrap;
  justify-content: center;
  
  a {
  margin: 25px;
  }
  }
`

export const Information: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <h3>Dear friend</h3>
            <p>Thank you very much for supporting me</p>
            <p>You can see resources I use and love, following the links below: </p>
            <Resources>
                <a className="btn" href="https://www.typescriptlang.org/docs/handbook/react.html" target="_blank" rel="noreferrer" >Type Script official page</a>
                <a className="btn" href="https://reactjs.org/" target="_blank" rel="noreferrer" >React official page</a>
                <a className="btn" href="https://styled-components.com/" target="_blank" rel="noreferrer" >Styled Components</a>
                <button className="btn purple darken-4" onClick={() => history.push("/")}>To-do app</button>
            </Resources>
        </>
    )
}
