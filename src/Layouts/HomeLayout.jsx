import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import GoTop from "../Components/GoTop";

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
      <div className="hidden md:block">
        <GoTop></GoTop>
      </div>
    </>
  );
};

export default HomeLayout;
