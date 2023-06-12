import React, { useState, useContext } from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaEye,
  FaShoppingCart,
  FaRegHeart,
  FaExchangeAlt,
  FaArrowCircleRight,
  FaTh,
  FaList,
  FaArrowCircleLeft,
} from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs";
import { CartContext } from "../src/Context/CartContext";

const Store = ({ products, categories,brands }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("popular");
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filteredProducts = products
    .filter((product) => {
      const isInSelectedCategories =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category_name);
      const isInSelectedBrands =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const isInRange =
        product.selling_price >= priceRange[0] && product.selling_price <= priceRange[1];
      return isInSelectedCategories && isInSelectedBrands && isInRange;
    })
    .sort((a, b) => {
      if (sortBy === "popular") {
        return b.popularity - a.popularity;
      } else if (sortBy === "position") {
        return a.position - b.position;
      } else {
        return 0;
      }
    });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const getCategoryProductCount = (category_name) => {
    return products.filter((product) => product.category_name === category_name).length;
  };

  const getBrandProductCount = (brand) => {
    return products.filter((product) => product.brand === brand).length;
  };

  const { addProduct } = useContext(CartContext);

  function addToCart(productId) {
    addProduct(productId);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="content">
            <div className="left-side">
              <div className="aside">
                <h3 className="aside-title">Categories</h3>
                {categories.map((category_name) => (
                  <div className="checkbox-filter" key={category_name.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category_name)}
                        onChange={() => handleCategoryChange(category_name)}
                      />
                      {category_name} ({getCategoryProductCount(category_name)})
                    </label>
                  </div>
                ))}
              </div>
              <div className="aside">
                <h3 className="aside-title">Price</h3>
                <div className="qtylabel">
                  <div className="input-number">
                    <input
                      type="number"
                      value={priceRange[0] === 0 ? "0" : priceRange[0]}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+/, "");
                        setPriceRange([
                          value === "" ? 0 : Number(value),
                          priceRange[1],
                        ]);
                      }}
                    />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                  <span>-</span>
                  <div className="input-number">
                    <input
                      type="number"
                      value={priceRange[1] === 0 ? "" : priceRange[1]}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+/, "");
                        setPriceRange([
                          priceRange[0],
                          value === "" ? 0 : Number(value),
                        ]);
                      }}
                    />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div>
                <div className="price-filter">
                  <Slider
                    className="price_slider"
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    min={0}
                    step={1}
                    valueLabelDisplay="auto"
                    max={
                      products.length > 0
                        ? Math.max(...products.map((product) => product.selling_price))
                        : 0
                    }
                  />
                </div>
              </div>
              <div className="aside">
                <h3 className="aside-title">Brand</h3>
                {brands.map((brand) => (
                  <div className="checkbox-filter" key={brand.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      {brand} ({getBrandProductCount(brand)})
                    </label>
                  </div>
                ))}
              </div>
              <div className="aside">
                <h3>Top Selling</h3>
                <div className="top-product">
                  {products.slice(0, 5).map((product) => (
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
                        <p className="product-category">{product.category_name}</p>
                        <h3 className="product-name">
                          <Link href={`/product/${product.id}`} tabIndex="-1">
                            {product.pname}
                          </Link>
                        </h3>
                        <h4 className="product-price">
                          {product.selling_price}
                          <del className="product-old-price">${product.discounted_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="store-filter">
                <div className="store-sort">
                  <label>
                    Sort By:
                    <select
                      className="input-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popular">Popular</option>
                      <option value="position">Position</option>
                    </select>
                  </label>

                  <label>
                    Show:
                    <select
                      className="input-select"
                      value={perPage}
                      onChange={(e) => setPerPage(Number(e.target.value))}
                    >
                      <option value="6">6</option>
                      <option value="20">20</option>
                    </select>
                  </label>
                </div>
                <ul className="store-grid">
                  <li className="active">
                    <i>
                      <FaTh />
                    </i>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FaList />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-row">
                {paginatedProducts.map((product, index) => (
                  <div className="product-grid" key={index}>
                    <div className="product">
                      <div className="product-img">
                        <Image
                          src={`https://www.getfromnepal.com/${product.image}`}
                          alt={product.pname}
                          width={262}
                          height={262}
                        />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category_name}</p>
                        <h3 className="product-name">
                          <Link href={`/product/${product.id}`} tabindex="-1">
                            {product.pname}
                          </Link>
                        </h3>
                        <h4 className="product-price">
                          {product.selling_price}
                          <del className="product-old-price">${}</del>
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
                            <Link href={`/product/${product.id}`}>
                              <i>
                                <FaEye />
                              </i>
                            </Link>
                            <span className="tooltipp">quick view</span>
                          </button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button onClick={() => addToCart(product.id)} className="add-to-cart-btn">
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
                <ul className="store-pagination">
                  <li
                    className={`${
                      currentPage === 1 ? "disabled" : ""
                    } store-pagination-item`}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <FaArrowCircleLeft />
                  </li>
                  {Array.from(
                    { length: Math.ceil(filteredProducts.length / perPage) },
                    (_, i) => (
                      <li
                        key={i}
                        className={`${
                          currentPage === i + 1 ? "active" : ""
                        } store-pagination-item`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </li>
                    )
                  )}
                  <li
                    className={`${
                      currentPage ===
                      Math.ceil(filteredProducts.length / perPage)
                        ? "disabled"
                        : ""
                    } store-pagination-item`}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <FaArrowCircleRight />
                  </li>
                </ul>
                <div className="pagiproduct">
                <span className="store-pagination">
                  Showing {paginatedProducts.length} of {""}
                  {filteredProducts.length} products
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
