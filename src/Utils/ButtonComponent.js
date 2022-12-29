import React from "react";
import styled from "styled-components";


const Button = ({buttonText, clickHandler=null, toMap = false , address = ''})=>{
    let mapsLink = <a target="_blank" href={"https://www.google.com/maps/place/" +address}>{buttonText}</a>
    return(
       <ButtonContainer>
         <button className="button" onClick={clickHandler}>{toMap ? mapsLink: buttonText}</button>
       </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    button , a{
        width: 100%;
        color: #ffffff;
        text-align: center;
        background-color: #020458;
        font-family: Chela One, sans-serif;
    }
`
export default Button