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
              <li>
               <Link href="/HotDeals">Hot Deals</Link>
              </li>
              <li>
                <Link href="/Categories">Categories</Link>
              </li>
              <li>
                <Link href="/Laptops">Laptops</Link>
              </li>
              <li>
                <Link href="/Smartphones">Smartphones</Link>
              </li>
              <li>
                <Link href="/Cameras">Cameras</Link>
              </li>
              <li>
                <Link href="/Accessories">Accessories</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DownHeader;
