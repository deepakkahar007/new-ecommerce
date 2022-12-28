import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Delete = () => {
  const [_id, set_Id] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "pid") {
      set_Id(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    const data = { _id };
    console.log(data);
    let res = await fetch("http://127.0.0.1:3000/api/CRUD/Delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await res.json();
    set_Id("");
    toast.success("Item Deleted Successfully"),
      {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      };
  };

  return (
    <>
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
      <div className="bg-white bg-gray-900 text-white text-2xl text-center">
        <Link href={"/Admin/Create"} className="mx-4">
          Create
        </Link>
        <Link href={"/Admin/Delete"} className="mx-4">
          Delete
        </Link>
        <Link href={"/Admin/Update"} className="mx-4">
          Update
        </Link>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Delete product
          </h2>
          <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product ID
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="pid"
                  id="pid"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Product ID"
                  required=""
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Delete Product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Delete;
