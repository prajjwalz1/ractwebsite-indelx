import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rate }) => {
  return (
    <div className="rating">
      <span className="star">
        {rate >= 1 ? (
          <FaStar className="rating-star" />
        ) : rate >= 0.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {rate >= 2 ? (
          <FaStar className="rating-star" />
        ) : rate >= 1.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {rate >= 3 ? (
          <FaStar className="rating-star" />
        ) : rate >= 2.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {rate >= 4 ? (
          <FaStar className="rating-star" />
        ) : rate >= 3.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
      <span className="star">
        {rate >= 5 ? (
          <FaStar className="rating-star" />
        ) : rate >= 4.5 ? (
          <FaStarHalfAlt className="rating-star" />
        ) : (
          <FaRegStar className="rating-star" />
        )}
      </span>
    </div>
  );
};

export default Rating;
