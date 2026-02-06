import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2  hover:underline hover:text-blue-600">Home</li>
      </Link>
      <Link to="/apps">
        <li className="m-2 hover:underline hover:text-blue-600">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="m-2 hover:underline hover:text-blue-600">
          Installation
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center  items-center">
          <img className="h-8 w-8" src={'/assets/logo.png'} alt="" />
          <Link to="/" className="text-blue-600 font-semibold">
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/nazmul6567"
          target="_"
          className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  shadow-lg"
        >
          <span>
            <img src="https://i.ibb.co.com/7N2vXTH3/fi-2111432.png" alt="" />
          </span>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
