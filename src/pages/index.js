import Head from "next/head";
import ProductPage from "../../components/ProductPage";
import ShopCategory from "../../components/ShopCategory";
import NewProduct from "../../components/NewProduct";
import TopSelling from "../../components/TopSelling";
import Store from "../../components/Store";
import ProductPageSlider from "../../components/ProductPageSlider";
// import Detail from "../../components/Detail";
import ProPage from "../../components/ProPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Home({ products, category }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Developed By GS Mahato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <ShopCategory />
      <div className="container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          {products.map((product) => {
            return <ProPage key={product.id} product={product} />;
          })}
        </Carousel>
      </div>
      {/* <Store category={category}products={products}/> */}
      {/* <Detail/> */}
      {/* <ProductPageSlider /> */}
      {/* <ProductPage products={products} /> */}
      <TopSelling products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const cat = await fetch("https://fakestoreapi.com/products/categories");

  const products = await res.json();
  const category = await cat.json();

  return {
    props: {
      products,
      category,
    },
  };
}
