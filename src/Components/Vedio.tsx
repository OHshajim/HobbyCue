import Image from "next/image";


const Video = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-black py-3">Videos</h3>
      <div className="">
        <Image src="/Video Feature (1).png" alt="photo" width={600} height={640} />
      </div>
      <p className="text-[#196AA0] font-medium text-base text-end mt-2 lg:mb-5">More +</p>
    </div>
  );
};

export default Video;
