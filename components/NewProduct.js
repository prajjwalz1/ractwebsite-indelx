import { React } from "react";
const NewProduct = () => {
  return (
    <>
      <div className="section">
        <div className="product-container">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">New Products</h3>
              <div className="section-nav">
                <ul className="section-tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="#">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
