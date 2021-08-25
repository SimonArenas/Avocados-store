import Spinner from "components/Loader";
import ProductsDetail from "components/ProductsDetail";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Id: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const [productDetail, updateProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/avocado/${id}`)
      .then((response) => response.json())
      .then(({ getAvocado }) => {
        updateProductDetail(getAvocado);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && productDetail && (
        <ProductsDetail producto={productDetail} />
      )}
    </>
  );
};

export default Id;
