import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = ({ page, route = null }) => {
  return (
    <LinkContainer>
      <Link to={`/${route}`} style={{color:"#eeeeee", textDecoration: "none"}} >{page}</Link>
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  font-family: Chela One, sans-serif;
  font-size: 1.2rem;
  padding: 0 10px;
  margin: 0 10px;
`;

export default Links;
