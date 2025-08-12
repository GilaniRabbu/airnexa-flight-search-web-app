import React from "react";

interface Segment {
  departure: { at: string; iataCode: string };
  arrival: { at: string; iataCode: string };
  duration: string;
  numberOfStops: number;
  carrierCode: string;
  flightNumber: string;
  aircraft: { code: string };
}

interface Itinerary {
  segments: Segment[];
}

interface FlightCardProps {
  offer: { price: { total: string }; itineraries: Itinerary[] };
  adults: number;
  children: number;
  formatDuration: (d: string) => string;
  formatTime: (d: string) => string;
  formatDate: (d: string) => string;
  formatStops: (s: Segment[]) => string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  offer,
  adults,
  children,
  formatDuration,
  formatTime,
  formatDate,
  formatStops,
}) => {
  const isoDurationToMinutes = (d: string) => {
    const m = d.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    return parseInt(m?.[1] || "0", 10) * 60 + parseInt(m?.[2] || "0", 10);
  };

  const totalMinutes = offer.itineraries.reduce(
    (t, it) =>
      t +
      it.segments.reduce((s, seg) => s + isoDurationToMinutes(seg.duration), 0),
    0
  );

  const totalDuration = `${Math.floor(totalMinutes / 60)}h ${
    totalMinutes % 60
  }m`;

  return (
    <div className="max-w-3xl mx-auto rounded-xl shadow overflow-hidden bg-white">
      <div className="px-6 py-4 flex justify-between items-center border-b border-slate-300">
        <div className="flex items-center gap-2 text-slate-600">
          <span className="text-sm font-medium text-primary-200">
            {formatStops(offer.itineraries[0].segments)}
          </span>
          →<span className="text-sm">{totalDuration}</span>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-primary-100">
            ${offer.price.total}
          </p>
          <p className="text-xs text-slate-600">
            Total for {adults + children} passenger
            {adults + children > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="px-6 py-5">
        {offer.itineraries.map((itinerary, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3 text-slate-800">
              {idx === 0 ? "Outbound" : "Return"} •{" "}
              <span className="font-normal text-slate-600">
                {formatDate(itinerary.segments[0].departure.at)}
              </span>
            </h3>

            <div className="relative pl-4 space-y-4 border-l-2 border-dashed border-slate-300">
              {itinerary.segments.map((seg, segIdx) => (
                <div
                  key={segIdx}
                  className="relative pb-2 border-b-2 border-dashed border-slate-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {formatTime(seg.departure.at)} –{" "}
                        {formatTime(seg.arrival.at)}
                      </p>
                      <p className="text-sm text-slate-600">
                        {seg.departure.iataCode} → {seg.arrival.iataCode}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-800">
                        {seg.carrierCode} {seg.flightNumber}
                      </p>
                      <p className="text-xs text-slate-600">
                        {formatDuration(seg.duration)} • {seg.aircraft.code}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="cursor-pointer w-full font-medium py-3 transition-all duration-300 text-white bg-primary-100">
        Select Flight
      </button>
    </div>
  );
};

export default FlightCard;
