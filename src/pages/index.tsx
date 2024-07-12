import {  Lexend } from "next/font/google";
import Nav from "@/Components/Nav";
import Banner from "@/Components/Banner";
import Profile from "@/Components/Profile";

const inter = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  className="bg-base-100">
      <header>
        <Nav />
        <Banner />
      </header>
      <div className="container mx-auto bg-[#F6F6F6]">
        <Profile/>
      </div>
    </main>
  );
}
