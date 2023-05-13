import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDollarSign,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { phoneNumber, email, location } from "../src/assests";
const phone = `tel:${phoneNumber}`;
// const mail = `mailto:${email}`;
const mail = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;

const encodedLocation = encodeURIComponent(location);
const place = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;





const TopHeader = () => {
  return (
    <>
      <div className="top-header">
        <ul className="header-links-left">
          <li>
            <a href={phone} target="_blank" rel="noopener noreferrer">
              <span>
                <i>
                  <FaPhone />
                </i>
              </span>
              {phoneNumber}
            </a>
          </li>
          <li>
            <a href={mail} target="_blank" rel="noopener noreferrer">
              <i>
                <FaEnvelope />{" "}
              </i>
              {email}
            </a>
          </li>
          <li>
            <a href={place} target="_blank" rel="noopener noreferrer">
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
