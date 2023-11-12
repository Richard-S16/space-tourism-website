"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Links({ className }: { className: string }) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pathname);
  const links = ["home", "destination", "crew", "technology"];

  return (
    <div
      className={`${className} hidden h-[96px] w-[450px] items-center justify-evenly self-stretch bg-[rgba(255,255,255,0.04)] font-BarlowCondensed text-sm tracking-[2.36px]`}
    >
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className={`${
            "/" + link === currentPage
              ? "border-b-[3px] border-b-color-3"
              : "hover:border-b-color-3 hover:border-opacity-50"
          } flex items-center self-stretch hover:border-b-[3px]`}
        >
          {link.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
