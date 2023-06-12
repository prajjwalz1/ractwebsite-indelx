import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ShopCategory = ({ products}) => {
  const displayProducts = products.slice(0, 3);
  return (
    <>
      <div className="section">
        <div className="cat-container">
          <div className="row">
            <div className="ShopCategory">
            {displayProducts.map((product) => (
                <div className="shop" key={product.id}>
                  <div className="shop-img">
                    <Image
                      className="imj"
                      src={`https://www.getfromnepal.com/${product.image}`}
                      alt="pro"
                      width={240}
                      height={310}
                    />
                  </div>
                  <div className="shop-body">
                    <h3>
                      {product.category_name}
                      <br />
                      Collection
                    </h3>
                    <Link href="/AllCategories" className="cta-button">
                      Shop now
                      <i>
                        <FaArrowAltCircleRight />
                      </i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
