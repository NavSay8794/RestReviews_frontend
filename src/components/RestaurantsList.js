import React, { useState, useEffect } from "react";
import Wrapper from "../Utils/Containers";

import RestaurantDataService from "../services/restaurantService";
import styled from "styled-components";
import Input from "../Utils/InputComponent";
import Select from "../Utils/SelectComponent";
import Button from "../Utils/ButtonComponent";
import Card from "../Utils/CardComponent";

const RestaurantList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const [cuisines, setCuisines] = useState("All Cuisines");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  }, []);

  const onChangeSearchName = (e) => {
    const name = e.target.value;
    setSearchName(name);
  };

  const onChangeSearchZip = (e) => {
    const zipcode = e.target.value;
    setSearchZip(zipcode);
  };

  const onChangeSearchCuisines = (e) => {
    const cuisine = e.target.value;
    setSearchCuisine(cuisine);
  };

  const retrieveRestaurants = async () => {
    try {
      let response = await RestaurantDataService.getAll();
      console.log(response.data);
      setRestaurants(response.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveCuisines = async () => {
    try {
      let response = await RestaurantDataService.getCuisines();
      console.log(response.data);

      setCuisines(["All Cuisines"].concat(response.data.cuisines));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  const refreshList = () => {
    retrieveRestaurants();
  };

  const find = async (query, by) => {
    try {
      let response = await RestaurantDataService.find(query, by);
      console.log(response.data);
      setRestaurants(response.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByZip = () => {
    find(searchZip, "zipcode");
  };

  const findByCuisine = () => {
    if (searchCuisine === "All Cuisines") {
      refreshList();
    } else {
      find(searchCuisine, "cuisine");
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <Container>
          <div className="searchContainer">
            <div className="nameField">
              <Input
                type="text"
                placeHolder="Search By Name"
                text={searchName}
                changeHandler={onChangeSearchName}
              />
              <div style={{ width: "25%" }}>
                <Button buttonText="Search" clickHandler={findByName}/>
              </div>
            </div>
            <div className="zipField">
              <Input
                type="text"
                placeHolder="Search By Zipcode"
                text={searchZip}
                changeHandler={onChangeSearchZip}
              />
              <div style={{ width: "25%" }}>
                <Button buttonText="Search" clickHandler={findByZip}/>
              </div>
            </div>
            <div className="cuisineField">
              <Select
                cuisines={cuisines}
                changeHandler={onChangeSearchCuisines}
              />
              <div style={{ width: "25%" , borderRadius: "10px" }}>
                <Button buttonText="Search" clickHandler={findByCuisine} />
              </div>
            </div>
          </div>

          <div className="viewContainer">
            {restaurants.map((restaurant) => {
              return <Card key={restaurant._id} restaurant={restaurant} />;
            })}
          </div>
        </Container>
      )}
    </Wrapper>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .searchContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.5rem 3.5rem;
    align-items: center;

    .nameField {
      display: flex;
      width: 25%;
    }

    .zipField {
      display: flex;
      width: 25%;
    }

    .cuisineField {
      display: flex;
      width: 25%;
    }
  }

  .viewContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.5rem 3.5rem;
    align-items: center;
  }
`;

export default RestaurantList;
