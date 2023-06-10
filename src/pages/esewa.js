import React, { useEffect } from "react";

const esewa = () => {
  useEffect(() => {
    const path = "https://uat.esewa.com.np/epay/main";
    const params = {
      amt: 100,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: 100,
      pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
      scd: "EPAYTEST",
      su: "http://merchant.com.np/page/esewa_payment_success",
      fu: "http://localhost:3000/checkout",
    };

    const post = (path, params) => {
      const form = document.createElement("form");
      form.setAttribute("method", "POST");
      form.setAttribute("action", path);

      for (const key in params) {
        const hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
      }

      document.body.appendChild(form);
      form.submit();
    };

    post(path, params);
  }, []);

  return null;
};

export default esewa;
