import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();
    const {photo, name, price, quantity, category, supplier, details}=coffeeDetails
    return (
      <div className="bg-[url(src/assets/images/more/11.png)] bg-no-repeat">
        <Link
          className="px-28 font-bold text-3xl text-[#374151] flex gap-3 items-center my-12"
          to="/"
        >
          <GoArrowLeft /> Back to home
        </Link>
        <div className="w-[70%] mx-auto bg-[#F5F4F1] flex justify-around items-center py-8 px-4 my-12 rounded-sm">
          <div>
            <img className="w-[350px] h-[450px]" src={photo} alt="" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#331A15] my-8">Niceties</h3>
            <h2 className="font-semibold text-[#5C5B5B]">
              <span className="font-bold text-black">Name:</span>
              {name}
            </h2>
            <h2 className="font-semibold text-[#5C5B5B]">
              <span className="font-bold text-black">Price:</span>
              {price}
            </h2>
            <h2 className="font-semibold text-[#5C5B5B]">
              <span className="font-bold text-black">Quantity:</span>
              {quantity}
            </h2>
            <h2 className="font-semibold text-[#5C5B5B]">
              <span className="font-bold text-black">Supplier:</span>
              {supplier}
            </h2>
            <h2 className="font-semibold text-[#5C5B5B]">
              <span className="font-bold text-black">Category:</span>
              {category}
            </h2>
            <h2 className="font-semibold text-[#5C5B5B]">
              <span className="font-bold text-black">Details:</span>
              {details}
            </h2>
          </div>
        </div>
      </div>
    );
};

export default CoffeeDetails;
