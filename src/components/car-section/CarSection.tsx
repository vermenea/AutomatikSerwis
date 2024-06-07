import Image from "next/image";

export default function CarSection(){
    return <section className="min-h-100vh w-full flex items-center justify-center py-20 bg-slate-300 rounded-lg">
        <div className="flex flex-col justify-evenly items-center m-2 text-black">
       <h2 className="py-6 text-2xl font-bold">Auta które naprawiamy</h2>

       <p>Zajmujemy się szeroko pojętą 
mechaniką samochdową, diagnostyką  
i serwisem eksploatacyjnym</p>
        
<div className="flex justify-evenly items-center text-gray-300">
        <button className="px-12 py-2 bg-sky-500 rounded-md md:px-8 md:py-2 m-4 uppercase">Umów się</button>
        <button className="px-12 py-2 bg-sky-500 rounded-md m-4 uppercase">Sprawdź usługi</button>
        </div>
        </div>
    </section>
}