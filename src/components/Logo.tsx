import Link from 'next/link';
import Image from 'next/image';
export default function Logo(){
    return  <header className='flex justify-center items-center font-semibold italic'>
    <Image src="/icon.png" alt="AutomatikSerwis logo" width={25} height={25} className="m-2"/>
    <Link href="/" className="text-2xl italic">AutomatikSerwis</Link>
  </header>
}