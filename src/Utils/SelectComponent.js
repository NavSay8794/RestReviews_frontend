import React from "react";
import styled from "styled-components";

const Select = ({ cuisines , changeHandler }) => {
  console.log(Array.isArray(cuisines));
  return (
    <SelectCotainer>
      <select onChange={changeHandler}>
        {cuisines.map((cuisine, index) => {
          return <option key={index} value={cuisine}><span>{cuisine.substr(0, 20)}</span></option>;
        })}
      </select>
    </SelectCotainer>
  );
};

const SelectCotainer = styled.div`
  width: 75%;
  select{
    width: 100%;
    height: 100%;
  }
`;
export default Select;
