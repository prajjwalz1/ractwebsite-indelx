import Image from "next/image";
import {
  FaEye,
  FaShoppingCart,
  FaRegHeart,
  FaExchangeAlt,
} from "react-icons/fa";
import Rating from "./Rating";
import Link from "next/link";
import { product01 } from "@/assests";

export default function ProductPage() {
  return (
    <>
      <div className="container">
        <div className="product">
          <div className="product-img">
            <Image src={product01} alt="" width={1000} height={1000} />
          </div>
          <div className="product-body">
            <p className="product-category">category</p>
            <h3 className="product-name">
              <a href="#" tabindex="-1">
                name
              </a>
            </h3>
            <h4 className="product-price">
              new_price
              <del className="product-old-price">old_price</del>
            </h4>
            <div className="product-rating">
              <Rating value="" />
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
                <Link href="">
                  <i>
                    <FaEye />
                  </i>
                </Link>
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>

          <div className="add-to-cart">
            <button className="add-to-cart-btn" tabindex="-1">
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
