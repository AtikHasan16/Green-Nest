import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link, Links } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal   footer-center bg-green-800 p-10 poppins text-white">
        <div>
          <Link
            to={"/"}
            className="btn md:btn-xl text-white bg-transparent border-none shadow-none text-4xl flex justify-center items-center"
          >
            <figure className="w-15">
              <img src={logo} alt="" className="rounded-full" />
            </figure>
            Leaf Store
          </Link>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <Link to={"/about"} className="link link-hover">
            About us
          </Link>
          <Link to={"/profile"} className="link link-hover">
            My Profile
          </Link>
          <Link to={"/contact"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/hasan-md-atik/"
              target="_blank"
            >
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a href="https://www.facebook.com/MDAtikhasannaeem" target="_blank">
              <FaFacebook size={30}></FaFacebook>
            </a>
            <a href="https://github.com/AtikHasan16" target="_blank">
              <FaGithub size={30}></FaGithub>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Leaf
            Store LTD.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
