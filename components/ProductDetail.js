import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaShoppingCart,
  FaRegHeart,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  product01,
  product02,
  product03,
  product05,
  product07,
  product08,
} from "@/assests";
import ReactImageMagnify from "react-image-magnify";

import { CartContext } from "../src/Context/CartContext";
import Breadcrumbs from "./Breadcrumbs";

export default function ProductDetail({ product }) {
  console.log(product)
  const [mainImage, setMainImage] = useState(`https://www.getfromnepal.com/${product.image}`);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const { addProduct, cartProducts, removeProduct } = useContext(CartContext);
  function addToCart() {
    addProduct(product.id);
  }
  function increaseThisProduct(id) {
    addProduct(id);
  }
  function decreaseThisProduct(id) {
    removeProduct(id);
  }
  const breadCrumbs=[
    {name:"Home",url:'/'},
    {name: `${product.pname}...`,url:`/product/${product.id}`},
  ]
  return (
    <>
      <div className="pd-container">
        <div className="product-detail">
          <Breadcrumbs breadCrumbs={breadCrumbs}/>
          <div className="container">
            <div className="row">
              <div className="pro-det-part">
                <div className="image-part">
                  <div className="small-images">
                    <div
                      className="imj"
                      onClick={() => handleImageClick(`https://www.getfromnepal.com/${product.image_3}`)}
                    >
                      <Image
                        src={`https://www.getfromnepal.com/${product.image_3}`}
                        alt={product.pname}
                        width={153}
                        height={153}
                      />
                    </div>
                    <div
                      className="imj"
                      onClick={() => handleImageClick(`https://www.getfromnepal.com/${product.image}`)}
                    >
                      <Image
                        src={`https://www.getfromnepal.com/${product.image}`}
                        alt={product.pname}
                        width={153}
                        height={153}
                      />
                    </div>
                    <div
                      className="imj"
                      onClick={() => handleImageClick(`https://www.getfromnepal.com/${product.image_2}`)}
                    >
                      <Image
                        src={`https://www.getfromnepal.com/${product.image_2}`}
                        alt={product.pname}
                        width={153}
                        height={153}
                      />
                    </div>
                  </div>
                  <div className="main-image">
                    <div className="product-image">
                      
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "",
                            src: (mainImage),
                            width:462,
                            height:490,
                          },
                          largeImage: {
                            src: (mainImage),
                            width: 1200,
                            height: 1200,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="product-detail-part">
                  <div className="product-Details">
                    <h2 className="product-name">{product.pname}</h2>
                    <div className="Rating">
                      <div className="p-Rating">
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                        <i>
                          <FaStar />
                        </i>
                      </div>
                      <a className="reviewLink" href="#">
                        10 Review(s) | Add your review
                      </a>
                    </div>
                    <div>
                      <h3 className="product-price">
                        {`$${product.selling_price}`}
                        <del className="productOldPrice">${product.discounted_price}</del>
                      </h3>
                      <span className="productAvailable">In Stock</span>
                    </div>
                    <p>{product.description}</p>

                    <div className="productOptions">
                      <label>
                        Size
                        <select className="inputSelect">
                          <option value="0">X</option>
                        </select>
                      </label>
                      <label>
                        Color
                        <select className="inputSelect">
                          <option value="0">Red</option>
                        </select>
                      </label>
                    </div>

                    <div className="addToCart">
                      <div className="qty-label">
                        Qty
                        <div className="input-number">
                          <input
                            type="number"
                            value={
                              cartProducts.filter((id) => id === product.id)
                                .length > 0
                                ? cartProducts.filter((id) => id === product.id)
                                    .length
                                : 0
                            }
                          />
                          <span
                            className="qty-up"
                            onClick={() => increaseThisProduct(product.id)}
                          >
                            +
                          </span>
                          <span
                            className="qty-down"
                            onClick={() => decreaseThisProduct(product.id)}
                          >
                            -
                          </span>
                        </div>
                      </div>
                      <button className="addToCartBtn" onClick={addToCart}>
                        <i>
                          <FaShoppingCart />
                        </i>
                        add to cart
                      </button>
                    </div>

                    <ul className="productBtns">
                      <li>
                        <a href="#">
                          <i>
                            <FaRegHeart />
                          </i>{" "}
                          add to wishlist
                        </a>
                      </li>
                    </ul>

                    <ul className="productLinks">
                      <li>Category:</li>
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                    </ul>

                    <ul className="productLinks">
                      <li>Share:</li>
                      <li>
                        <a href="#">
                          <i>
                            <FaFacebook />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaLinkedin />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div id="product-tab">
                  <ul className="tab-nav">
                    <li className="active">
                      <a data-toggle="tab" href="#tab1">
                        Description
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2">
                        Details
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab3">
                        Reviews (3)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="col-md-12">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <h3 className="title">Related Products</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
