import Link from "next/link";
import React from "react";
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <>
      <div id="newsletter" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
                <form>
                  <input
                    className="input"
                    type="email"
                   placeholder="Enter Your Email"
                  />
                  <button className="newsletter-btn">
                    <i className="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <ul className="newsletter-follow">
                  <li>
                    <Link href="#">
                      <i><FaFacebook/></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i><FaTwitter/></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i><FaInstagram/></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i><FaLinkedin/></i>
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

export default NewsLetter;
