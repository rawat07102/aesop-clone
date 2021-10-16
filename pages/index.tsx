import React from "react";
import HeroBanner from "../src/components/HeroBanner";
import HeroVideo from "../src/components/HeroVideo";
import Nav from "../src/components/Nav";
import ProductList from "../src/components/ProductList";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <section className="font-SuisseRegular bg-primaryDark text-sm p-4 text-white flex justify-center items-center">
        Enjoy complimentary carbon neutral shipping on orders over $400 +
      </section>
      <section className="flex h-screen-85 bg-primary">
        <Nav />
        <HeroBanner />
        <HeroVideo />
      </section>
      <ProductList />
    </>
  );
};

export default HomePage;
