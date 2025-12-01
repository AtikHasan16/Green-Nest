import React, { useContext } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { MdMenuOpen } from "react-icons/md";
import { AuthContext } from "../Contexts/Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { ClockLoader } from "react-spinners";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { currentUser, logOutUser, loading } = useContext(AuthContext);
  // console.log(currentUser?.displayName, currentUser?.photoURL);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={"btn rounded-lg border-none text-green-900 text-lg"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/plants"}
          className={"btn rounded-lg border-none text-green-900 text-lg"}
        >
          Plants
        </NavLink>
      </li>
      {currentUser && (
        <li>
          <NavLink
            to={"/profile"}
            className={"btn rounded-lg border-none text-green-900 text-lg"}
          >
            My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/about"}
          className={"btn rounded-lg border-none text-green-900 text-lg"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={"btn rounded-lg border-none text-green-900 text-lg"}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOutUser().then(() => {
      toast.info("Successfully Sign Out ");
    });
  };

  return (
    <div className="border-b-2 border-gray-300">
      <Container>
        <div className="navbar poppins py-3 ">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <MdMenuOpen size={30}></MdMenuOpen>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 outline-2 outline-green-800"
              >
                {links}
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn md:btn-xl btn-ghost text-2xl text-green-800 flex justify-center items-center"
            >
              <figure className="w-10">
                <img src={logo} alt="" />
              </figure>
              reen Nest
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6 ">{links}</ul>
          </div>
          <div className="navbar-end ">
            {loading ? (
              <ClockLoader color="#016630"></ClockLoader>
            ) : currentUser ? (
              <div>
                <div className="dropdown dropdown-end outline-3 rounded-full outline-green-800 mr-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-lg btn-ghost btn-circle avatar"
                  >
                    <div className="rounded-full">
                      <img
                        alt="user photo"
                        src={currentUser?.photoURL}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-4 gap-2 shadow outline-2 outline-green-800 "
                  >
                    <h2 className="text-center  font-semibold">
                      {currentUser?.displayName}
                    </h2>
                    <h2 className="text-center font-semibold">
                      {currentUser?.email}
                    </h2>

                    <button onClick={handleLogout} className="btn btn-1">
                      Logout
                    </button>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex  gap-2 flex-col md:flex-row">
                <Link to={"/login"} className="btn rounded-lg btn-1 md:btn-lg">
                  Login
                </Link>
                <Link
                  to={"/registration"}
                  className="btn rounded-lg btn-1 md:btn-lg"
                >
                  Registration
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
