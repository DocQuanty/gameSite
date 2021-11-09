import "./StarRaiting.scss";
import React, { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.setRating);
  const [hover, setHover] = useState(props.setHover);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
          >
            <span className="star">
              <i class="fas fa-star"></i>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
