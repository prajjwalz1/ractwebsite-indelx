import React from "react";
import Store from "../../components/Store";

const AllCategories = ({products,categories,brands}) => {
  return (
    <>
      <Store products={products} categories={categories} brands={brands}/>
    </>
  );
};
export async function getServerSideProps() {
  const res = await fetch("https://www.getfromnepal.com/productapi");

  const products = await res.json();
  const categories = [...new Set(products.map((product) => product.category_name))];
  const brands = [...new Set(products.map((product) => product.brand))];


  return {
    props: {
      products,
      categories,
      brands,
    },
  };
}

export default AllCategories;

