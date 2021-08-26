import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

type ProductListProps = {
  products: TProduct[];
};

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link href={`/producto/${product.id}`} key={product.id}>
              <a key={product.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                    layout="fill"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 font-semibold">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-primaryColor">
                  $ {product.price}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
