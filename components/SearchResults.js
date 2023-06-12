import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  FaStar,
  FaRegHeart,
  FaExchangeAlt,
  FaEye,
  FaShoppingCart,
} from "react-icons/fa";
import { CartContext } from "../src/Context/CartContext";
import Image from "next/image";

const SearchResults = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (q) {
      const query = decodeURIComponent(q);
      setSearchQuery(query);
      fetch(`https://www.getfromnepal.com/productapi`)
        .then((response) => response.json())
        .then((data) => {
          const filteredResults = data.filter((product) =>
            product.pname.toLowerCase().includes(query.toLowerCase())
          );
          setSearchResults(filteredResults);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    }
  }, [q]);

  const { addProduct } = useContext(CartContext);

  function addToCart(productId) {
    addProduct(productId);
  }

  return (
    <div className="search-results">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Search Results for &quot;{searchQuery}&quot;</h2>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <div className="product-grid" key={result.id}>
                  <div className="product">
                    <div className="product-img">
                      <Image
                        src={`https://www.getfromnepal.com/${result.image}`}
                        alt={result.pname}
                        width={262}
                        height={262}
                      />
                      {/* <div className="product-label">
                        <span className="sale">-30%</span>
                        <span className="new">NEW</span>
                      </div> */}
                    </div>
                    <div className="product-body">
                      <p className="product-category">{result.category}</p>
                      <h3 className="product-name">
                        <a href="#">{result.pname}</a>
                      </h3>
                      <h4 className="product-price">
                        {result.selling_price}
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
                      <button
                        onClick={() => addToCart(result.id)}
                        className="add-to-cart-btn"
                      >
                        <i>
                          <FaShoppingCart />
                        </i>
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <div>No products found.</div>
          )}
        </>
      )}
      <style jsx>{`
        .search-results {
          padding: 20px;
        }
        h2 {
          margin-bottom: 10px;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default SearchResults;
