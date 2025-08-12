import React from "react";
import AirportInput from "./AirportInput";

interface SearchFormProps {
  origin: string;
  setOrigin: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  departureDate: string;
  setDepartureDate: (value: string) => void;
  adults: number;
  setAdults: (value: number) => void;
  children: number;
  setChildren: (value: number) => void;
  travelClass: string;
  setTravelClass: (value: string) => void;
  loading: boolean;
  handleSearch: (e: React.FormEvent) => void;
  getAirportSuggestions: (query: string) => Promise<any[]>;
}

const SearchForm: React.FC<SearchFormProps> = ({
  origin,
  setOrigin,
  destination,
  setDestination,
  departureDate,
  setDepartureDate,
  adults,
  setAdults,
  children,
  setChildren,
  travelClass,
  setTravelClass,
  loading,
  handleSearch,
  getAirportSuggestions,
}) => {
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-3xl mx-auto p-4 md:p-6 mb-8 rounded-2xl shadow-lg border border-slate-300 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <AirportInput
          label="From"
          value={origin}
          onChange={setOrigin}
          fetchSuggestions={getAirportSuggestions}
        />

        <AirportInput
          label="To"
          value={destination}
          onChange={setDestination}
          fetchSuggestions={getAirportSuggestions}
        />

        <div>
          <label
            htmlFor="departureDate"
            className="block text-sm font-semibold mb-1"
          >
            Departure
          </label>
          <input
            type="date"
            id="departureDate"
            aria-label="Departure date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="adults" className="block text-sm font-semibold mb-1">
            Adults
          </label>
          <select
            id="adults"
            value={adults}
            aria-label="Number of adults"
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Adult" : "Adults"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="children"
            className="block text-sm font-semibold mb-1"
          >
            Children
          </label>
          <select
            id="children"
            value={children}
            aria-label="Number of children"
            onChange={(e) => setChildren(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none"
          >
            {[0, 1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Child" : "Children"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="travelClass"
            className="block text-sm font-semibold mb-1"
          >
            Class
          </label>
          <select
            id="travelClass"
            value={travelClass}
            aria-label="Travel class"
            onChange={(e) => setTravelClass(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none"
          >
            <option value="ECONOMY">Economy</option>
            <option value="PREMIUM_ECONOMY">Premium Economy</option>
            <option value="BUSINESS">Business</option>
            <option value="FIRST">First Class</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="cursor-pointer w-full font-medium py-2 px-4 rounded-md transition-all duration-300 text-white bg-primary-100 disabled:opacity-50"
      >
        {loading ? "Searching..." : "Search Flights"}
      </button>
    </form>
  );
};

export default SearchForm;
