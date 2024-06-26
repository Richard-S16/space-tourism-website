"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type LinksTypes = { className: string };

export default function Links({ className }: LinksTypes) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pathname);
  const links = ["home", "destination", "crew", "technology"];

  return (
    <div className="hidden items-center sm:flex">
      <div className="absolute z-10 xl:ml-[-32%] xl:w-1/3 xl:bg-[rgba(255,_255,_255)] xl:p-[1px] 2xl:ml-[-38%] 2xl:w-2/5" />
      <div className={className}>
        {links.map((link, index) => (
          <Link
            key={link}
            href="#"
            className={`${
              "/" + link === currentPage
                ? "border-b-[3px] border-b-color-3"
                : "border-b-[3px] border-b-transparent hover:border-b-color-3 hover:border-opacity-50"
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
