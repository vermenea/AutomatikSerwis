import Heading from "@/components/header/Heading";
import Navbar from "../components/header/nav/NavBar";
import OfferSection from "@/components/offer/OfferSection";
import CarSection from "@/components/car-section/CarSection";
import ServicesSection from "@/components/offer/Services";
import OpenHours from "@/components/open-hours/OpenHours";

export default function Home() {
  return (
    <>
        <Heading />
        <main className="flex h-full flex-col items-center justify-between p-16 md:py-24 md:px-36">
          <ServicesSection/>
        <CarSection/>
        </main>
        <OpenHours/>
        <section className="flex h-full flex-col items-center justify-between p-16 md:py-24 md:px-36">
        <OfferSection/>
        </section>
    </>
  );
}