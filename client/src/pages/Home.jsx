import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <div style={{textAlign: "center", fontWeight: "bolder", fontSize: "26px", marginTop: "20px"}}>CATEGORIES</div>
      <Categories />
      <div style={{textAlign: "center", fontWeight: "bolder", fontSize: "26px"}}>FEATURED PRODUCTS</div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
