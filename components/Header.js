import { React, useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../src/assests";
import {
  FaShoppingCart,
  FaRegHeart,
  FaWindowClose,
  FaArrowCircleRight,
  FaBars,
} from "react-icons/fa";
import axios from "axios";
import { CartContext } from "@/Context/CartContext";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { useSession, signIn } from "next-auth/react";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.getfromnepal.com/productapi"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const { cartProducts, setCartProducts, deleteFromCart } =
    useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((Response) => {
        setProducts(Response.data);
      });
    }
  }, [cartProducts]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleViewCartClick = () => {
    setIsOpen(false);
  };
  const handleCheckout = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".dropdown") === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  let total = 0;
  for (const id of cartProducts) {
    const selling_price = products.find((p) => p.id === id)?.selling_price || 0;
    total += selling_price;
  }

  // const addToCart = (product) => {
  //   setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
  // };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="h-part">
              <div className="logo-part">
                <div className="header-logo">
                  <Link href="/">
                    <Image src={logo} alt="" height={70} width={169} />
                  </Link>
                </div>
              </div>
              <SearchBar />

              <div className="ctn-part">
                <div className="header-ctn">
                  <div>
                    <Link href="/Wishlist">
                      <i>
                        <FaRegHeart />
                      </i>
                      <span>Your Wishlist</span>
                      <div className="qty">2</div>
                    </Link>
                  </div>

                  <div className="dropdown" ref={ref}>
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                      onClick={toggleDropdown}
                    >
                      <i>
                        <FaShoppingCart />
                      </i>
                      <span>Your Cart</span>
                      <div className="qty">{cartProducts.length}</div>
                    </a>
                    {isOpen && (
                      <div className="cart_dropdown">
                        {cartProducts.length === 0 ? (
                          <h2>Your Cart is Empty!</h2>
                        ) : (
                          <div className="cart_list">
                            {products.map((product) => (
                              <div className="product_widget" key={product.id}>
                                <div className="cut_button">
                                  <button
                                    className="delete"
                                    onClick={() => deleteFromCart(product.id)}
                                  >
                                    <i>
                                      <FaWindowClose />
                                    </i>
                                  </button>
                                </div>
                                <div className="product_img">
                                  <Image
                                    src={`https://www.getfromnepal.com/${product.image}`}
                                    alt={product.pname}
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="product_body">
                                  <h5 className="product_name">
                                    {product.pname}
                                  </h5>
                                  <h4 className="product_price">
                                    <span className="qnty">
                                      {
                                        cartProducts.filter(
                                          (id) => id === product.id
                                        ).length
                                      }
                                      x
                                    </span>
                                    ${product.selling_price}
                                  </h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="cart-summary">
                          <small>{cartProducts.length} Item(s) selected</small>
                          <h5>SUBTOTAL: ${total}</h5>
                        </div>
                        <div className="cart_btns">
                          <Link
                            href="/cartdetail"
                            onClick={handleViewCartClick}
                          >
                            View Cart
                          </Link>
                          <Link href="/checkout" onClick={handleCheckout}>
                            Checkout
                          </Link>
                          {/* {session ? (
                            <Link href="/checkout">
                              <button className="primary-btn">
                                PROCEED TO CHECKOUT
                              </button>
                            </Link>
                          ) : (
                            <button className="primary-btn" onClick={() => signIn()}>
                              LOGIN TO CHECKOUT
                            </button>
                          )} */}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="menu-toggle">
                    <Link href="#">
                      <i>
                        <FaBars />
                      </i>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
