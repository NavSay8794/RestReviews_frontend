import React, { useEffect, useState } from "react";
import Wrapper from "../Utils/Containers";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../Utils/FormComponent";

const Login = ({ login , logout}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const idChangeHandler = (e) => {
    setUserId(e.target.value);
  };

  useEffect(()=>{
    logout()
  },[])

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      name: userName,
      id: userId,
    };
    login(user);
    navigate("/restaurants");
  };

  return (
    <Wrapper>
      <FormContainer>
      <Form  userName={userName} userId={userId} nameChangeHandler = {nameChangeHandler} idChangeHandler = {idChangeHandler} userLogin = {userLogin}/>
      </FormContainer>
    </Wrapper>
  );
};

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    border: 1px solid black;
`;

export default Login;

// width: 50%;
//   border-radius: 10px;
//   border: 1px solid black;
//   margin: 0.375rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0.5rem;
//   background-color: white;
