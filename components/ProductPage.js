import React, { useContext } from "react";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import {
  FaEye,
  FaExchangeAlt,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";

import { CartContext } from "../src/Context/CartContext";
function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  function addToCart() {
    addProduct(product.id);
  }

  return (
    <>
      <div className="container-p">
        <div className="product">
          <div className="product-img">
            <Image
              src={product.image}
              alt={product.title}
              width={260}
              height={260}
            />
          </div>

          <div className="product-body">
            <p className="product-category">{product.category}</p>
            <h3 className="product-name">
              <Link href={`/product/${product.id}`} tabindex="-1">
                {product.title}
              </Link>
            </h3>
            <h4 className="product-price">
              {product.price}
              <del className="product-old-price">{product.price}</del>
            </h4>
            <div className="product-rating">
              <Rating rate={product.rating} />
            </div>
            <div className="product-btns">
              <button className="add-to-wishlist" tabindex="-1">
                <i>
                  <FaRegHeart />
                </i>
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare" tabindex="-1">
                <i>
                  <FaExchangeAlt />
                </i>
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view" tabindex="-1">
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
            <button
              onClick={addToCart}
              className="add-to-cart-btn"
              tabindex="-1"
            >
              <i>
                <FaShoppingCart />
              </i>
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
