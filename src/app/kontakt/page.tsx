import PhoneLink from "@/components/PhoneLink";
import Image from "next/image";
import workshop from '../../../public/workshop.png';

export default function ContactPage() {
    return (
        <>
            <main className="flex h-full flex-col justify-between p-16 md:py-24 md:px-36 text-slate-300">
                <header className="py-6">
                    <h1 className="text-3xl py-6">Kontakt</h1>
                    <section className="flex justify-between mt-8">
                        <div className="flex flex-col flex-1">
                            <h2 className="text-2xl mb-4">Napisz do nas</h2>
                            <form className="flex flex-col justify-center gap-4 max-w-md">
                                <label className="flex flex-col">
                                    <span className="mb-1">Imię</span>
                                    <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#21AFFF]" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-1">E-mail</span>
                                    <input type="email" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#21AFFF]" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-1">Wiadomość</span>
                                    <textarea className="p-8 min-h-2/3 max-h-52 border border-gray-300 rounded-md focus:outline-none focus:border-[#21AFFF]"></textarea>
                                </label>
                                <button type="submit" className="p-2 bg-[#21AFFF] text-white rounded-md hover:bg-[#1a8fcc]">Wyślij</button>
                            </form>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image 
                                src={workshop} 
                                alt="Niebieskie koło mercedesa" 
                                objectFit="cover" 
                                quality={70}
                                // width={250}
                                // height={400} 
                                className="rounded-md h-fit w-fit"
                            />
                        </div>
                    </section>
                </header>
                <section className="mt-8">
                    <h2 className="text-2xl mb-4">Jak do nas trafić</h2>
                    <div className="overflow-hidden rounded-lg shadow-lg mb-8">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.53269691614!2d18.535153176804446!3d54.524102272654275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda700be0ef2f7%3A0x2f5e7f4630f31790!2sAutomatik%20Serwis!5e0!3m2!1spl!2spl!4v1718263215571!5m2!1spl!2spl" 
                            width="100%" 
                            height="450" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            className="w-full"
                        ></iframe>
                    </div>
                </section>
            </main>
        </>
    );
}
