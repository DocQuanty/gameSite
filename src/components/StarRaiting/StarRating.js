import "./StarRaiting.scss";
import React, { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(4);

  function test() {
    setRating(4);
    console.log("click");
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            onClick={test}
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
          >
            <span className="star">
              <i className="fas fa-star"></i>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
