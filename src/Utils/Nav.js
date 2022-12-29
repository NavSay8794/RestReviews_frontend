import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils,  } from '@fortawesome/free-solid-svg-icons';
import Links from "./Links";



const NavComponent = ({user}) => {
  return (
    <Container>
      <div className="brandContainer">
      <FontAwesomeIcon icon={faUtensils} size="lg" />
        <div className="brand">Restaurant Reviews</div>
      </div>
      <div className="linksContainer">
      <Links page="Restaurants" route="restaurants"/>
        {user ?
          (<Links page="Logout" route="logout"/>)
          :
          (<Links page="Login" route="login" />)
        }
        
        {/* 
        <Links page="Restaurant" route="restaurant"/>
        <Links page="Add Review" route="add-review"/> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
    background-color: #020458;
    color: #eeeeee;
    display:flex;
    align-items: center;
    justify-content:space-between;  
    width: 100vw;
    height 10vh;
    padding: 1rem 2rem;
    position : fixed;
    top:0;
    left: 0;
    z-index:9999;

    .brandContainer{
        font-family: Chela One, sans-serif;
        font-weight: 500;
        font-size: 2rem;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        align-item: center;
        justify-content: space-between;

        .brand{
            padding: 0 10px;
        }
    }

    .linksContainer{
      display: flex;
    }

`;

export default NavComponent;
