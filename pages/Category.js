import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`product/${"mouse"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Mouse Image"
                  className="object-cover object-center w-full h-full block"
                  src="/logitech.webp"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOUSE
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All Mouse
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"keyboard"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Keyboard Image"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/71uMIw2hDqL._SL1500_.jpg"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                KEYBOARD
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All Keyboards
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"cpu"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Computer loading"
                  className="object-cover object-center w-full h-full block"
                  src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Intel-Rocker-Lake-2-e1615908186584.jpg"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CPU
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All CPU
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"cabinet"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Computer loading"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/515qC3Er6YL._SL1000_.jpg"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Cabinet
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All Cabinets
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"monitor"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Computer loading"
                  className="object-cover object-center w-full h-full block"
                  src="https://images.samsung.com/is/image/samsung/p6pim/in/lf27t350fhwxxl/gallery/in-t35f-407326-407326-lf27t350fhwxxl-530837071?$650_519_PNG$"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Monitor
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All Monitors
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"ram"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Computer loading"
                  className="object-cover object-center w-full h-full block"
                  src="https://assets-prd.ignimgs.com/2022/06/22/ram-2-1655868000270.jpg"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                RAM
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All Rams
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"ssd"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Computer loading"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/71zr9dm+ANL._SX355_.jpg"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                SSD
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All SSD
              </h2>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link legacyBehavior href={`/product/${"motherboard"}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Computer loading"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/91ZpekDlH3L._SX450_.jpg"
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Motherboard
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                All Motherboard
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
