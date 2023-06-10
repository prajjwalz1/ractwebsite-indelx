import React, { useState, useEffect } from "react";
import paypal from "paypal-rest-sdk";
import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/Breadcrumbs";

paypal.configure({
  mode: "sandbox",
  client_id:
    "ARPyPiXGtxcIVCxu_AFsogRJwhqFd8NFLmE6G1unxxP279O5Qgd821Z9-2T7B-GRHaAlY9_nlH9UP5aT",
  client_secret:
    "EArg7OZinUIw1SmyX8L9BPfp-dQUX-at-fuhHN0ED_vgpADJFHQChahkiyNJ5EvIk4a-Pn2FuHWNcz5y",
});

const PaypalPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const router = useRouter();
  const { totalAmount } = router.query;

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Checkout", url: "/checkout" },
    { name: "Paypal", url: "/paypal" },
  ];

  const handlePayPalPayment = () => {
    const createOrder = (data, actions) => {
      return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: totalAmount, // Use the retrieved totalAmount value
            },
          },
        ],
      });
    };

    const onApprove = (data, actions) => {
      return actions.order.capture().then((details) => {
        setPaymentStatus(details.status);
        const purchaseId = generatePurchaseId(); // Generate a purchase ID here
        router.push(`/success?id=${purchaseId}`);
      });
    };

    const onError = (error) => {
      console.error(error);
    };

    return (
      <PayPalButton
        options={{
          clientId:
            "ARPyPiXGtxcIVCxu_AFsogRJwhqFd8NFLmE6G1unxxP279O5Qgd821Z9-2T7B-GRHaAlY9_nlH9UP5aT",
          currency: "USD",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    );
  };

  const paypalButton = totalAmount ? handlePayPalPayment() : null;

  return (
    <div className="container">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div>
        <h3>Pay with PayPal</h3>
        {paymentStatus && <p>Payment status: {paymentStatus}</p>}
        {paypalButton}
      </div>
    </div>
  );
};

export default PaypalPage;
