import Image from "next/image";
import headingImage from '../../../public/headingimg.png';

export default function Heading(){
    return <section className="grid place-content-start h-svh">
        <Image src={headingImage} alt="Ujęcie koła mercedesa z boku na czarno białym tle" layout="fill" objectFit="cover"/>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <h1 className="z-20 p-6 text-left uppercase font-bold text-6xl text-white lg:text-7xl">
          <strong className="text-transparent bg-gradient-to-r from-blue-700 via-[#21AFFF] to-[#5DC5FF] bg-clip-text">twoje auto</strong><br />
          zasługuje<br />
          na najlepszą <br />
          opiekę
        </h1>
      </div>
    </section>
}