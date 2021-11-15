import "./StarRaiting.scss";

const StarRating = (props) => {
  const rating = props.rating;
  const hover = props.currentRating;

  const RatingLayout = (
    <div className="star-rating">
      {[...Array(rating)].map((star, index) => {
        index += 1;
        return (
          <button
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
  return (
    <div className="star-rating-wrapper">
      {RatingLayout}
      {props.currentRating}
    </div>
  );
};

export default StarRating;
