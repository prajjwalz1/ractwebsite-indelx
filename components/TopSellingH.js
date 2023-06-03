import Link from "next/link";
import { React } from "react";
const TopSellingH = () => {
  return (
    <>
        <div className="section-n">
          <div className="product-container">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Top Selling</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav">
                    <li className="active">
                      <Link data-toggle="tab" href="#">
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" href="#">
                        Smartphones
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" href="#">
                        Cameras
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" href="#">
                        Accessories
                      </Link>
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

export default TopSellingH;
