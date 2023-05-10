import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import {logo,product01} from "../src/assests"
import {
  FaShoppingCart,
  FaRegHeart,
  FaWindowClose,
  FaArrowCircleRight,
} from "react-icons/fa";

const Header = () => {
  // const [selectCategory, setselectCategory] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  // const ref = useRef();

  // const categories = Array.from(
  //   new Set(productData.map((item) => item.category))
  // );

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleClickOutside = (event) => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <Link href="/">
                  <Image src={logo} alt="" height={70} width={169}/>
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">Category 01</option>
                    <option value="1">Category 02</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>

            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                <div>
                  <a href="#">
                    <i>
                      <FaRegHeart />
                    </i>
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>

                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    // onClick={toggleDropdown}
                  >
                    <i>
                      <FaShoppingCart />
                    </i>
                    <span>Your Cart</span>
                    <div className="qty">2</div>
                  </a>
                  {/* {isOpen && ( */}
                  <div className="cart_dropdown">
                    <div className="cart_list">
                      <div className="product_widget">
                        <div className="cut_button">
                          <button
                            className="delete"
                            // onClick={() => handleDeleteItem(item.id)}
                          >
                            <i>
                              <FaWindowClose />
                            </i>
                          </button>
                        </div>
                        <div className="product_img">
                          <img src={product01} alt="" />
                        </div>
                        <div className="product_body">
                          <h3 className="product_name">
                            <a href="#">lap</a>
                          </h3>
                          <h4 className="product_price">
                            <span className="qnty">2x</span>$ 2oo
                          </h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="cart-summary">
                      <small> Item(s) selected</small>
                      <h5>SUBTOTAL: $300</h5>
                    </div>
                    <div className="cart_btns">
                      <a href="#">View Cart</a>
                      <a href="#">
                        Checkout
                        <i>
                          <FaArrowCircleRight />
                        </i>
                      </a>
                    </div>
                  </div>
                  {/* )} */}
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
