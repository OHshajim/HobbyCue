import Image from "next/image";

const Video = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-black py-3">Videos</h3>
      <div className="max-w-[600px]">
        <Image
          src="/Video Feature (1).png"
          alt="photo"
          width={600}
          height={640}
          className="hover:-translate-y-3  delay-300 duration-300 "
        />
        <div className="flex items-center justify-center gap-2 mt-3 max-w-[600px] w-full">
          <Image
            src="/Video (2).png"
            alt="photo"
            width={300}
            height={200}
            
            className="hover:-translate-y-3  delay-300 duration-300 "
          />
          <Image
            src="/Video.png"
            alt="photo"
            width={350}
            height={200}
            className="hover:-translate-y-3  delay-300 duration-300 "
          />
          <Image
            src="/Video (1).png"
            alt="photo"
            width={300}
            height={200}
            className="hover:-translate-y-3  delay-300 duration-300 "
          />
        </div>
      </div>
      <p className="text-[#196AA0] font-medium text-base text-end mt-2 lg:mb-5">
        More +
      </p>
    </div>
  );
};

export default Video;
