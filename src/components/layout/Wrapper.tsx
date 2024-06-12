import { WrapperProps } from "@/util/types";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import OpenHours from "../open-hours/OpenHours";



export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
    <section className="bg-black">
      <Header />
      {children}
      </section>
      <Footer/>
      </>
  );
}
