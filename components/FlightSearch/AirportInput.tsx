import React, { useState, useEffect } from "react";

interface AirportInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  fetchSuggestions: (query: string) => Promise<any[]>;
}

const AirportInput: React.FC<AirportInputProps> = ({
  label,
  value,
  onChange,
  fetchSuggestions,
}) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (value.length > 2) {
      const timer = setTimeout(() => {
        fetchSuggestions(value)
          .then(setSuggestions)
          .catch(() => setSuggestions([]));
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [value, fetchSuggestions]);

  return (
    <div className="relative">
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none"
        placeholder="City (e.g. DAC)"
        required
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full rounded-md shadow-md mt-1 max-h-60 overflow-y-auto border border-slate-300 bg-white">
          {suggestions.map((airport) => (
            <div
              key={airport.id}
              className="p-2 text-sm cursor-pointer border-b last:border-b-0 border-slate-300 hover:bg-slate-50"
              onMouseDown={() => {
                onChange(airport.iata);
                setShowSuggestions(false);
              }}
              role="option"
            >
              <div className="font-semibold">{airport.name}</div>
              <div className="font-medium">
                {airport.city}, {airport.country} ({airport.iata})
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportInput;
