import React from "react";
import styled from "styled-components";

const Input = ({ placeHolder="", text="", changeHandler, type, value=null }) => {
  return (
    <InputContainer>
      <input
        type={type}
        className="input"
        placeholder={placeHolder}
        value={value}
        onChange={changeHandler}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 75%;
  input{
    width: 100%;
    padding: 2px 5px 0;
    font-family: Chela One;
  }
`;

export default Input;
