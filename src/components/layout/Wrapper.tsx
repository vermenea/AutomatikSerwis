import { WrapperProps } from "@/util/types";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import OpenHours from "../open-hours/OpenHours";
import Navbar from "../header/nav/NavBar";



export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
    <Navbar/>
    <section className="bg-black">
      <Header />
      {children}
      </section>
      <Footer/>
      </>
  );
}
