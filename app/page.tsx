import FAQ from "@/components/FAQ";
import FlightSearch from "@/components/FlightSearch/FlightSearch";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PopularDestinations from "@/components/PopularDestinations";
import PopularFlights from "@/components/PopularFlights";
import TravelOptions from "@/components/TravelOptions";

const page = () => {
  return (
    <main>
      <Header />
      <FlightSearch />
      <PopularDestinations />
      <TravelOptions />
      <PopularFlights />
      <FAQ />
      <Footer />
    </main>
  );
};

export default page;
