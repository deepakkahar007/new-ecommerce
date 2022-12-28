import React from "react";
import { useRouter } from "next/router";
import Product from "../../../models/Product";
import mongoose from "mongoose";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Slug = ({ data, addToCart }) => {
  const { name, price, desc, image, brand, qty } = data;
  const router = useRouter();
  const { slug } = router.query;

  function showToast() {
    toast.success("item added in cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="product image"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {brand}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />

                <span className="ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                <a>
                  <BsInstagram />
                </a>
                <a>
                  <BsFacebook />
                </a>
                <a>
                  <BsWhatsapp />
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
              <div className="flex ml-6 items-center">
                <h3>Quantity</h3>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                $ {price}
              </span>
              <button
                onClick={() => {
                  addToCart(slug, 1, price, name);
                  showToast();
                }}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add To Cart
              </button>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGO_URL);

  let product = await Product.findById(context.query.slug);
  return {
    props: {
      data: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default Slug;
