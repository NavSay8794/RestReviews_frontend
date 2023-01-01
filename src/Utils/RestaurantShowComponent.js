import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Review from "../components/ReviewComponent";
import Button from "./ButtonComponent";

const RestaurantDetail = ({ restaurant }) => {
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
          <Button buttonText="Add Review" />
        </Link>
      </div>
      <div className="reviewsect">
        <p>Reviews</p>
        <div className="review">
          {restaurant.reviews.length !== 0 ? (
            restaurant.reviews.map((review) => {
              return (<Review review={review}  />);
            })
          ) : (
            <div>
              <p
                style={{
                  fontFamily: "Chela One, sans-serif",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                The Restaurant Has No Reviews Yet...
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50vw;
  border-radius: 10px;
  margin: 0.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: white;

  .namesect {
    display: flex;
    height: 20%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
    p {
      height: 100%;
      margin-top: 8px;
      margin-bottom: 3px;
      font-weight: bold;
      font-family: Chela One, sans-serif;
      font-size: 3rem;
      text-align: center;
    }
  }
  .cuisinesect {
    display: flex;
    height: 15%;
    padding: 10px;
    align-items: center;
    p {
      height: 100%;
      margin-top: 8px;
      margin-bottom: 3px;
      font-family: Chela One, sans-serif;
      font-size: 1.5rem;
    }
  }
  .addresssect {
    display: flex;
    height: 15%;
    padding: 10px;
    align-items: center;
    p {
      height: 100%;
      margin-top: 8px;
      margin-bottom: 3px;
      font-family: Chela One, sans-serif;
      font-size: 1.5rem;
    }
  }
  .buttonsect {
    display: flex;
    height: 8%;
    width: 100%;
    justify-content: center;
    align-items: center;
    .button {
      height: 100%;
    }
  }

  .reviewsect {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 23%;
    padding: 10px;
    align-items: center;
    p {
      height: 100%;
      margin-top: 8px;
      margin-bottom: 3px;
      font-family: Chela One, sans-serif;
      font-size: 1.5rem;
    }
    .review {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
  }
`;

export default RestaurantDetail;
