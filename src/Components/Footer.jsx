import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal   footer-center bg-green-800 p-10 poppins text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaInstagram size={30}></FaInstagram>
            </a>
            <a>
              <FaFacebook size={30}></FaFacebook>
            </a>
            <a>
              <FaPinterest size={30}></FaPinterest>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            GreenNest LTD.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
