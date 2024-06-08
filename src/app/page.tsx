import Heading from "@/components/header/Heading";
import Navbar from "../components/header/nav/NavBar";
import OfferSection from "@/components/offer/OfferSection";
import CarSection from "@/components/car-section/CarSection";
import ServicesSection from "@/components/offer/Services";

export default function Home() {
  return (
    <>
      <Navbar />
        <Heading />
        <main className="flex h-full flex-col items-center justify-between p-12 md:p-24">
          <ServicesSection/>
        <CarSection/>
          <OfferSection/>
        </main>
    
    </>
  );
}
