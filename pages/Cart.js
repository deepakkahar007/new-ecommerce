import React from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Cart = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <>
      {Object.keys(cart).length == 0 && <div>Not items found in cart</div>}
      {/* cart component */}

      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {Object.keys(cart).length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {Object.keys(cart).map((k) => {
              return (
                <div
                  key={k}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      {/* 
                Add image 
                <img
                  className="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                /> */}
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cart[k].name}</span>
                      <span className="text-red-500 text-xs">Apple</span>

                      <button
                        className="flex font-semibold hover:text-red-500 text-gray-500 text-xs mt-2"
                        onClick={() => {
                          removeFromCart(k, 1, cart[k].name, cart[k].price);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <AiFillMinusCircle
                      className="text-xl mt-1"
                      onClick={() => {
                        removeFromCart(k, 1, cart[k].name, cart[k].price);
                      }}
                    />
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={cart[k].qty}
                    />
                    <AiFillPlusCircle
                      className="text-xl mt-1"
                      onClick={() => {
                        addToCart(k, 1, cart[k].name, cart[k].price);
                      }}
                    />
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $ {cart[k].price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $ {cart[k].price * cart[k].qty}
                  </span>
                </div>
              );
            })}

            <Link href={"/"} className="flex ">
              <BsFillArrowLeftCircleFill className="mx-2 mt-1 text-l" />
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                {Object.keys(cart).length} Items
              </span>
              <span className="font-semibold text-sm">$ {subTotal}</span>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$ {subTotal * 1.8}</span>
              </div>
              <button
                onClick={clearCart}
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-2xl my-6"
              >
                Clear Cart
              </button>

              <Link href={"/CheckOut"}>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-2xl">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
