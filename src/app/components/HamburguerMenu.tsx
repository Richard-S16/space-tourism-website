import Image from "next/image";

type HamburguerMenuTypes = {
  className: string;
};

export default function HamburguerMenu({ className }: HamburguerMenuTypes) {
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
