import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import {
  FaStar,
  FaEye,
  FaShoppingCart,
  FaRegHeart,
  FaExchangeAlt,
  FaArrowCircleRight,FaTh,FaList
} from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs";

const Store = ({ category, products }) => {
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <div className="section">
        <div className="container">
          {/* <Breadcrumbs/> */}
          <div className="row">
            <div className="content">
              <div className="left-side">
                <div className="aside">
                  <h3 className="aside-title">Categories</h3>
                  {category.map((category) => (
                    <div className="checkbox-filter" key={category.id}>
                      <div className="input-checkbox">
                        <input type="checkbox" id="category-1" />
                        <label htmlFor="category-1">
                          <span></span>
                          {category}
                          <small>({category.length})</small>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="aside">
                  <h3 className="aside-title">Price</h3>
                  <div className="qtylabel">
                    <div className="input-number">
                      <input type="number" value="" />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                    <span>-</span>
                    <div className="input-number">
                      <input type="number" value="" />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                  </div>
                  <div className="price-filter">
                    <Slider
                      className="price_slider"
                      getAriaLabel={() => "Price Range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={10000}
                    />
                  </div>
                </div>
                <div className="aside">
                  <h3 className="aside-title">Brand</h3>
                  {category.map((category) => (
                    <div className="checkbox-filter" key={category.id}>
                      <div className="input-checkbox">
                        <input type="checkbox" id="category-1" />
                        <label htmlFor="category-1">
                          <span></span>
                          {category}
                          <small>({category.length})</small>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="aside">
                  <h3 className="aside-title">Top selling</h3>
                  {products.map((product) => (
                    <div className="product-widget" key={product.id}>
                      <div className="product-img">
                        <Image
                          src={product.image}
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                          <a href="#">{product.title}</a>
                        </h3>
                        <h4 className="product-price">
                          {product.price}{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="right-side">
                <div className="store-filter clearfix">
                  <div className="store-sort">
                    <label>
                      Sort By:
                      <select className="input-select">
                        <option value="0">Popular</option>
                        <option value="1">Position</option>
                      </select>
                    </label>

                    <label>
                      Show:
                      <select className="input-select">
                        <option value="0">20</option>
                        <option value="1">50</option>
                      </select>
                    </label>
                  </div>
                  <ul className="store-grid">
                    <li className="active">
                      <i><FaTh/></i>
                    </li>
                    <li>
                      <a href="#">
                        <i><FaList/></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-row">
                  {products.map((product) => (
                    <div className="product-grid" key={product.id}>
                      <div className="product">
                        <div className="product-img">
                          <Image
                            src={product.image}
                            alt=""
                            width={262}
                            height={262}
                          />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h3 className="product-name">
                            <a href="#">{product.title}</a>
                          </h3>
                          <h4 className="product-price">
                            {product.price}{" "}
                            <del className="product-old-price">$990.00</del>
                          </h4>
                          <div className="product-rating">
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
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <i>
                                <FaRegHeart />
                              </i>
                              <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                              <i>
                                <FaExchangeAlt />
                              </i>
                              <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                              <i>
                                <FaEye />
                              </i>
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <i>
                              <FaShoppingCart />
                            </i>
                            add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="store-filter clearfix">
							<span className="store-qty">Showing 20-100 products</span>
							<ul className="store-pagination">
								<li className="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i ><FaArrowCircleRight/></i></a></li>
							</ul>
						</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
