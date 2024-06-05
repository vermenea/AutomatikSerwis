import { WrapperProps } from "@/util/types";
import Header from "../header/Header";



export default function Wrapper({ children }: WrapperProps) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
