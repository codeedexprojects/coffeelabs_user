import React from "react";
import LandingPage from "../Pages/LandingPage";
import TopCategory from "../Pages/TopCategory";
import Blogs from "../Pages/Blogs";
import About from "../Pages/About";
import SuccessPartners from "../Pages/SuccessPartners";

function Home() {
  return (
    <div>
      <LandingPage />
      <About />
      <TopCategory />
      <SuccessPartners />
      <Blogs />
    </div>
  );
}

export default Home;
