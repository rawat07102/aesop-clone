import React from "react";
import Image from "next/image";
import ProductImage from "../../public/images/productImage2.webp";
import ChevronIcon from "./ChevronIcon";

const products = [
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
  {
    name: "Parsley Seed Facial Cleanser",
    description: "A clarifying gel cleanser, lightly exfoilating",
  },
];

const ProductList: React.FunctionComponent = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <section className="relative my-16 product-section">
      {index > 0 && (
        <button
          className="flex items-center justify-center absolute left-0 top-1/2 z-50 w-20 h-20 bg-primaryDark text-white transform transition-transform ease-in-out -translate-x-full"
          onClick={() => {
            setIndex((p) => p - 1);
          }}
        >
          <ChevronIcon className="rotate-90" />
        </button>
      )}
      <div
        className={`flex w-screen justify-between transition-transform ease-out duration-500`}
        style={{
          transform: `translateX(-${index * 20}%)`,
        }}
      >
        {products.map(({ name, description }, i) => (
          <div
            key={name}
            className="flex cursor-pointer items-center flex-col w-1/3 max-w-md flex-shrink-0"
            style={{
              height: "400px",
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={ProductImage}
                alt={name}
                layout="fill"
                className="h-full mt-auto mb-5"
              />
            </div>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        ))}
      </div>
      {index <= 4 && (
        <button
          className="flex items-center justify-center absolute right-0 top-1/2 z-50 w-20 h-20 bg-primaryDark text-white transform transition-transform translate-x-full ease-in-out"
          onClick={() => {
            setIndex((p) => p + 1);
          }}
        >
          <ChevronIcon className="-rotate-90" />
        </button>
      )}
      <div className="mx-12 bg-primary  h-px mt-8">
        <div
          className="w-1/6 bg-primaryDark h-full transition-all duration-500"
          style={{
            transform: `translateX(${index * 100}%)`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default ProductList;
