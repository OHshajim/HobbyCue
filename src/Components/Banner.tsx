import Image from "next/image";

const Banner = () => {
    return (
        <section>
            <div className=" w-full">
                <Image src="/Profile Background.png" alt="back profile" width={2000} height={400}/>
            </div>
        </section>
    );
};

export default Banner;