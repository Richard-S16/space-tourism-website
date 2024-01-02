"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Links({ className }: { className: string }) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pathname);
  const links = ["home", "destination", "crew", "technology"];

  return (
    <div className="hidden items-center sm:flex">
      <div className="absolute z-10 xl:ml-[-32%] xl:w-1/3 xl:bg-[rgba(255,_255,_255,_0.25)] xl:p-[1px] 2xl:ml-[-48%] 2xl:w-1/2" />
      <div className={className}>
        {links.map((link, index) => (
          <Link
            key={link}
            href="#"
            className={`${
              "/" + link === currentPage
                ? "border-b-[3px] border-b-color-3"
                : "hover:border-b-color-3 hover:border-opacity-50"
            } flex items-center self-stretch hover:border-b-[3px] xl:mr-[50px]`}
          >
            <span>
              <b>0{index} </b>
              {link.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
