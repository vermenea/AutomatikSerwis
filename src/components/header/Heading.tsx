'use client'
import Image from "next/image";
import headingImage from '../../../public/headingimg.png';
import Button from "../ui/Button";
import { useEffect, useState } from "react";

export default function Heading(){
  const [currentYear, setCurrentYear] = useState<number>(1); 
  const targetYear = 25; 


useEffect(() => {
  const interval = setInterval(() => {
      setCurrentYear(prevYear => {
          if (prevYear < targetYear) {
              return prevYear + 1;
          } else {
              clearInterval(interval);
              return prevYear;
          }
      });
  }, 50); 

  return () => clearInterval(interval); 
}, [targetYear]);
  
    
  
    return <section className="grid place-content-start h-full">
        <Image src={headingImage} alt="Ujęcie koła mercedesa z boku na czarno białym tle" style={{height: "100vh", width: "100vw", objectFit: "cover", objectPosition: "center"}} quality={100} priority/>
        <div className="absolute top-1/2 left-4 p-12 md:p-24 transform -translate-y-1/2">
        <h1 className="z-20 text-left uppercase font-bold text-5xl text-gray-300 lg:text-7xl py-2">
          <strong className="text-transparent bg-gradient-to-r from-blue-700 via-[#21AFFF] to-[#5DC5FF] bg-clip-text">twoje auto</strong><br />
          zasługuje<br />
          na najlepszą <br />
          opiekę
        </h1>
        <Button title="umów się"/>
        <div className="mt-20 text-3xl text-gray-300">
        <p className="text-6xl font-bold">{`${currentYear}+`}</p>
        <p>lat doświadczenia</p>
      </div>
      </div>
    </section>
}