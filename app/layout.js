import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import LenisSmooth from "../components/LenisSmooth";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// Load Poppins font with swap and preload
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "PEN School System | Paradigm Educational Network",
  description:
    "PEN School System (Paradigm Educational Network) provides SNC-aligned Pre-School and Senior School education, Maria Montessori apparatus, Jolly Phonics, STEAM, coding, and Pakistan's most comprehensive Future Skills program.",
  icons: {
    icon: "/penlogo.png",
    shortcut: "/penlogo.png",
    apple: "/penlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <TopBar />
        <LenisSmooth />
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
