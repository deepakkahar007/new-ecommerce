import react from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Product from "../../models/Product";
import mongoose from "mongoose";

const All = ({ data }) => {
  const router = useRouter();
  const { all } = router.query;

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* all products */}
          {data.map((p) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link legacyBehavior href={`/product/solo/${p._id}`}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Computer loading"
                      className="object-cover object-center w-full h-full block"
                      src={`/computer-code.jpg`}
                    />
                  </a>
                </Link>
                <div className="mt-4">
                  <h2 className="text-white title-font text-lg font-medium">
                    {p.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGO_URL);
  let product = await Product.find({ category: context.query.all });
  return {
    props: {
      data: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default All;
