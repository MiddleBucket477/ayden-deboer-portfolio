import { Orbitron, Chakra_Petch, Audiowide, Space_Grotesk, Inter, Archivo_Black, Geist_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  weight: ['400', '600', '700', '900'],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  weight: ['400', '500', '600', '700'],
  variable: "--font-chakra-petch",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: '400',
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
});

export const metadata = {
  title: "Ayden DeBoer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${chakraPetch.variable} ${audiowide.variable} ${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}