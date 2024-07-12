import Nav from "@/Components/Nav";
import Banner from "@/Components/Banner";
import Profile from "@/Components/Profile";
import Photo from "@/Components/Photo";
import Video from "@/Components/Vedio";
import Card from "@/Components/Card";
import "./globals.css";
export default function page() {
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
        <div className="flex md:flex-col flex-row gap-2 md:justify-start justify-center items-center ">
          {/* small */}
          <div className=" md:w-full w-1/2">
            <Photo />
          </div>
          <div className="md:w-full w-1/2">
            <Video />
          </div>
          
        </div>
        <div className="lg:hidden">
          <Card />
        </div>
      </div>
    </main>
  );
}
