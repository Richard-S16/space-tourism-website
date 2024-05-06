import Link from "next/link";

export default function ButtonExplore() {
  return (
    <Link
      className="grid h-[150px] w-[150px] place-items-center rounded-full bg-color-3 font-Bellefair text-xl tracking-[1.25px] text-color-1 transition-shadow hover:shadow-explore-button sm:h-[242px] sm:w-[242px] sm:text-[32px] sm:tracking-[2px] xl:h-72 xl:w-72"
      href="/destination"
    >
      EXPLORE
    </Link>
  );
}
