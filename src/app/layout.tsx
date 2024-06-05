import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "../style/globals.css";
import Wrapper from "@/components/layout/Wrapper";

const poppins = Poppins({ weight: ["400", "600"], 
subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Automatikserwis - Warsztat Samochodowy i Naprawa Skrzyń Automatycznych",
  description: "Automatikserwis to warsztat samochodowy oferujący kompleksowe usługi naprawy i serwisu pojazdów oraz naprawy skrzyń automatycznych. Profesjonalna obsługa, nowoczesny sprzęt, gwarancja jakości.",
  keywords: [
    "warsztat samochodowy",
    "naprawa skrzyń automatycznych",
    "serwis samochodowy",
    "diagnostyka pojazdów",
    "automatyczne skrzynie biegów",
    "mechanik samochodowy",
    "konserwacja samochodów",
    "naprawa aut"
  ],
  robots: "index, follow",
  icons: '/icon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Wrapper>
        {children}
        </Wrapper>
       </body>
    </html>
  );
}
