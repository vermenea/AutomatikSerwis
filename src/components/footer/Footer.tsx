'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import footerBg from '../../../public/metalbg.jpg';
import phone from '../../../public/phone-call.svg';
import mail from '../../../public/mail.svg';
import clock from '../../../public/clock.svg';
import Logo from "../Logo"; 

export default function Footer() {
  // State to hold the current year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer 
      className="w-full text-slate-300 py-8" 
      style={{ 
        backgroundImage: `url('${footerBg.src}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 text-left">
        
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-0">
          <div className="flex flex-col items-center mb-2">
            <Logo />
            <Link href="http://www.automatikserwis.pl" target="_blank" rel="noopener noreferrer" className="text-base mt-2 md:mt-0 hover:underline text-sky-200">
              www.automatikserwis.pl
            </Link>
          </div>
        </div>

        <address className="flex flex-col items-start md:items-end text-sm not-italic">
          <div className="flex items-center mb-2">
            <Link href="mailto:automatikserwis@wp.pl" className="hover:underline">
              automatikserwis@wp.pl
            </Link>
            <Image src={mail} alt="Email icon" width={20} height={20} className="ml-2"/>
          </div>
          <div className="flex items-center mb-2">
            <Link href="tel:+48604693207" className="hover:underline">
              +48 604-693-207
            </Link>
            <Image src={phone} alt="Phone icon" width={20} height={20} className="ml-2"/>
          </div>
          <div className="flex items-center">
            <p>pon - pt  8:00-17:00</p>
            <Image src={clock} alt="Clock icon" width={20} height={20} className="ml-2"/>
          </div>
        </address>
      </div>
      <div className="mt-4 border-t border-gray-500 pt-4 text-center">
        <p className="text-sky-300">AutomatikSerwis &copy; {currentYear} | Powered by vermenea</p>
      </div>
    </footer>
  );
}
