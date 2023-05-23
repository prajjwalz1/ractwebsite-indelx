import React from "react";
import { product08, product09, product05 } from "../src/assests";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ShopCategory = () => {
  return (
    <>
      <div className="section">
        <div className="cat-container">
          <div className="row">
            <div className="ShopCategory">
              <div className="shop">
                <div className="shop-img">
                  <Image
                    className="imj"
                    src={product08}
                    alt="pro"
                    width={240}
                    height={310}
                  />
                </div>
                <div className="shop-body">
                  <h3>
                    Laptop
                    <br />
                    Collection
                  </h3>
                  <Link href="#" className="cta-button">
                    Shop now
                    <i>
                      <FaArrowAltCircleRight />
                    </i>
                  </Link>
                </div>
              </div>
              <div className="shop">
                <div className="shop-img">
                  <Image src={product05} alt="pro" width={240} height={310} />
                </div>
                <div className="shop-body">
                  <h3>
                    Accessories
                    <br />
                    Collection
                  </h3>
                  <Link href="#" className="cta-button">
                    Shop now
                    <i>
                      <FaArrowAltCircleRight />
                    </i>
                  </Link>
                </div>
              </div>
              <div className="shop">
                <div className="shop-img">
                  <Image src={product09} alt="pro" width={240} height={310} />
                </div>
                <div className="shop-body">
                  <h3>
                    Cameras
                    <br />
                    Collection
                  </h3>
                  <Link href="#" className="cta-button">
                    Shop now
                    <i>
                      <FaArrowAltCircleRight />
                    </i>
                  </Link>
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
