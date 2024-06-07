import Image from "next/image";
import blueImage from '../../../public/image.png';

export default function OfferSection(){
    return <section className="h-100vh w-full flex items-center py-20 text-gray-300">
        <div className="flex justify-evenly">
        <Image src={blueImage} alt="Niebieskie koło mercedesa" width={500} height={500} quality={70}/>
        <div className="flex flex-col p-8">
        <h2 className="py-6 text-2xl font-bold">O nas</h2>
        <p className=" font-semibold">Lorem ipsum sit amet, consectetur adipisicing elit. Dolore blanditiis ipsa sint perferendis ratione praesentium accusantium, aut recusandae? Accusantium eligendi impedit nihil, delectus ullam ab unde tempora quo incidunt eveniet.</p>
        <div className="flex py-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis ipsa sint perferendis ratione praesentium accusantium, aut recusandae? Accusantium eligendi impedit nihil, delectus ullam ab unde tempora quo incidunt eveniet.</p>
       <p className="ml-4">quod eum, aliquid adipisci, laboriosam similique non recusandae tempore magnam? Consequuntur numquam tenetur inventore soluta velit dolor magni mollitia optio nam possimus?</p>
        </div>
        <div className="flex justify-evenly items-center">
        <button className="px-6 py-2 bg-sky-500 rounded-md m-2 md:px-8 md:py-2 uppercase">Umów się</button>
        <button className="px-6 py-2 bg-sky-500 rounded-md m-2 uppercase">Sprawdź usługi</button>
        </div>
        </div>
        </div>
    </section>
}