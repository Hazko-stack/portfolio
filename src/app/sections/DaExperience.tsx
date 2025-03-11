import Image from "next/image";
import { Grotesk400, Grotesk700, Ubuntu } from "../utils/fonts";

export default function DaExperience() {
  return (
    <div className="bg-gradient-to-b to-njblue-200 from-gray-50 pb-14">
      <div className="relative w-full">
        <Image
          src="/assets/image/ring_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-60 select-none pointer-events-none w-full opacity-10"
        />
        <Image
          src="/assets/image/ring_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-96 select-none pointer-events-none w-full opacity-10"
        />
        <Image
          src="/assets/image/smoky_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-24 select-none pointer-events-none w-full opacity-25"
        />
        <Image
          src="/assets/image/smoky_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-72 select-none pointer-events-none w-full opacity-10"
        />
      </div>
      <div className=" text-white grid grid-cols-5 px-4">
        <Image
          src="/assets/image/experience_glow.png"
          width={1000}
          height={500}
          alt="experience_title"
          className="w-full -rotate-12 col-start-1 col-span-4 -translate-y-14 select-none pointer-events-none md:w-96 lg:translate-x-10 sm:w-2/3"
          priority
        />
      </div>
      <div className="gap-y-2 px-8 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 md:place-items-start lg:px-32">
      <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>Bug Hunter</p>
          <p className={`${Grotesk400.className} text-sm`}>
            Independent, focusing on government websites and platforms like HackerOne, Bugcrowd
          </p>
          <p className={`${Ubuntu.className} text-sm`}>2025 - Now</p>
          <p className={`${Ubuntu.className} text-sm`}>February 2025- Now</p>
        </div>
      </div>
    </div>
  );
}
