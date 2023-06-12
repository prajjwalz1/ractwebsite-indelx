import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { CartContext } from "@/Context/CartContext";
import querystring from "querystring";

import axios from "axios";

const Checkout = () => {
  const router = useRouter();
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((Response) => {
        setProducts(Response.data);
      });
    }
  }, [cartProducts]);
  let total = 0;
  const shippingCost = 10;
  for (const id of cartProducts) {
    const selling_price = products.find((p) => p.id === id)?.selling_price || 0;
    total += selling_price;
  }
  total += shippingCost;

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "checkout", url: "/checkout" },
  ];
  // const [session] = useSession();
  const [userData, setUserData] = useState(null);

  const [createAccountChecked, setCreateAccountChecked] = useState(false);
  const [shipToDifferentAddressChecked, setShipToDifferentAddressChecked] =
    useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [isTermsChecked, setTermsChecked] = useState(false);

  const handleCreateAccountChange = () => {
    setCreateAccountChecked(!createAccountChecked);
  };

  const handleShipToDifferentAddressChange = () => {
    setShipToDifferentAddressChecked(!shipToDifferentAddressChecked);
  };
  const handleTermsChange = () => {
    setTermsChecked(!isTermsChecked);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handlePlaceOrder = () => {
    if (selectedPayment && isTermsChecked) {
      if (selectedPayment === "paypal") {
        const queryParams = querystring.stringify({ totalAmount: total });
        router.push(`/paypal?${queryParams}`);
      } else if (selectedPayment === "esewa") {
        const queryParams = querystring.stringify({ totalAmount: total });
        router.push(`/esewa?${queryParams}`);
      } else if (selectedPayment === "mastercard") {
        const queryParams = querystring.stringify({ totalAmount: total });
        router.push(`/mastercard?${queryParams}`);
      }
    }
  };

  // useEffect(() => {
  //   if (session) {
  //     const { user } = session;
  //     setUserData(user);
  //   } else {
  //     setUserData(null);
  //   }
  // }, [session]);

  return (
    <div className="container">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="bill-row">
        <div className="billing">
          <div className="billing-details">
            <div className="section-title">
              <h3 className="title">Billing address</h3>
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="text"
                name="first-name"
                placeholder="First Name"
                value={userData?.name || ""}
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="text"
                name="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="email"
                name="email"
                placeholder="Email"
                value={userData?.email || ""}
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="text"
                name="address"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="text"
                name="city"
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="text"
                name="country"
                placeholder="Country"
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="text"
                name="zip-code"
                placeholder="ZIP Code"
              />
            </div>
            <div className="form-group">
              <input
                className="billing-input"
                type="tel"
                name="tel"
                placeholder="Telephone"
              />
            </div>
            <div className="form-group">
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  id="create-account"
                  checked={createAccountChecked}
                  onChange={handleCreateAccountChange}
                />
                <label htmlFor="create-account">
                  <span></span>
                  Create Account?
                </label>
                {createAccountChecked && (
                  <div className="caption">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                    <input
                      className="billing-input"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="shiping-details">
            <div className="section-title">
              <h3 className="title">Shipping address</h3>
            </div>
            <div className="input-checkbox">
              <input
                type="checkbox"
                id="shiping-address"
                checked={shipToDifferentAddressChecked}
                onChange={handleShipToDifferentAddressChange}
              />
              <label htmlFor="shiping-address">
                <span></span>
                Ship to a different address?
              </label>
              {shipToDifferentAddressChecked && (
                <div className="caption">
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="text"
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="text"
                      name="zip-code"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="billing-input"
                      type="tel"
                      name="tel"
                      placeholder="Telephone"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="order-notes">
            <textarea
              className="billing-input"
              placeholder="Order Notes"
            ></textarea>
          </div>
        </div>
        <div className="order-details">
          <div className="text-center">
            <h3 className="title">Your Order</h3>
          </div>
          <div className="order-summary">
            <div className="order-col">
              <div>
                <strong>PRODUCT</strong>
              </div>
              <div>
                <strong>TOTAL</strong>
              </div>
            </div>
            <div className="order-products">
              {products.map((product, index) => (
                <div className="order-col" key={index}>
                  <div>
                    {cartProducts.filter((id) => id === product.id).length}x
                    {product.pname}
                  </div>
                  <div>
                    $
                    {product.selling_price *
                      cartProducts.filter((id) => id === product.id).length}
                  </div>
                </div>
              ))}
            </div>
            <div className="order-col">
              <div>Shipping</div>
              <div>
                <strong>Flat rate: ${shippingCost}</strong>
              </div>
            </div>
            <div className="order-col">
              <div>
                <strong>TOTAL</strong>
              </div>
              <div>
                <strong className="order-total">${total}</strong>
              </div>
            </div>
          </div>
          <div className="payment-method">
            <div className="input-radio">
              <input
                type="radio"
                name="payment"
                id="payment-1"
                value="direct-bank-transfer"
                checked={selectedPayment === "direct-bank-transfer"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="payment-1">
                <span></span>
                Direct Bank Transfer
              </label>
              {selectedPayment === "direct-bank-transfer" && (
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              )}
            </div>
            <div className="input-radio">
              <input
                type="radio"
                name="payment"
                id="payment-2"
                value="esewa"
                checked={selectedPayment === "esewa"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="payment-2">
                <span></span>
                eSewa
              </label>
              {selectedPayment === "esewa" && (
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              )}
            </div>
            <div className="input-radio">
              <input
                type="radio"
                name="payment"
                id="payment-3"
                value="paypal"
                checked={selectedPayment === "paypal"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="payment-3">
                <span></span>
                Paypal
              </label>
              {selectedPayment === "paypal" && (
                <div className="caption">
                  <p>
                    Pay via PayPal, you can pay with your credit card if you
                    don&apos;t have a PayPal account.
                  </p>
                </div>
              )}
            </div>
            {/* {selectedPayment === "paypal" && (
              <div>
                <h3>Pay with PayPal</h3>
                {paymentStatus && <p>Payment status: {paymentStatus}</p>}
                {handlePayPalPayment()}
              </div>
            )} */}
            <div className="input-radio">
              <input
                type="radio"
                name="payment"
                id="payment-4"
                value="mastercard"
                checked={selectedPayment === "mastercard"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="payment-4">
                <span></span>
                Mastercard
              </label>
              {selectedPayment === "mastercard" && (
                <div className="caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={isTermsChecked}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">
              <span></span>
              I&apos;ve read and accept the{" "}
              <Link className="tandconditions" href="/TermsConditions">
                terms &amp; conditions
              </Link>
            </label>
          </div>
          <button
            className={`primary-btn order-submit ${
              !isTermsChecked || !selectedPayment ? "disabled" : ""
            }`}
            onClick={handlePlaceOrder}
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
