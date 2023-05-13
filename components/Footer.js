import React from "react";
import {
  FaCcMastercard,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCcVisa,
  FaRegCreditCard,
  FaCcPaypal,
  FaCcDiscover,
  FaHeart,
} from "react-icons/fa";
import { email, phoneNumber, location } from "../src/assests";
import Link from "next/link";

const phone = `tel:${phoneNumber}`;
const mail = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;

const encodedLocation = encodeURIComponent(location);
const place = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

const Footer = () => {
  return (
    <>
      <footer className="f-footer">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>
                  <ul className="footer-links">
                    <li>
                      <a href={place} target="_blank" rel="noopener noreferrer">
                        <i>
                          <FaMapMarkerAlt />
                        </i>
                        {location}
                      </a>
                    </li>
                    <li>
                      <a href={phone} target="_blank" rel="noopener noreferrer">
                        <i>
                          <FaPhone />
                        </i>
                        {phoneNumber}
                      </a>
                    </li>
                    <li>
                      <a href={mail} target="_blank" rel="noopener noreferrer">
                        <i>
                          <FaEnvelope />
                        </i>
                        {email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Hot deals</a>
                    </li>
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">Smartphones</a>
                    </li>
                    <li>
                      <a href="#">Cameras</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clearfix visible-xs"></div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Information</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="/About">About Us</a>
                    </li>
                    <li>
                      <a href="/Contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/PrivacyPolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Orders and Returns</a>
                    </li>
                    <li>
                      <a href="/TermsConditions">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Service</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">View Cart</a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li>
                    <a href="#">
                      <i>
                        <FaCcVisa />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FaRegCreditCard />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FaCcPaypal />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FaCcMastercard />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FaCcDiscover />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>{}</i>
                    </a>
                  </li>
                </ul>
                {/* <span className="copyright">
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2023
                  All rights reserved
                  <i><FaHeart/></i> by
                  <Link href="/"></Link>
                    GS
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
