import Image from "next/image";
import blueImage from '../../../public/image.png';
import checkIcon from '../../../public/checkicon.png'; 
import Button from "../ui/Button";
import { ChildrenProps } from "@/util/types";

// Define a functional component for list items
const ListItem = ({ children } : ChildrenProps) => (
    <li className="flex items-center py-1">
        <Image src={checkIcon} alt="Check icon" width={20} height={20} className="mr-2" />
        {children}
    </li>
);

export default function ServicesSection() {
    return (
        <section className="h-full w-full flex flex-wrap my-16 text-gray-300 rounded-lg bg-cover bg-center"
            style={{ 
                backgroundImage: `url('${blueImage.src}')`, 
            }}>
            <div className="flex flex-col justify-around bg-opacity-75 rounded-lg p-6"> 
            
                <h2 className="text-3xl font-bold py-6">Szeroki zakres napraw</h2>
                <p className="font-semibold py-4">
                    Zajmujemy się szeroko pojętą mechaniką samochdową, diagnostyką i serwisem eksploatacyjnym.
                </p>
                <ul className="space-y-2 mr-10 py-4">
                    <ListItem>wymiana oleju</ListItem>
                    <ListItem>naprawa skrzyń automatycznych</ListItem>
                    <ListItem>elektryka samochodowa</ListItem>
                    <ListItem>diagnostyka</ListItem>
                    <ListItem>wulkanizacja</ListItem>
                </ul>
                <div className="flex justify-start items-center">
                    <Button title="więcej" href="/uslugi"/>
                </div>
            </div>
        </section>
    );
}
