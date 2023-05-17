import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopSelling = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="topsell-container">
          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              {products.map((product) => (
                <div
                  className="product-widget"
                  key={product.id}
                  id={product.id}
                  product={product}
                >
                  <div className="product-img">
                    <Image src={product.image} alt={product.title} width={60} height={60}/>
                  </div>
                  <div className="product-body">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">
                      <Link href={`/product/${product.id}`} tabindex="-1">
                        {product.title}
                      </Link>
                    </h3>
                    <h4 className="product-price">
                      {product.price} <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              {products.map((product) => (
                <div
                  className="product-widget"
                  key={product.id}
                  id={product.id}
                  product={product}
                >
                  <div className="product-img">
                    <Image src={product.image} alt={product.title} width={60} height={60}/>
                  </div>
                  <div className="product-body">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">
                      <Link href={`/product/${product.id}`} tabindex="-1">
                        {product.title}
                      </Link>
                    </h3>
                    <h4 className="product-price">
                      {product.price} <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              {products.map((product) => (
                <div
                  className="product-widget"
                  key={product.id}
                  id={product.id}
                  product={product}
                >
                  <div className="product-img">
                    <Image src={product.image} alt={product.title} width={60} height={60}/>
                  </div>
                  <div className="product-body">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">
                      <Link href={`/product/${product.id}`} tabindex="-1">
                        {product.title}
                      </Link>
                    </h3>
                    <h4 className="product-price">
                      {product.price} <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSelling;

