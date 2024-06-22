import Image from "next/image";
import workshop from '../../../public/workshop.png';
import Button from "../ui/Button";

export default function OfferSection(){
    return <section className="h-100vh w-full flex flex-col my-16 text-gray-300">
        <div className="flex justify-start">
        <h2 className="py-4 text-3xl font-bold">O nas</h2>
        </div>   
        <div className="flex justify-between">
        
       <div className="flex flex-col justify-around">
       <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis ipsa sint perferendis ratione praesentium accusantium, aut recusandae? Accusantium eligendi impedit nihil, delectus ullam ab unde tempora quo incidunt eveniet.Jdeowjfweofejfeowifjofijefoweifjofijefoenfwoneojfnwejfnowenfewowfjefewjoejwfijewofjefijoe</p>
        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis ipsa sint perferendis ratione praesentium accusantium, aut recusandae? Accusantium eligendi impedit nihil, delectus ullam ab unde tempora quo incidunt eveniet.</p>
        </div>
        <div className="flex justify-start">
        <Image 
                        src={workshop} 
                        alt="Niebieskie koło mercedesa" 
                        
                        objectFit="cover" 
                        quality={70}
                        // width={400}
                        // height={400} 
                        className="rounded-m h-full"
                    />
        </div>
       </div>
       
        <div className="flex justify-start items-center">
        <Button title="Umów się" href="/kontakt"/>
        <Button title="Sprawdź usługi" href="/uslugi"/>
        </div>
       
    </section>
}