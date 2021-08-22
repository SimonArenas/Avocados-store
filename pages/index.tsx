import Spinner from "components/Loader";
import ProductsList from "components/ProductsList";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [productList, updateProductList] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);

  useEffect(() => {
    window
      .fetch("/api/avocado")
      .then((response) => response.json())
      .then(({ allAvocados }) => {
        updateProductList(allAvocados);
        updateIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      {isLoading && <Spinner />}
      <main>{!isLoading && <ProductsList products={productList} />}</main>
    </div>
  );
};

export default Home;
