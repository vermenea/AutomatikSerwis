import Link from "next/link";
import { ButtonProps } from "@/util/types";

export default function Button({title,href} : ButtonProps){
    return  <Link href={href || "#"} className="px-4 py-2 bg-sky-500 rounded-md m-2 uppercase text-gray-300 md:px-8 md:py-2" >{title}</Link>
}