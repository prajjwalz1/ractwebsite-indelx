import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/topheader.css";
import "@/styles/navigation.css";
import "@/styles/footer.css";
import "@/styles/productpage.css";
import "@/styles/cartdetail.css";
import "@/styles/shopcategory.css";
import "@/styles/newproduct.css";
import { CartContextProvider } from "../Context/CartContext";

import Header from "../../components/Header";
import TopHeader from "../../components/TopHeader";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <TopHeader />
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
    </>
  );
}
