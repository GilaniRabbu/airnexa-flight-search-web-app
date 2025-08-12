import React from "react";

const PopularDestinations = () => {
  const destinations = [
    {
      from: "Dhaka",
      to: "Dubai",
      country: "UAE",
      price: 388,
      img: "./destinations/dubai.jpg",
    },
    {
      from: "Dhaka",
      to: "Bangkok",
      country: "Thailand",
      price: 306,
      img: "./destinations/bangkok.jpg",
    },
    {
      from: "Dhaka",
      to: "Kuala Lumpur",
      country: "Malaysia",
      price: 322,
      img: "./destinations/kuala-lumpur.jpg",
    },
    {
      from: "Dhaka",
      to: "Jeddah",
      country: "Saudi Arabia",
      price: 510,
      img: "./destinations/jeddah.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-10">
      <h2 className="text-2xl font-semibold text-primary-300 mb-1">
        Popular destinations from Dhaka
      </h2>
      <p className="mb-8 text-slate-600">
        These alluring destinations from Dhaka are picked just for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {destinations.map((dest, index) => (
          <DestinationsCard
            key={index}
            from={dest.from}
            to={dest.to}
            country={dest.country}
            price={dest.price}
            img={dest.img}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;

/* --------------- Destinations Card --------------- */
interface DestinationCardProps {
  from: string;
  to: string;
  country: string;
  price: number;
  img: string;
}

function DestinationsCard({
  from,
  to,
  country,
  price,
  img,
}: DestinationCardProps) {
  return (
    <div className="cursor-pointer rounded-xl overflow-hidden shadow transition-shadow duration-300 hover:shadow-lg bg-white">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={`${to}, ${country}`}
          width={400}
          height={256}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-sm flex items-center gap-1 text-gray-600">
          {from} <span>↔</span>
        </p>
        <h3 className="text-lg font-semibold leading-tight">
          {to}, {country}
        </h3>
        <p className="text-sm mt-1 text-gray-600">
          Tickets from <span className="font-bold">${price}</span>
        </p>
      </div>
    </div>
  );
}
