import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/Components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-base-100">
      <header className=" ">
        <Nav/>
      </header>
    </main>
  );
}
