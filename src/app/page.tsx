import Heading from "@/components/header/Heading";
import Navbar from "../components/header/nav/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-[70px]"> {/* Pushes content below the fixed navbar */}
        <Heading />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
     




     
        </main>
      </div>
    </>
  );
}
