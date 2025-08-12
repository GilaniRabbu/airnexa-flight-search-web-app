import axios from "axios";

const API_BASE = "https://test.api.amadeus.com";

let accessToken = "";
let tokenExpiration = 0;

export const getAccessToken = async () => {
  // Check if token is still valid
  if (accessToken && Date.now() < tokenExpiration) {
    return accessToken;
  }

  const res = await axios.post(
    `${API_BASE}/v1/security/oauth2/token`,
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.NEXT_PUBLIC_AMADEUS_API_KEY!,
      client_secret: process.env.NEXT_PUBLIC_AMADEUS_API_SECRET!,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  accessToken = res.data.access_token;
  tokenExpiration = Date.now() + res.data.expires_in * 1000;
  return accessToken;
};

export const searchFlights = async (params: {
  origin: string;
  destination: string;
  date: string;
  adults: number;
  children: number;
  travelClass: string;
}) => {
  const token = await getAccessToken();

  const requestParams: any = {
    originLocationCode: params.origin,
    destinationLocationCode: params.destination,
    departureDate: params.date,
    adults: params.adults,
    travelClass: params.travelClass,
    currencyCode: "USD",
    max: 50,
  };

  if (params.children > 0) {
    requestParams.children = params.children;
  }

  const res = await axios.get(`${API_BASE}/v2/shopping/flight-offers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: requestParams,
  });

  return res.data;
};

// New function for airport suggestions
export const getAirportSuggestions = async (query: string) => {
  const token = await getAccessToken();

  const res = await axios.get(`${API_BASE}/v1/reference-data/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      subType: "AIRPORT",
      keyword: query,
      page: { limit: 5 },
    },
  });

  return res.data.data.map((airport: any) => ({
    id: airport.iataCode,
    name: airport.name,
    iata: airport.iataCode,
    city: airport.address.cityName,
    country: airport.address.countryName,
  }));
};
