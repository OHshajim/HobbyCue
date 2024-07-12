import Image from "next/image";

const Nav = () => {
  return (
    <div className="bg-[#1B1C1E]">
      <div className="navbar bg-[#1B1C1E] container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost ">
            <Image src="/Logo.png" alt="logo" width={150} height={50} />
          </a>
        </div>
        <div className="flex-none gap-3">
          <div className="w-10 rounded-full ">
            <Image
              alt="user photo"
              src="/Search.png"
              width={50}
              height={50}
            />
          </div>
          <div className="w-10 rounded-full">
            <Image
              alt="user photo"
              src="/Create.png"
              width={50}
              height={50}
            />
          </div>
          <div className="w-10 rounded-full">
            <Image
              alt="user photo"
              src="/Message.png"
              width={50}
              height={50}
            />
          </div>
          <div className="w-10 rounded-full">
            <Image
              alt="user photo"
              src="/Notification.png"
              width={50}
              height={50}
            />
          </div>
          <div className="w-10 rounded-full">
            <Image
              alt="user photo"
              src="/Profile Pic (1).png"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
