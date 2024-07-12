import Image from "next/image";

const Photo = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-black py-3">Photo</h3>
      <div className="grid grid-cols-2 grid-rows-2">
        <Image src="/Rectangle 2.png" alt="photo" width={300} height={200} />
        <Image src="/Rectangle 1.png" alt="photo" width={300} height={200} />
        <Image src="/Rectangle 4.png" alt="photo" width={300} height={200} />
        <Image src="/Rectangle 3.png" alt="photo" width={300} height={200} />
      </div>
      <p className="text-[#196AA0] font-medium text-base text-end mt-2 lg:mb-5">More +</p>
    </div>
  );
};

export default Photo;
