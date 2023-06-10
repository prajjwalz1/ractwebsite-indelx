import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

const Success = () => {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Checkout", url: "/checkout" },
    { name: "Success", url: "/success" },
  ];

  const [purchaseId, setPurchaseId] = useState("");

  useEffect(() => {
    // Make an API request to fetch the purchase ID from your backend
    // Replace "apiEndpoint" with your actual backend endpoint
    fetch("apiEndpoint")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your backend response includes a "purchaseId" field
        setPurchaseId(data.purchaseId);
      })
      .catch((error) => {
        console.error("Error fetching purchase ID:", error);
      });
  }, []);


  return (
    <div className="container">
    <Breadcrumbs breadCrumbs={breadCrumbs} />
    <div className="success-page">
      <h3 className="title">Order Placed Successfully!</h3>
      <p>Thank you for your purchase.</p>
      <h4>Purchase ID: {purchaseId}</h4>
    </div>
  </div>
  );
};

export default Success;
