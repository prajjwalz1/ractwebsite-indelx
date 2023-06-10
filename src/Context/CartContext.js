import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartFromStorage = window.sessionStorage.getItem("cart");
    if (cartFromStorage) {
      setCartProducts(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

 
  const deleteFromCart = (id) => {
    setCartProducts((prevCart) =>
      prevCart.filter((product) => product && product.id !== id)
    );
  };
  // function deleteProduct(productId) {
  //   dispatch({ type: "DELETE_PRODUCT", payload: productId });
  // }

  

  function addProduct(id) {
    setCartProducts((prev) => [...prev, id]);
  }
  function removeProduct(id) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(id);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProduct, removeProduct,deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};



