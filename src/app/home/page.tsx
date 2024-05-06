import ButtonExplore from "../components/ButtonExplore";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div className="h-screen bg-home-mobile bg-repeat-round sm:bg-home-tablet lg:bg-home-desktop xl:grid xl:h-screen xl:place-items-center 3xl:bg-cover">
      <div className="xl:mt-16 xl:flex xl:gap-96 2xl:mb-16 2xl:mt-0">
        <HomeSection />
        <div className="mt-20 flex justify-center pb-14 sm:mt-[156px] sm:pb-[84px] xl:self-end xl:pb-0">
          <ButtonExplore />
        </div>
      </div>
    </div>
  );
}
