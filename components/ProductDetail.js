import React, { useContext } from "react";
import Image from "next/image";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../src/Context/CartContext";

export default function ProductDetail({ product }) {
  const { addProduct,cartProducts,removeProduct } = useContext(CartContext);
  function addToCart() {
    addProduct(product.id);
  }
  function increaseThisProduct(id) {
    addProduct(id);
  }
  function decreaseThisProduct(id) {
    removeProduct(id);
  }
  return (
    <>
      <div className="container">
        <div className="imagepart">
          {/* {product && ( */}
          <div className="img">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={400}
            />
          </div>
          {/* )} */}
        </div>
        <div className="detailpart">
          {/* {product && ( */}
          <>
            <div className="title">
              <h2>{product.title}</h2>
            </div>
            <div className="price">
              <span>{`$${product.price}`}</span>
            </div>
          </>
          {/* )} */}
        </div>
        <div className="cart">
          <button className="cart-btn" onClick={addToCart}>
            <i>
              <FaShoppingCart />
            </i>
            add to cart
          </button>
        </div>

        <div className="qty">
          <button
            className="qty-minus"
            onClick={() => decreaseThisProduct(product.id)}
          >
            <span>-</span>
          </button>
          <input
            type="text"
            className="qty-input"
            value={
              cartProducts.filter((id) => id === product.id).length > 0
                ? cartProducts.filter((id) => id === product.id).length
                : 0
            }
          />
          <button
            className="qty-plus"
            onClick={() => increaseThisProduct(product.id)}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
}
