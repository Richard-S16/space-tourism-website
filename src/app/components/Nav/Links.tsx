import Link from "next/link";

export default function Links({ className }: { className: string }) {
  const links = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div
      className={`${className} hidden h-[96px] w-[450px] items-center justify-evenly self-stretch bg-[rgba(255,255,255,0.04)] font-BarlowCondensed text-sm tracking-[2.36px]`}
    >
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className="flex items-center self-stretch hover:border-b hover:border-b-color-3"
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
