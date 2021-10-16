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
      <section className="flex justify-between mb-28 ml-16">
        <div className="flex flex-col w-1/3">
          <span className="font-SuisseMedium font-bold">The Athenaeum</span>
          <span className="text-3xl opacity-75 my-5">
            The science of skin care
          </span>
          <span>
            Our pocket-sized biology lesson is a speedy way to get to know your
            skin, pass the time between bus stops, or learn new Scrabble words.{" "}
          </span>
          <button className="transition-colors max-w-xs ease-in mt-5 bg-transparent border-opacity-25 py-4 border-primaryDark border-1 hover:bg-primaryDark hover:text-white">
            Read more
          </button>
        </div>
        <div className="flex-1 ml-16">
          <video muted autoPlay loop>
            <source
              src="https://player.vimeo.com/external/525931930.hd.mp4?s=63966b7af23dd5eca091e6d77aeb8b6ce6d81635&amp;profile_id=175"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default HomePage;
