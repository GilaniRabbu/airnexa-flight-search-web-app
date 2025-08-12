"use client";
import React, { useState, useCallback, useMemo } from "react";
import { searchFlights, getAirportSuggestions } from "@/lib/amadeus";
import SearchForm from "./SearchForm";
import FlightCard from "./FlightCard";
import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";

const formatDuration = (duration: string) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?/);
  if (!match) return duration;

  const hours = match[1] ? `${match[1].replace("H", "")}h ` : "";
  const minutes = match[2] ? `${match[2].replace("M", "")}m` : "";
  return `${hours}${minutes}`;
};

const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const formatStops = (segments: any[]) => {
  const stops = segments.length - 1;
  if (stops === 0) return "Direct";
  return `${stops} stop${stops > 1 ? "s" : ""}`;
};

const FlightSearch = () => {
  // Form state
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelClass, setTravelClass] = useState("ECONOMY");

  // Results state
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 4;
  const indexOfLastResult = useMemo(
    () => currentPage * resultsPerPage,
    [currentPage]
  );
  const indexOfFirstResult = useMemo(
    () => indexOfLastResult - resultsPerPage,
    [indexOfLastResult]
  );
  const currentResults = useMemo(
    () => results.slice(indexOfFirstResult, indexOfLastResult),
    [results, indexOfFirstResult, indexOfLastResult]
  );
  const totalPages = useMemo(
    () => Math.ceil(results.length / resultsPerPage),
    [results]
  );

  const handleSearch = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      setResults([]);
      setCurrentPage(1);

      try {
        const flightData = await searchFlights({
          origin,
          destination,
          date: departureDate,
          adults,
          children,
          travelClass,
        });

        setResults(flightData.data || []);
      } catch (err) {
        setError(
          "Failed to fetch flights. Please check your search criteria and try again."
        );
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [origin, destination, departureDate, adults, children, travelClass]
  );

  // Reset handler
  const handleReset = useCallback(() => {
    setResults([]);
    setOrigin("");
    setDestination("");
    setDepartureDate("");
    setAdults(1);
    setChildren(0);
    setTravelClass("ECONOMY");
    setCurrentPage(1);
    setError("");
  }, []);

  const goToPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-10">
      <h1 className="text-3xl text-primary-300 font-bold tracking-tight mb-6">
        Find Your Perfect <br className="block sm:hidden" /> Flight in AirNexa
      </h1>

      <SearchForm
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        travelClass={travelClass}
        setTravelClass={setTravelClass}
        loading={loading}
        handleSearch={handleSearch}
        getAirportSuggestions={getAirportSuggestions}
      />

      {error && (
        <div className="mb-6 px-4 py-2 text-sm rounded-xl border border-red-200 text-red-700 bg-red-50">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mb-6 px-6 py-4 text-sm rounded-xl flex gap-4 flex-col sm:flex-row justify-between items-center border border-slate-300">
          <span className="font-medium">{results.length} flights found</span>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>
              Showing {Math.min(indexOfLastResult, results.length)} of{" "}
              {results.length} results
            </span>
            <button
              onClick={handleReset}
              className="cursor-pointer font-medium text-primary-100"
            >
              Reset Search
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {loading ? (
          <LoadingSkeleton />
        ) : results.length > 0 ? (
          currentResults.map((offer, index) => (
            <FlightCard
              key={`${offer.id || index}_${currentPage}`}
              offer={offer}
              adults={adults}
              children={children}
              formatDuration={formatDuration}
              formatTime={formatTime}
              formatDate={formatDate}
              formatStops={formatStops}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>

      {results.length > resultsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      )}
    </section>
  );
};

export default FlightSearch;
