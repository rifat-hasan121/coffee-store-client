import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name, supplier, category, photo, details, price, quantity } = coffee;
  const handleUpdateCoffee = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const updateCoffee = Object.fromEntries(formData.entries());
   

      fetch(`http://localhost:3000/coffees/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      })
          .then(res => res.json())
          .then(data => {
              if (data.matchedCount) {
                Swal.fire({
                  title: "Update Complete!",
                  icon: "success",
                  draggable: true,
                });
              }
      })

  };
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
            Update Coffee
          </h3>
        </div>
        <form onSubmit={handleUpdateCoffee} className="px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl font-semibold">
                Name
              </legend>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl font-semibold">
                Price
              </legend>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full"
                placeholder="Enter coffee price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl font-semibold">
                Supplier
              </legend>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl font-semibold">
                Quantity
              </legend>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="Enter coffee quantity"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl font-semibold">
                Category
              </legend>
              <input
                type="text"
                name="category"
                defaultValue={category}
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
                name="photo"
                defaultValue={photo}
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
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
            ></textarea>
          </fieldset>
          <input
            className=" w-full mt-6 bg-[#D2B48C] py-3 text-[#331A15] text-xl font-bold border-3 border-[#331A15] rounded-sm cursor-pointer"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
