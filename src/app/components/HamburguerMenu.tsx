import Image from "next/image";

export default function HamburguerMenu({ className }: { className: string }) {
  return (
    <Image
      src="/assets/shared/icon-hamburger.svg"
      alt="Hamburguer Menu"
      className={className}
      width={24}
      height={21}
      quality={100}
    />
  );
}
