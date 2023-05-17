import { React, useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../src/assests";
import {
  FaShoppingCart,
  FaRegHeart,
  FaWindowClose,
  FaArrowCircleRight,
} from "react-icons/fa";
import axios from "axios";
import { CartContext } from "@/Context/CartContext";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
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
    const price = products.find((p) => p.id === id)?.price || 0;
    total += price;
  }

  const addToCart = (product) => {
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
  };

  // const uniqueid = new Set(products.map((product) => product.id));
  //   const uniqueProductCount = uniqueid.size;

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <Link href="/">
                  <Image src={logo} alt="" height={70} width={169} />
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>

            <div className="col-md-3 clearfix">
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
                                  src={product.image}
                                  alt={product.title}
                                  width={30}
                                  height={30}
                                />
                              </div>
                              <div className="product_body">
                                <h3 className="product_name">
                                  {product.title}
                                </h3>
                                <h4 className="product_price">
                                  <span className="qnty">
                                    {
                                      cartProducts.filter(
                                        (id) => id === product.id
                                      ).length
                                    }
                                  </span>
                                  {product.price}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <hr />
                      <div className="cart-summary">
                        <small>{cartProducts.length} Item(s) selected</small>
                        <h5>SUBTOTAL: ${total}</h5>
                      </div>
                      <div className="cart_btns">
                        <Link href="/cartdetail" onClick={handleViewCartClick}>
                          View Cart
                        </Link>
                        <Link href="/checkout" onClick={handleCheckout}>
                          Checkout
                          <i>
                            <FaArrowCircleRight />
                          </i>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="menu-toggle">
                  <a href="#">
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                  </a>
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
