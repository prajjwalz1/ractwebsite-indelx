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
const mail = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
  email
)}`;

const encodedLocation = encodeURIComponent(location);
const place = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

const Footer = () => {
  return (
    <>
      <footer className="f-footer">
        <div className="section">
          <div className="container">
            <div className="footer-row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>
                  <ul className="footer-links">
                    <li>
                      <Link
                        href={place}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <FaMapMarkerAlt />
                        </i>
                        {location}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={phone}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <FaPhone />
                        </i>
                        {phoneNumber}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={mail}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <FaEnvelope />
                        </i>
                        {email}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li>
                      <Link href="#">Hot deals</Link>
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
              <div className="clearfix visible-xs"></div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Information</h3>
                  <ul className="footer-links">
                    <li>
                      <Link href="/About">About Us</Link>
                    </li>
                    <li>
                      <Link href="/Contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/PrivacyPolicy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/OrdersReturns">Orders and Returns</Link>
                    </li>
                    <li>
                      <Link href="/TermsConditions">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Service</h3>
                  <ul className="footer-links">
                    <li>
                      <Link href="#">My Account</Link>
                    </li>
                    <li>
                      <Link href="/cartdetail">View Cart</Link>
                    </li>
                    <li>
                      <Link href="/Wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/TrackMyOrder">Track My Order</Link>
                    </li>
                    <li>
                      <Link href="/Help">Help</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container">
            <div className="b-footer">
              <ul className="footer-payments">
                <li>
                  <Link href="#">
                    <i>
                      <FaCcVisa />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i>
                      <FaRegCreditCard />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i>
                      <FaCcPaypal />
                    </i>
                  </Link>
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
      </footer>
    </>
  );
};

export default Footer;
