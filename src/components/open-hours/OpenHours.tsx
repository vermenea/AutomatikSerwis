import Image from "next/image";
export default function OpenHours(){
    return (
        <section className="flex flex-col justify-center items-center h-36 py-6 text-slate-300 bg-gradient-radial from-slate-900 to-black rounded-lg">
            <div className="relative flex flex-col justify-center items-center">
                <Image src="/clock.svg" alt="Niebieski zegar" height={25} width={25}/>
            <h2 className="text-2xl z-10">Jesteśmy otwarci od poniedziałku do piątku</h2>
            <p className="text-sm lg:text-xl text-transparent bg-gradient-to-r from-blue-700 via-[#21AFFF] to-[#5DC5FF] bg-clip-text z-10">8:00 - 17:00</p>
            </div>  
        </section>
    );
}
