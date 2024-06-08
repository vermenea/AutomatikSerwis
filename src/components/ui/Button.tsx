import { ReactNode } from "react";

interface childrenProps {
    title: string;
}

export default function Button({title} : childrenProps){
    return  <button className="px-4 py-2 bg-sky-500 rounded-md m-2 uppercase text-gray-300 md:px-8 md:py-2">{title}</button>
}