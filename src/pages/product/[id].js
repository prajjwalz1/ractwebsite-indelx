import React from "react";
import { useRouter } from "next/router";
import ProductDetail from "../../../components/ProductDetail";

export default function Product({ product }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

