import React from "react";

const PopularFlights = () => {
  const flightRoutes = [
    {
      id: 1,
      from: "London",
      to: "Istanbul",
      image: "./flights/istanbul.jpg",
    },
    {
      id: 3,
      from: "London",
      to: "Munich",
      image: "./flights/munich.jpg",
    },
    {
      id: 4,
      from: "London",
      to: "Madrid",
      image: "./flights/madrid.jpg",
    },
    {
      id: 5,
      from: "Istanbul",
      to: "London",
      image: "./flights/london.jpg",
    },
    {
      id: 6,
      from: "London",
      to: "Athens",
      image: "./flights/athens.jpg",
    },
    {
      id: 7,
      from: "London",
      to: "Paris",
      image: "./flights/paris.jpg",
    },
    {
      id: 8,
      from: "London",
      to: "Lisbon",
      image: "./flights/lisbon.jpg",
    },
    {
      id: 10,
      from: "London",
      to: "Rome",
      image: "./flights/rome.jpg",
    },
    {
      id: 11,
      from: "London",
      to: "Prague",
      image: "./flights/prague.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-10">
      <h2 className="text-2xl font-semibold text-primary-300 mb-1">
        Popular flights
      </h2>
      <p className="mb-8 text-slate-600">
        Check these popular routes on AirNexa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {flightRoutes.map((r) => (
          <div
            key={r.id}
            className="cursor-pointer flex items-stretch overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            role="button"
            aria-label={`${r.from} to ${r.to}`}
            tabIndex={0}
          >
            <div className="shrink-0">
              <img
                src={r.image}
                alt={`${r.from} to ${r.to}`}
                width={176}
                height={112}
                className="object-cover w-44 h-24 md:h-28"
              />
            </div>
            <div className="w-px bg-slate-300" aria-hidden="true" />
            <div className="flex flex-1 items-center px-4 lg:px-6">
              <div className="text-sm lg:text-base font-semibold">
                {r.from} {"\u2194"} {r.to}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFlights;
