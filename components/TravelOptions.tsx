import React from "react";
import { Hotel, Car, TicketsPlane } from "lucide-react";

const TravelOptions = () => {
  const items = [
    { label: "Hotels", icon: Hotel, href: "#" },
    { label: "Car hire", icon: Car, href: "#" },
    { label: "Explore everywhere", icon: TicketsPlane, href: "#" },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-10">
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="cursor-pointer group flex w-full items-center gap-4 rounded-xl px-6 py-4 transition-all duration-300 text-white bg-[#07233B] hover:bg-[#0A345A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07233B]"
            >
              <span aria-hidden="true">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold leading-none">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TravelOptions;
