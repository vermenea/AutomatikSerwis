import { WrapperProps } from "@/util/types";
import Header from "../header/Header";



export default function Wrapper({ children }: WrapperProps) {
  return (
    <section className="bg-black">
      <Header />
      {children}
    </section>
  );
}
