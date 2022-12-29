import React from "react";
import styled from "styled-components";

const Wrapper = (props)=>{
    return(
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    top: 4rem;
    left: 5px;
    width: 100vw;
    background-color: #eeeeee;
`

export default Wrapper