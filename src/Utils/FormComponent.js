import React from "react";
import styled from "styled-components";
import Button from "./ButtonComponent";
import Input from "../Utils/InputComponent";

const Form = ({
  nameChangeHandler,
  idChangeHandler,
  userLogin,
  userName,
  userId,
}) => {
  return (
    <Container>
      <form onSubmit={userLogin}>
        <div className="nameInput">
          <label htmlFor="username">User Name : </label>
          <Input
            placeHolder="Enter User Name"
            value={userName}
            type="text"
            changeHandler={nameChangeHandler}
          />
        </div>
        <div className="idInput">
          <label htmlFor="userid">User Id : </label>
          <Input
            placeHolder="Enter User Id"
            value={userId}
            type="text"
            changeHandler={idChangeHandler}
          />
        </div>

        <div className="buttonsect">
          <Button buttonText="Submit" />
        </div>
      </form>
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

  form {
    width: 100%;
    padding: 20px;
    .nameInput,
    .idInput {
      width: 100%;
      display: flex;
      margin: 20px 0;
      label {
        flex: 2;
      }
      input {
        flex: 3;
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
  }
`;

export default Form;
