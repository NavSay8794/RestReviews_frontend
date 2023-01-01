import React from "react";
import styled from "styled-components";

const Review = ({review}) => {
  return <ReviewContainer key={review._id}>

    <div className="reviewText">
        <p>{review.text}</p>
    </div>
    <div className="reviewDetails">
        <div className="userDet"><p><strong>User</strong>: {review.name}</p></div>
        <div className="date"><p><strong>Date</strong>: {review.date}</p></div>
    </div>
  </ReviewContainer>;
};

const ReviewContainer = styled.div`
 width: 45%;
 height:200px ;
 display: flex;
 flex-direction: column;
 border: 1px solid black;
 border-radius: 5px;
 padding: 10px;
 margin: 10px;
 .reviewText{
    p{
        font-size: 1.6rem;
        text-align: left;
    }
 }

 .reviewDetails{
    display: flex;
    flex-direction: column;
    .userDet{
        p{
            font-size: 1.3rem;
        }
    }
    .date{
        p{
            font-size: 1.3rem;
        }
    }
 }
`;

export default Review;
