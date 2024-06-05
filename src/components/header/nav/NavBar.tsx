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
        <nav className="bg-black text-white p-3 flex justify-between items-center min-h-[70px] gap-10">
          <header className='flex justify-center items-center'>
          <Image src="/icon.png" alt="AutomatikSerwis logo" width={25} height={25} className="m-2"/>
          <Link href="/" className="text-2xl font-sans">AutomatikSerwis</Link>
          </header>
        
          <ul className={`flex justify-between items-center gap-15 text-white ${isActive ? 'flex-col absolute top-[70px] left-0 w-full p-3 transition-all ease-in-out duration-700 bg-black' : 'hidden sm:flex'}`}>
            <li onClick={removeActive} className="my-4 mx-2">
              <Link href="/uslugi" className="text-lg no-underline">Usługi</Link>
            </li>
            <li onClick={removeActive} className="my-4 mx-2">
              <Link href="/kontakt" className="text-lg no-underline">Kontakt</Link>
            </li>
          </ul>
          <Hamburger isActive={isActive} toggleActive={toggleActiveClass} />
        </nav>
  );
}

export default Navbar;
