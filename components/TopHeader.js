import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDollarSign,
  FaUser,
} from "react-icons/fa";
import { phoneNumber, email, location } from "../src/assests";

const TopHeader = () => {
  return (
    <>
      <div className="top-header">
        <ul className="header-links-left">
          <li>
            <a href="#">
              <span>
                <i>
                  <FaPhone />
                </i>
              </span>
              {phoneNumber}
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <FaEnvelope />{" "}
              </i>
              {email}
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i>
                  <FaMapMarkerAlt />
                </i>
              </span>
              {location}
            </a>
          </li>
        </ul>
        <ul className="header-links-right">
          <li>
            <a href="#">
              <span>
                <i>
                  <FaDollarSign />
                </i>
              </span>
              USD
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i>
                  <FaUser />
                </i>
              </span>
              My Account
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
