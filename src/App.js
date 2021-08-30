import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import EasyBank from "./Components/EasyBank";
import Article from "./Components/Article";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <EasyBank />
      <Article />
      <Footer />
    </React.Fragment>
  );
};
export default App;
