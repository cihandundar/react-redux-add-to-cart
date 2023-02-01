import { FeaturedCollection, Hero } from "components";
import Info from "components/Info";
import React from "react";

const Home = () => {
  return (
    <main>
      <section>
        <Hero />
        <Info />
        <FeaturedCollection />
      </section>
    </main>
  );
};

export default Home;
