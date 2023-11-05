import ButtonExplore from "./components/ButtonExplore";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="h-screen bg-home-mobile bg-cover sm:bg-home-tablet">
      <Nav />

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
        <ButtonExplore />
      </div>
    </div>
  );
}
