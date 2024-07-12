'use client'
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
    const [text,setText]=useState(false)
  return (
    <section className=" relative">
      <div className="flex px-10 flex-row justify-between">
        <figure className=" bottom-4 ">
          <Image src="/Profile Pic.png" alt="Movie" width={300} height={300} className="absolute -top-40"/>
        </figure>
        <div className="flex flex-col   text-black">
          <h2 className="text-2xl font-bold flex items-start">
            John Doe <span className="pl-4">• </span> <span className="text-[#76A4CE] text-[15px] font-light pl-4">@johndoe</span>
          </h2>
          <p className="text-lg font-medium">
            Astrophotographer 🌌 <br />
            Gamer 👾
          </p>
        </div>
        <div>
            <button onClick={()=>{setText(!text)}} className="btn text-lg rounded-full bg-[#196AA0] text-white px-6">{text?"Followed" : "Follow"}</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
