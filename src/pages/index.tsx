import { Lexend } from "next/font/google";
import Nav from "@/Components/Nav";
import Banner from "@/Components/Banner";
import Profile from "@/Components/Profile";
import Photo from "@/Components/Photo";
import Video from "@/Components/Vedio";
import Card from "@/Components/Card";

const inter = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-base-100">
      <header>
        <Nav />
        <Banner />
      </header>
      <div className="container mx-auto bg-[#F6F6F6] flex lg:flex-row flex-col gap-10 mb-10 p-5">
        <div className="flex-1">
          <Profile />
          <div className="lg:block hidden">
            <Card />
          </div>
        </div>
        <div className="">
          <Photo />
          <Video />
        </div>
        <div className="lg:hidden">
          <Card />
        </div>
      </div>
    </main>
  );
}
