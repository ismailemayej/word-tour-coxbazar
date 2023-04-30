import React from "react";

const Booking = () => {
  return (
    <div className="lg:flex items-center pt-(-3) text-white">
      <div className="grid place-content-center mx-5 p-5 lg:flex-auto lg:w-64 lg:ms-12">
        <h2 className=" text-4xl">COXBAZAR</h2>
        <p className="text-lg  text-left lg:w-80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          excepturi delectus necessitatibus ea, harum consectetur voluptas
          aliquam id voluptate neque reprehenderit sint impedit laudantium nobis
          facilis itaque ex illo vitae.
        </p>
      </div>

      <div className=" bg-white lg:flex-auto lg:w-px lg:m-48 m-6 rounded-md p-4">
        <h2 className="mt-2 text-left  mb-1 text-sm text-green-600">Origin</h2>
        <input
          type="text"
          placeholder="Dhaka"
          className="rounded border p-2 w-full"
        />
        <h2 className="mt-2 text-left  mb-1 text-sm text-green-600">
          Destination
        </h2>
        <input
          type="text"
          placeholder="Location"
          className="rounded border p-2 w-full"
        />

        <div className="mt-2 flex justify-between align-items-center">
          <p>
            <h2 className="text-left text-sm text-green-600">From</h2>
            <input
              type="text"
              placeholder="Location"
              className="rounded border p-2 w-40"
            />
          </p>
          <p>
            <h2 className="mb-1 text-left text-sm text-green-600">TO</h2>
            <input
              type="text"
              placeholder="Location"
              className="rounded border p-2 w-40"
            />
          </p>
        </div>

        <button className="border-1 bg-orange-500 text-white py-2 text-xl font-semibold w-full rounded-lg mt-1">
          START BOOKING
        </button>
      </div>
    </div>
  );
};

export default Booking;
