import Image from "next/image";
import ravenoil from "../../public/ravenoil.png";
import mercedes from "../../public/mercedes.svg.png";

export default function PartnersBanner(){
    return (
        <section className="flex flex-col justify-center items-center h-36 py-6 text-slate-300 bg-gradient-radial from-zinc-500 to-black rounded-lg">
            <div className="relative flex flex-col justify-evenly items-center">
            <h2 className="text-2xl z-10 p-2">Nasi partnerzy</h2>
            <div className="flex justify-evenly p-2">
            <Image src={ravenoil} alt="Ravenoil Logo" height={45} className="mr-10"/>
            <Image src={mercedes} alt="Mercedes-Benz Logo" height={55} className="ml-10"/>
            </div>
            </div>  
        </section>
    );
}


