import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ breadCrumbs }) => {
  return (
    <>
      <div id="breadcrumb" className="section">
        <div className="row">
          <div className="col-md-12">
            <ul className="breadcrumb-tree">
              {breadCrumbs.map((breadcrumb, index) => (
                <li key={index}>
                  <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
                </li>
              ))}
              {/* <li><Link href="/">Home</Link></li> */}
              {/* <li><Link href="/AllCategories">All Categories</Link></li> */}
              {/* <li><Link href="#">Accessories</Link></li>
              <li><Link href="#">Headphones</Link></li> */}
              {/* <li className="active">Product name goes here</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
