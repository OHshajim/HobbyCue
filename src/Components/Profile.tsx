'use client'
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
    const [text,setText]=useState(false)
  return (
    <section className=" relative">
      <div className="flex sm:px-10 flex-row justify-between">
        <figure className=" bottom-4 lg:w-20 w-16 ">
          <Image src="/Profile Pic.png" alt="Movie" width={200} height={200} className="absolute lg:-top-32 lg:w-48 w-[100px] -top-20"/>
        </figure>
        <div className="inline  text-black ">
          <h2 className="sm:text-2xl text-sm font-bold flex items-start text-nowrap">
            John Doe <span className="pl-4">• </span> <span className="text-[#76A4CE] text-[15px] font-light pl-4">@johndoe</span>
          </h2>
          <p className="sm:text-lg text-xs font-medium">
            Astrophotographer 🌌 <br />
            Gamer 👾
          </p>
        </div>
        <div className="inline">
            <button onClick={()=>{setText(!text)}} className="btn text-lg rounded-full bg-[#196AA0] text-white sm:px-6 px-3">{text?"Followed" : "Follow"}</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
