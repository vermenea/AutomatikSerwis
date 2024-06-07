import Image from "next/image";
import headingImage from '../../../public/headingimg.png';

export default function Heading(){
    return <section className="grid place-content-start h-full">
        <Image src={headingImage} alt="Ujęcie koła mercedesa z boku na czarno białym tle" style={{height: "100vh", width: "100vw", objectFit: "cover", objectPosition: "center"}} quality={75} priority/>
        <div className="absolute top-1/2 left-4 p-8 transform -translate-y-1/2">
        <h1 className="z-20 text-left uppercase font-bold text-5xl text-gray-300 lg:text-7xl py-2">
          <strong className="text-transparent bg-gradient-to-r from-blue-700 via-[#21AFFF] to-[#5DC5FF] bg-clip-text">twoje auto</strong><br />
          zasługuje<br />
          na najlepszą <br />
          opiekę
        </h1>
        <button className="px-12 py-2 bg-sky-500 rounded-md md:px-8 md:py-2 m-4 text-gray-300 uppercase">Umów się</button>
      </div>
    </section>
}