import Image from "next/image";
import workshop from '../../../public/workshop.png';
import Button from "../ui/Button";

export default function OfferSection(){
    return <section className="h-100vh w-full flex items-center my-16 text-gray-300">
     
                   
             
        <div className="flex flex-col justify-evenly">
        <h2 className="py-4 text-3xl font-bold">O nas</h2>
        <Image 
                        src={workshop} 
                        alt="Niebieskie koło mercedesa" 
                        
                        objectFit="cover" 
                        quality={70}
                        width={300}
                        height={300} 
                        className="rounded-md"
                    />
       
        <div className="flex flex-col py-4">
       
        <p className=" font-semibold">Lorem ipsum sit amet, consectetur adipisicing elit. Dolore blanditiis ipsa sint perferendis ratione praesentium accusantium, aut recusandae? Accusantium eligendi impedit nihil, delectus ullam ab unde tempora quo incidunt eveniet.</p>
        <div className="flex py-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis ipsa sint perferendis ratione praesentium accusantium, aut recusandae? Accusantium eligendi impedit nihil, delectus ullam ab unde tempora quo incidunt eveniet.</p>
       <p className="ml-4">quod eum, aliquid adipisci, laboriosam similique non recusandae tempore magnam? Consequuntur numquam tenetur inventore soluta velit dolor magni mollitia optio nam possimus?</p>
        </div>
        <div className="flex justify-evenly items-center">
        <Button title="Umów się"/>
        <Button title="Sprawdź usługi"/>
        </div>
        </div>
        </div>
    </section>
}