import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee)


    // send coffee data to the db


    fetch("http://localhost:3000/coffees", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          console.log('after adding coffee to db', data)
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
          
        }
    })



    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const photo = form.photo.value;
    // const details = form.details.value;
    // console.log(name, chef, supplier, taste, category, photo, details);

  }


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
          <form onSubmit={handleAddCoffee} className="px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl font-semibold">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
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