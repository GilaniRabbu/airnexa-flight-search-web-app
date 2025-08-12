"use client";
import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does AirNexa work?",
      answer:
        "AirNexa is a smart flight search platform that compares prices from hundreds of airlines and travel agencies. You simply enter your departure, destination, and dates, and we’ll show you the best available options in seconds.",
    },
    {
      question: "How can I find the cheapest flight using AirNexa?",
      answer:
        "Use our flexible date search to explore fares across a range of days. Filter by price, duration, or airline to quickly spot the most budget-friendly options. You can also set a Price Alert to get notified when fares drop.",
    },
    {
      question: "Where should I book a flight to right now?",
      answer:
        "That depends on your preferences! Check our ‘Top Deals’ section for trending destinations with great prices, or use the ‘Explore Anywhere’ tool to see the most affordable flights from your city right now.",
    },
    {
      question: "Do I book my flight with AirNexa?",
      answer:
        "AirNexa helps you find the best flight deals, then connects you to the airline or travel agency to complete your booking securely. We don’t sell tickets directly — you book with our trusted partners.",
    },
    {
      question: "What happens after I have booked my flight?",
      answer:
        "Once you book with the airline or agency, they’ll send you a confirmation email with your ticket details. Any changes, cancellations, or special requests should be handled directly with them.",
    },
    {
      question: "Does AirNexa do hotels too?",
      answer:
        "Yes! AirNexa also compares hotel prices from top booking sites. You can book your accommodation alongside your flight or separately.",
    },
    {
      question: "What about car hire?",
      answer:
        "We’ve got you covered. AirNexa partners with leading car rental companies to help you compare prices and book your rental at your destination.",
    },
    {
      question: "What’s a Price Alert?",
      answer:
        "A Price Alert notifies you when the price of a flight changes. Just choose your route and travel dates, and we’ll send you an update whenever fares drop or rise.",
    },
    {
      question: "Can I book a flexible flight ticket?",
      answer:
        "Yes. Many airlines and agencies offer flexible tickets with free changes or cancellations. Use our filters to find flights with flexible booking policies.",
    },
    {
      question: "Can I book flights that emit less CO₂?",
      answer:
        "Absolutely. AirNexa highlights flights with lower CO₂ emissions, often operated by newer aircraft or with more direct routes, so you can travel more sustainably.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const mid = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, mid);
  const rightColumn = faqs.slice(mid);

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-10">
      <h2 className="text-2xl font-semibold text-primary-300 mb-4">
        Booking flights with AirNexa
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        {[leftColumn, rightColumn].map((column, colIdx) => (
          <div key={colIdx} className="space-y-2">
            {column.map((faq, idx) => {
              const globalIndex = colIdx * mid + idx;
              const isOpen = openIndex === globalIndex;
              return (
                <div
                  key={globalIndex}
                  className="cursor-pointer border-b border-slate-300"
                  onClick={() => toggleIndex(globalIndex)}
                >
                  <div className="py-3 font-semibold flex justify-between items-center gap-4">
                    <span>{faq.question}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {isOpen && (
                    <p className="pb-4 text-slate-600">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
