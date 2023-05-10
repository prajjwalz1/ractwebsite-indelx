import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  return (
    <div className="rating">
      <span className="star">
        {value >= 1 ? (
          <FaStar className="rating-star" />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {value >= 2 ? (
          <FaStar className="rating-star" />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {value >= 3 ? (
          <FaStar className="rating-star" />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {value >= 4 ? (
          <FaStar className="rating-star" />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {value >= 5 ? (
          <FaStar className="rating-star" />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
    </div>
  );
};

export default Rating;
