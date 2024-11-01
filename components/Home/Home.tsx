import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import AllProducts from "./AllProducts";
import Collections from "./Collections";

const Home = () => {
  return (
    <div>
      <Hero />
      <Collections />
      <Category />
      <AllProducts />
    </div>
  );
};

export default Home;
