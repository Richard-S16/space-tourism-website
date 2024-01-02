import Links from "./Links";
import HamburguerMenu from "./HamburguerMenu";
import Logo from "./Logo";

export default function Nav() {
  return (
    <div className="absolute flex w-full items-center justify-between lg:mt-10">
      <Logo className="ml-6 mt-6 sm:ml-10 sm:mt-0 sm:w-[48px] lg:ml-14" />
      <HamburguerMenu className="mr-6 mt-8 sm:hidden" />
      <Links className="hidden h-[96px] w-[450px] items-center justify-evenly self-stretch bg-[rgba(255,255,255,0.04)] font-BarlowCondensed text-sm tracking-[2.36px] sm:flex xl:w-[830px] xl:justify-normal xl:pl-[123px] xl:text-base xl:backdrop-blur-xl" />
    </div>
  );
}
