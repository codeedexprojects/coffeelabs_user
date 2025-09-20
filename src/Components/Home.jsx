import React from "react";
import LandingPage from "../Pages/LandingPage";
import TopCategory from "../Pages/TopCategory";
import About from "../Pages/About";
import SuccessPartners from "../Pages/SuccessPartners";
import CustomerReviews from "../Pages/CustomerReviews";
import MobileApps from "../Pages/MobileApps";
import Statistics from "../Pages/Statistics";

function Home() {
  return (
    <div>
      <LandingPage />
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
