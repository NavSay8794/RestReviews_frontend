import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./ButtonComponent";

const Card = ({ restaurant }) => {
  const address = `${restaurant.address.building} ${restaurant.address.street} ${restaurant.address.zipcode} `;
  return (
    <Container>
      <div className="namesect">
        <p>{restaurant.name}</p>
      </div>
      <div className="cuisinesect">
        <p>
          <strong>Cuisine: </strong>{" "}
        </p>{" "}
        <p>{restaurant.cuisine}</p>
      </div>
      <div className="addresssect">
        <p>
          <strong>Address: </strong>
        </p>{" "}
        <p id="address"> {address}</p>
      </div>
      <div className="buttonsect">
        <Link to={`/restaurants/${restaurant._id}`}>
          <Button buttonText="View Reviews" />
        </Link>
        <a
          target="_blank"
          href={"https://www.google.com/maps/place/" + address}
        >
          <Button buttonText="View on Map" />
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: white;

  .namesect {
    display: flex;
    height: 20%;
    flex-direction: row;
    justify-content: center;
    p {
      height: 100%;
      margin-top: 8px;
      margin-bottom: 3px;
      font-weight: bold;
      font-family: Chela One, sans-serif;
      font-size: 1.2rem;
    }
  }
  .cuisinesect {
    display: flex;
    height: 17%;
    p {
      height: 100%;
      padding-left: 10px;
      margin-top: 8px;
      margin-bottom: 3px;
      font-family: Chela One, sans-serif;
    }
  }
  .addresssect {
    display: flex;
    height: 30%;
    p {
      height: 100%;
      padding-left: 10px;
      margin-top: 8px;
      margin-bottom: 3px;
      font-family: Chela One, sans-serif;
    }
  }
  .buttonsect {
    display: flex;
    height: 30%;
    width: 100%;
    justify-content: space-around;
    .button {
      height: 100%;
    }
  }
`;

export default Card;
