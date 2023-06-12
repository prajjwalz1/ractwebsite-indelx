import React, { useContext, useEffect, useState } from "react";
import {
  FaTrash,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaShoppingBag,
} from "react-icons/fa";
import Image from "next/image";
import { CartContext } from "@/Context/CartContext";
import axios from "axios";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const CartDetails = ({product}) => {
  const { cartProducts, addProduct, removeProduct, deleteFromCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const { data: session, status } = useSession();
  const loading = status === "loading";

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

  const handleDelete = () => {
    deleteFromCart();
  };
  


  let total = 0;
  for (const id of cartProducts) {
    const selling_price = products.find((p) => p.id === id)?.selling_price || 0;
    total += selling_price;
  }

  return (
    <div className="container">
      {cartProducts.length === 0 ? (
        <div className="empty-cart">
          <h4>Your Cart is Empty.</h4>
          <div className="keepshopping">
            <Link href="/">
              <button className="check-button">
                <i>
                  <FaShoppingBag />
                </i>
                Continue Shopping
              </button>
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
                <tr key={product.id} >
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <Image
                          src={`https://www.getfromnepal.com/${product.image}`}
                          alt={product.pname}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="media-body">
                        <p>{product.pname}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>${product.selling_price}</h5>
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
                      {product.selling_price *
                        cartProducts.filter((id) => id === product.id).length}
                    </div>
                  </td>
                  <td>
                    <div
                      className="itemdelete"
                      onClick={() => handleDelete(product.id)}
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
              <Link href="/">
                <button className="check-button">
                  <i>
                    <FaShoppingBag />
                  </i>
                  Continue Shopping
                </button>
              </Link>
            </div>
            <div className="check-out">
              {session ? (
                <Link href="/checkout">
                  <button className="check-button">
                    <i>
                      <FaCheck />
                    </i>
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              ) : (
                <button className="check-button" onClick={() => signIn()}>
                  <i>
                    <FaCheck />
                  </i>
                  LOGIN TO CHECKOUT
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
