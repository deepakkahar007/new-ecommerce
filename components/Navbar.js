import React from "react";
import Link from "next/link";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link legacyBehavior href={"/"}>
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">E-commerce</span>
          </a>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link legacyBehavior href={"/Category"}>
            <a className="mr-5 hover:text-white">Category</a>
          </Link>

          <Link href={"/Admin/Create"} className="mr-5 hover:text-white">
            Admin Panel
          </Link>

          <a className="mr-5 hover:text-white">Fourth Link</a>
          <Link legacyBehavior href={"/Contact"}>
            <a className="mr-5 hover:text-white">Contact Us</a>
          </Link>
        </nav>

        <Link href={"/Auth/LogIn"}>
          <button className="mr-2 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <BiUserCircle className="text-xl text-white" />
          </button>
        </Link>

        <Link legacyBehavior href={"/Cart"}>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <BsFillCartCheckFill className="text-xl text-white" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
