import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-home bg-cover">
      <div className="flex items-center justify-between">
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          className="ml-6 pt-6"
          width={40}
          height={40}
          quality={100}
        />
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="Hamburguer Menu"
          className="mr-6 mt-8"
          width={24}
          height={21}
          quality={100}
        />
      </div>

      <div className="mx-6 mt-12 text-center">
        <p className="font-BarlowCondensed tracking-[2.7px] text-color-2">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="mt-4 font-Bellefair text-[80px] leading-[100px]">SPACE</p>
        <p className="mt-4 font-Barlow text-[15px] text-color-2">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex justify-center">
        <button className="hover:shadow-exploreButton mt-20 h-[150px] w-[150px] rounded-full bg-color-3 font-Bellefair text-xl tracking-[1.25px] text-color-1 transition-shadow">
          EXPLORE
        </button
      </div>
    </div>
  );
}
