import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ProductPage from "../../components/ProductPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Developed By GS Mahato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ProductPage />
    </>
  );
}
