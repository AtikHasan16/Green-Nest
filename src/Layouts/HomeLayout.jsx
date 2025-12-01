import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { BiArrowFromBottom } from "react-icons/bi";

const HomeLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <Navbar></Navbar>
      </header>
      <main className="md:bg-gray-100">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <a href="#top" aria-label="Go to top">
        <div className="h-13 bg-green-800 w-13  rounded-full fixed bottom-3 right-3 cursor-pointer flex justify-center items-center  transition-all duration-300">
          <BiArrowFromBottom
            size={30}
            className=" animate-bounce pt-1"
            color="white"
          ></BiArrowFromBottom>
        </div>
      </a>
    </>
  );
};

export default HomeLayout;
