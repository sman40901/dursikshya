import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icon/fa'

const RatingStar = ({ rating }) => {

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i < rating) { // if rating is a whole number then pass a star
      stars.push(<FaStar key={i} />);
    }
    else if (i === Math.ceil(rating)
      && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} />);
    }
    else{
      stars.push(<FaRegStar key={i} />);
    }
  }
  return (
    <>
      {stars}
    </>
  );
};

export default RatingStar;