import React, { FC, useState } from "react";
import Image from "next/image";

import { CheckIcon, StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

export interface ProductDetail {
  producto: Producto;
}
type Producto = {
  id: string;
  name: string;
  image: string;
  price: number;
  sku: string;
  attributes: Attributes;
};
type Attributes = {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
};

const ProductsDetail: FC<ProductDetail> = ({ producto }) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const sizeBag = [
    {
      name: "6 units",
      description: "Perfect for a reasonable amount of guacamole.",
    },
    {
      name: "12 units",
      description: "Enough room for a serious amount of guacamole.",
    },
  ];
  const breadcrumbs = [
    { id: 1, name: "Avocados", href: "/" },
    { id: 2, name: "", href: producto.name },
  ];

  const reviews = { average: 4, totalCount: 1624 };

  const [selectedSize, setSelectedSize] = useState(sizeBag[0]);

  breadcrumbs[1].name = producto.name;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 sm:pt-2 sm:pb-10 lg:max-w-7xl  lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <Link href={breadcrumb.href}>
                      <a className="font-medium text-gray-500 hover:text-gray-900">
                        {breadcrumb.name}
                      </a>
                    </Link>
                    {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4 flex items-center justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {producto.name}
            </h1>
            <p className="text-xs text-gray-500 mt-1 bg-gray-100 inline-block p-1 rounded-md">
              SKU: {producto.sku}
            </p>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${producto.price}{" "}
                <span className="ml-2 text-sm text-gray-500">per unit</span>
              </p>

              <div className="ml-4 pl-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                {producto.attributes?.description}
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <Image
              src={producto?.image}
              alt={producto?.name}
              className="w-full h-full object-center object-cover"
              layout="fill"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
                <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                    Size
                  </RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {sizeBag.map((size) => (
                      <RadioGroup.Option
                        as="div"
                        key={size.name}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            active ? "ring-2 ring-green-600" : "",
                            "relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label
                              as="p"
                              className="text-base font-medium text-gray-900"
                            >
                              {size.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="p"
                              className="mt-1 text-sm text-gray-500"
                            >
                              {size.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-green-500"
                                  : "border-transparent",
                                "absolute -inset-px rounded-lg pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-primaryColor border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                >
                  Add to cart
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Freshness Guarantee
                  </span>
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
