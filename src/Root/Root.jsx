import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Router from "../Routes/Router";
import Footer from "../Components/Footer/Footer";
import BackToTop from "../Components/BackToTop/BackToTop";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:max-w-10/12  2xl:mx-auto min-h-[calc(90vh-64px)] overflow-hidden">
        <Router />
      </div>
      <Footer />
      <BackToTop/>
    </div>
  );
};

export default Root;
