import React, { useState } from "react";
import BrandIcon from "./BrandIcon";
import Logo1 from "../assets/images/icons/1.png";
import Logo2 from "../assets/images/icons/2.png";
import Logo3 from "../assets/images/icons/3.png";
import Logo4 from "../assets/images/icons/4.png";
import SectionTitle from "./SectionTitle";
import CoffeeCart from "./coffeeCart";
import { VscCoffee } from "react-icons/vsc";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // console.log(coffees);
  return (
    <>
      <div className="bg-banner min-h-[calc(100vh-120px)] bg-cover bg-center relative">
        <div className="md:w-[724px] absolute md:left-[50%] top-[50%] md:-translate-x-[50%] lg:-translate-x-[100px] -translate-y-[50%] p-5 flex justify-center items-start flex-col gap-6">
          <h3 className="text-[26px] md:text-[50px] font-normal font-rancho text-[#FFFFFF]">
            Would you like a Cup of Delicious Coffee?
          </h3>
          <p className="text-[13px] md:text-[16px] font-normal font-raleway text-[#FFFFFF]">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] text-[24px] font-normal font-rancho text-[#242222] py-2 px-5 border-2 border-[#E3B577] hover:bg-transparent hover:text-[#FFFFFF]">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 gap-6 md:gap-10 py-6 md:py-14">
          <BrandIcon
            logo={Logo1}
            title="Awesome Aroma"
            description="You will definitely be a fan of the design & aroma of your coffee"
          />
          <BrandIcon
            logo={Logo2}
            title="High Quality"
            description="We served the coffee to you maintaining the best quality"
          />
          <BrandIcon
            logo={Logo3}
            title="Pure Grades"
            description="The coffee is made of the green coffee beans which you will love"
          />
          <BrandIcon
            logo={Logo4}
            title="Proper Roasting"
            description="Your coffee is brewed by first roasting the green coffee beans"
          />
        </div>
      </div>
      <section className="my-[40px] md:my-[120px] mx-4 md:mx-0">
        <div className="flex justify-center items-center flex-col gap-4">
          <SectionTitle
            slug="--- Sip & Savor ---"
            title="Our Popular Products"
          />
          <Link to={"/addCoffee"}>
            <button className="bg-[#E3B577] text-[24px] font-normal font-rancho text-[#242222] py-1 px-3 border-2 border-[#E3B577] hover:bg-transparent flex items-center gap-2">
              Add Coffee
              <VscCoffee />
            </button>
          </Link>
        </div>
        <div className="w-full md:w-10/12 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {coffees.map((coffee) => (
            <CoffeeCart
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
