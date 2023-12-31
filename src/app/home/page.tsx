import ButtonExplore from "../components/ButtonExplore";

export default function Home() {
  return (
    <div className="lg:bg-home-desktop bg-home-mobile bg-repeat-round sm:bg-home-tablet">
      <div className="mx-6 pt-[120px] text-center sm:mx-auto sm:max-w-[450px] sm:pt-[202px]">
        <p className="font-BarlowCondensed tracking-[2.7px] text-color-2 sm:text-[20px]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="my-4 font-Bellefair text-[80px] leading-[100px] sm:my-6 sm:text-[150px] sm:leading-[150px]">
          SPACE
        </p>
        <p className="font-Barlow text-[15px] text-color-2 sm:text-[16px] sm:leading-7">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="mt-20 flex justify-center pb-12 sm:mt-[156px] sm:pb-[84px]">
        <ButtonExplore />
      </div>
    </div>
  );
}
