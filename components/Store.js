import React from "react";

const Store = () => {
  // const [value, setValue] = useState(0);
  // const handleSliderChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <>
      <div id="aside" className="col-md-3">
        <div className="aside">
          <h3 className="aside-title">Categories</h3>
          <div className="checkbox-filter">
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>

            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
          </div>
        </div>

        <div className="aside">
          <h3 className="aside-title">Price</h3>
          <div className="price-filter">
          {/* <div>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleSliderChange}
            />
            <label>{value}</label>
          </div> */}
            <div
              id="price-slider"
              className="noUi-target noUi-ltr noUi-horizontal"
            >
              {/* Price slider goes here */}
            </div>
            <div className="input-number price-min">
              <input id="price-min" type="number" />
              <span className="qty-up">+</span>
              <span className="qty-down">-</span>
            </div>
            <span>-</span>
            <div className="input-number price-max">
              <input id="price-max" type="number" />
              <span className="qty-up">+</span>
              <span className="qty-down">-</span>
            </div>
          </div>
        </div>
        <div className="aside">
          <h3 className="aside-title">Brand</h3>
          <div className="checkbox-filter">
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>

            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="category-1" />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
          </div>
        </div>
        <div className="aside">
      <h3 className="aside-title">Top selling</h3>
      <div className="product-widget">
        <div className="product-img">
          <img src="./img/product01.png" alt="" />
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name"><a href="#">product name goes here</a></h3>
          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
        </div>
      </div>

      <div className="product-widget">
        <div className="product-img">
          <img src="./img/product02.png" alt="" />
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name"><a href="#">product name goes here</a></h3>
          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
        </div>
      </div>

      <div className="product-widget">
        <div className="product-img">
          <img src="./img/product03.png" alt="" />
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name"><a href="#">product name goes here</a></h3>
          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xs-6">
      <div className="product">
        <div className="product-img">
          <img src="./img/product01.png" alt="" />
          <div className="product-label">
            <span className="sale">-30%</span>
            <span className="new">NEW</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name"><a href="#">product name goes here</a></h3>
          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
          <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="product-btns">
            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
          </div>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
        </div>
      </div>
    </div>


      </div>
    </>
  );
};

export default Store;
