import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { CartContext } from "@/Context/CartContext";
import axios from "axios";

const CartDetails = () => {
  const { cartProducts, addProduct, removeProduct, deleteFromCart} =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((Response) => {
        setProducts(Response.data);
      });
    }
  }, [cartProducts]);
  function increaseThisProduct(id) {
    addProduct(id);
  }
  function decreaseThisProduct(id) {
    removeProduct(id);
  }

  let total = 0;
  for (const id of cartProducts) {
    const price = products.find((p) => p.id === id)?.price || 0;
    total += price;
  }
  function deleteitemfromcart() {
    deleteFromCart();
  }

  return (
    <div className="container">
      {cartProducts.length === 0 ? (
        <h2>Your Cart is Empty!</h2>
      ) : (
        <div className="cart-section">
          <div className="yourbasket">Your Basket</div>
          <hr className="h-line" />
          <div className="item-details">
            <div className="itemname">Item</div>
            <div className="price">Price</div>
            <div className="itemquantity">Quantity</div>
            <div className="total">Total</div>
            <div className="delete">Delete</div>
          </div>
          <hr className="h-line" />
          <div className="pr-d">
            {products.map((product) => (
              <div className="item-content">
                <div className="i-details">
                  <div className="imag">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="i-name">
                    <span>{product.name}</span>
                  </div>
                </div>
                <div className="other-detail">
                  <div className="itemprice">${product.price}</div>
                  <div className="itemquantity">
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
                          cartProducts.filter((id) => id === product.id).length
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
                  <div className="itemtoatal">
                    $
                    {product.price *
                      cartProducts.filter((id) => id === product.id).length}
                  </div>
                  <div
                    className="itemdelete"
                    onClick={() => deleteitemfromcart(product)}
                  >
                    <FaTrash />
                  </div>
                </div>
              </div>
            ))}
            <hr className="h-line" />
          </div>

          <div className="subtotal">
            <div className="sub-total">
              Total Amount:
              <div className="amount">{total}</div>
            </div>
          </div>
          <hr className="h-line" />
          <div className="check-container">
            <div className="checkout">
              <button className="con-shopping">Continue Shopping</button>
            </div>
            <div className="check-out">
              <button className="check-button">
                <i>
                  <FaCheck />
                </i>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
