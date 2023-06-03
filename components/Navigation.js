import React from "react";
import Link from "next/link";
const DownHeader = () => {
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <div className="responsive-nav">
            <ul className="main-nav">
              <li className="active">
                <Link href="/">Home</Link>
              </li>
              {/* <li>
               <Link href="#">Hot Deals</Link>
              </li> */}
              <li>
                <Link href="/AllCategories">Categories</Link>
              </li>
              <li>
                <Link href="#">Laptops</Link>
              </li>
              <li>
                <Link href="#">Smartphones</Link>
              </li>
              <li>
                <Link href="#">Cameras</Link>
              </li>
              <li>
                <Link href="#">Accessories</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DownHeader;
