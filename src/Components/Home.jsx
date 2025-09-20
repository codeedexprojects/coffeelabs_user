import React from "react";
import TopCategory from "../Pages/TopCategory";
import About from "../Pages/About";
import SuccessPartners from "../Pages/SuccessPartners";
import CustomerReviews from "../Pages/CustomerReviews";
import MobileApps from "../Pages/MobileApps";
import Statistics from "../Pages/Statistics";
import LandingPages from "../Pages/LandingPages";

function Home() {
  return (
    <div>
      <LandingPages />
      <About />
      <Statistics />
      <TopCategory />
      <SuccessPartners />
      <CustomerReviews />
      <MobileApps />
    </div>
  );
}

export default Home;
