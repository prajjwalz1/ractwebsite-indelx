import React from "react";
import Store from "../../components/Store";

const AllCategories = ({products,categories}) => {
  return (
    <>
      <Store products={products} categories={categories}/>
    </>
  );
};
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const cat = await fetch("https://fakestoreapi.com/products/categories");

  const products = await res.json();
  const categories = await cat.json();

  return {
    props: {
      products,
      categories,
    },
  };
}

export default AllCategories;
