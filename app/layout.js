import "@/app/_styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./_components/header/Header";
import HeaderTop from "./_components/header/HeaderAnnouncement";
import Footer from "./_components/Footer";
import { Providers } from "./../redux/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-primary-20  flex flex-col relative`}
      >
        <Providers>
          <HeaderTop />
          <Header />
          <div className="border-t-[1px] ">
            <main className="max-w-screen-2xl  mx-auto px-[40px] w-full ">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
