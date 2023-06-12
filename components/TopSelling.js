import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const TopSelling = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    let interval;

    // if (autoplay) {
    //   interval = setInterval(() => {
    //     handleNextSlide();
    //   }, 3000);
    // }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <div className="sectiontitle">
      <h4 className="title">Top selling</h4>
      <button className="carousel-control-prev" onClick={handlePrevSlide}>
        <FaAngleRight />
      </button>
      <button className="carousel-control-next" onClick={handleNextSlide}>
        <FaAngleLeft />
      </button>
      <div
        className="topsell-product"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel">
          {visibleProducts.map((product) => (
            <div className="product-widget" key={product.id}>
              <div className="product--img">
                <Image
                  src={`https://www.getfromnepal.com/${product.image}`}
                  alt={product.pname}
                  width={60}
                  height={60}
                />
              </div>
              <div className="product-body">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">
                  <Link href={`/product/${product.id}`} tabIndex="-1">
                    {product.pname}
                  </Link>
                </h3>
                <h4 className="product-price">
                  ${product.selling_price}
                  <del className="product-old-price">{product.discounted_price}</del>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
