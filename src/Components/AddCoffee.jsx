import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';

const AddCoffee = () => {
    return (
      <div className="bg-[url(src/assets/images/more/11.png)] bg-no-repeat pb-20 ">
        <Link
          className="px-28 font-bold text-3xl text-[#374151] flex gap-3 items-center my-12"
          to="/"
        >
          <GoArrowLeft /> Back to home
        </Link>
        <div className="w-[1320px] mx-auto bg-[#F4F3F0] py-10 rounded-sm">
          <div className="text-center px-32">
            <h3 className="text-6xl font-medium text-[#374151] py-4">
              Add New Coffee
            </h3>
            <p className="opacity-70 mb-6">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form className="px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Name
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Chef
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee chef"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Supplier
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Taste
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Category
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter coffee category"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Photo
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter photo URL"
                />
              </fieldset>
            </div>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend text-xl font-semibold">
                Details
              </legend>
              <textarea
                className="textarea w-full h-24"
                placeholder="Enter coffee details"
              ></textarea>
            </fieldset>
            <input
              className=" w-full mt-6 bg-[#D2B48C] py-3 text-[#331A15] text-xl font-bold border-3 border-[#331A15] rounded-sm cursor-pointer"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    );
};

export default AddCoffee;