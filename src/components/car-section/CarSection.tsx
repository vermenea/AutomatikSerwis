import Image from "next/image";
import Button from "../ui/Button";

const icons = [
    { src: "/bmw.png", alt: "BMW" },
    { src: "/mercedes.png", alt: "Mercedes" },
    { src: "/voklsvagen.png", alt: "Volkswagen" },
    { src: "/audi.png", alt: "Volkswagen" },
    { src: "/peugeot.png", alt: "Volkswagen" },
    { src: "/kia.png", alt: "Volkswagen" },
    { src: "/mitsubishi.png", alt: "Volkswagen" },
    { src: "/opel.png", alt: "Opel" },
]
export default function CarSection(){
    return <section className="min-h-100vh w-full md:w-2/3 flex items-center justify-center py-6 m-16">
        <div className="flex flex-col justify-center items-center text-slate-300 text-center">
       <h2 className="py-6 text-xl font-bold lg:text-2xl">Auta, które naprawiamy</h2>

       <p className="text-sm lg:text-xl px-2">Zajmujemy się szeroko pojętą 
mechaniką samochdową, diagnostyką  
i serwisem eksploatacyjnym.</p>
<div className="flex flex-wrap justify-center items-center py-6">
                    {icons.map(({ src, alt }, index) => (
                        <div key={index} className="flex items-center justify-center relative w-24 h-24 md:w-36 md:h-36">
                            <Image 
                                src={src} 
                                alt={alt} 
                                layout="fill" 
                                objectFit="contain" 
                                quality={80}
                                className="rounded-xl p-1"
                            />
                        </div>
                    ))}
                </div>
        
<div className="flex flex-col justify-evenly items-center">
    <p className=" py-6">Nie widzisz marki swojego samochodu?</p>
       <Button title="zadzwoń i zapytaj"/>
        </div>
        </div>
    </section>
}