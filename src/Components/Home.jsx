import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
    const inicialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(inicialCoffees);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 my-12">
        {coffees.map((coffee) => (
          <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
