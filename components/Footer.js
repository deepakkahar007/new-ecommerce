import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">E-commerce</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2020 E-commerce — @Project
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <BsInstagram className="mx-1 text-l" />
          <BsFacebook className="mx-1 text-l" />
          <BsTwitter className="mx-1 text-l" />
          <BsWhatsapp className="mx-1 text-l" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
