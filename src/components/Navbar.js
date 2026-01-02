import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    toast.success("Logged Out");
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-richblack-900 border-b border-richblack-800">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} width={160} height={32} alt="Logo" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-100">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex gap-x-4 text-white">
          {!isLoggedIn && (
            <>
              <Link to="/login">
                <button className="bg-richblack-800 px-4 py-2 rounded-lg border border-richblack-700">
                  Log in
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-richblack-800 px-4 py-2 rounded-lg border border-richblack-700">
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link to="/dashboard">
                <button className="bg-richblack-800 px-4 py-2 rounded-lg border border-richblack-700">
                  Dashboard
                </button>
              </Link>

              <button
                onClick={logoutHandler}
                className="bg-richblack-800 px-4 py-2 rounded-lg border border-richblack-700"
              >
                Log Out
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-richblack-800 border-t border-richblack-700">
          <ul className="flex flex-col items-stretch gap-4 py-6 px-4 text-richblack-100">
            {/* Nav Links */}
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="text-center"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className="text-center"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className="text-center"
            >
              Contact
            </Link>

            {/* Not Logged In */}
            {!isLoggedIn && (
              <>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/login"
                  className="w-full text-center bg-richblack-900 py-3 rounded-lg border border-richblack-600"
                >
                  Log in
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  to="/signup"
                  className="w-full text-center bg-richblack-900 py-3 rounded-lg border border-richblack-600"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* Logged In */}
            {isLoggedIn && (
              <>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/dashboard"
                  className="w-full text-center bg-richblack-900 py-3 rounded-lg border border-richblack-600"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logoutHandler}
                  className="w-full bg-richblack-900 py-3 rounded-lg border border-richblack-600 text-white active:scale-95 transition"
                >
                  Log Out
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
