import React from "react";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, photo, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-around items-center bg-[#F5F4F1] w-lg mx-auto">
      <div>
        <img src={photo} alt="" />
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Name: {name}</h2>
        <p className="font-medium">Price: {price} taka </p>
        <p className="font-medium">Quantity: {quantity} </p>
      </div>

      <div className="join join-vertical space-y-4">
        <Link to={`/coffees/${_id}`}>
          <button className="btn join-item bg-[#D2B48C] text-white rounded-sm ">
            <FaEye />
          </button>
        </Link>
        <button className="btn join-item bg-[#3C393B] text-white rounded-sm ">
          <FaPencil />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn join-item bg-[#EA4744] text-white rounded-sm "
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
