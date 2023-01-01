import React, { useEffect, useState } from "react";
import Wrapper from "../Utils/Containers";

import RestaurantDataService from "../services/restaurantService";
import RestaurantDetail from "../Utils/RestaurantShowComponent";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Restaurant = (props) => {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: [],
  };

  const params = useParams();
  const [restaurant, setRestaurant] = useState(initialRestaurantState);

  const fetchRestaurant = async (id) => {
    try {
      const restaurantData = await RestaurantDataService.get(id);
      console.log(restaurantData.data.restaurant);
      setRestaurant(restaurantData.data.restaurant);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRestaurant(params.id);
  }, [params.id]);

  const deleteReview = async (reviewId, index) => {
    try {
      let response = await RestaurantDataService.deleteReview(reviewId);
      setRestaurant((prevState) => {
        prevState.reviews.splice(index, 1);
        return { ...prevState };
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      {
        restaurant ? 
        (
            <DetailContainer>
                <RestaurantDetail restaurant={restaurant}/>
            </DetailContainer>
            
        )
        :
        (
            <div>
                <br />
                <p>
                    No Restaurant Selected
                </p>
            </div>
        )
      }
    </Wrapper>
  );
};

const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px
`


export default Restaurant;
