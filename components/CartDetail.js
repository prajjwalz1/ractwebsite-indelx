import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import { CartContext } from "@/Context/CartContext";
import axios from "axios";
import Link from "next/link";

const CartDetails = () => {
  const { cartProducts, addProduct, removeProduct, deleteFromCart } =
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
        <div>
          <h3>Your Cart is Empty!</h3>
          <div className="keepshopping">
            <Link href="/AllCategories">
              <button className="con-shopping">Continue Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-section">
          <div className="yourbasket">Your Basket</div>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <Image
                          src={product.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="media-body">
                        <p>{product.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>${product.price}</h5>
                  </td>
                  <td>
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
                  </td>
                  <td>
                    <div className="itemtoatal">
                      $
                      {product.price *
                        cartProducts.filter((id) => id === product.id).length}
                    </div>
                  </td>
                  <td>
                    <div
                      className="itemdelete"
                      onClick={() => deleteitemfromcart(product.id)}
                    >
                      <FaTrash />
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>
                  <h5>Subtotal :</h5>
                </td>
                <td>
                  <h5>${total}</h5>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="h-line" />
              <div className="check-container">
                <div className="checkout">
                  <Link href="/AllCategories">
                    <button className="con-shopping">Continue Shopping</button>
                  </Link>
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
