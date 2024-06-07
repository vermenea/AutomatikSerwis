'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Hamburger from './Hamburger';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className='fixed top-0 z-10 w-full bg-black/50 backdrop-blur-md text-gray-300 p-3 font-semibold flex justify-between items-center min-h-[70px] gap-10'>
      <header className='flex justify-center items-center'>
        <Image src="/icon.png" alt="AutomatikSerwis logo" width={25} height={25} className="m-2"/>
        <Link href="/" className="text-2xl italic">AutomatikSerwis</Link>
      </header>
      
      <ul className={`flex justify-between items-center gap-15 text-gray-300 ${isActive ? 'flex-col absolute top-[70px] left-0 w-full p-3 transition-all ease-in-out duration-700 bg-black bg-opacity-50 backdrop-blur-lg' : 'hidden sm:flex'}`}>
        <li onClick={removeActive} className="my-4 mx-2">
          <Link href="/uslugi" className="no-underline relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#49BEFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Usługi</Link>
        </li>
        <li onClick={removeActive} className="my-4 mx-2">
          <Link href="/kontakt" className="no-underline relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#49BEFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Kontakt</Link>
        </li>
      </ul>
      <Hamburger isActive={isActive} toggleActive={toggleActiveClass} />
    </nav>
  );
}

export default Navbar;
