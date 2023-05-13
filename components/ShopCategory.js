import React from "react";
import { product08, product09, product05 } from "../src/assests";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

const ShopCategory = () => {
  return (
    <>
      <div className="section">
        <div className="cat-container">
          <div className="row">
            <div className="ShopCategory">
              <div className="shop">
                <div className="shop-img">
                  <Image className="imj" src={product08} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Laptop
                    <br />
                    Collection
                  </h3>
                  <a href="#" className="cta-btn">
                    Shop now
                    <i>
                      <FaArrowAltCircleRight />
                    </i>
                  </a>
                </div>
              </div>
              <div className="shop">
                <div className="shop-img">
                  <Image src={product05} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Accessories
                    <br />
                    Collection
                  </h3>
                  <a href="#" className="cta-btn">
                    Shop now
                    <i>
                      <FaArrowAltCircleRight />
                    </i>
                  </a>
                </div>
              </div>
              <div className="shop">
                <div className="shop-img">
                  <Image src={product09} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Cameras
                    <br />
                    Collection
                  </h3>
                  <a href="#" className="cta-btn">
                    Shop now
                    <i>
                      <FaArrowAltCircleRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
