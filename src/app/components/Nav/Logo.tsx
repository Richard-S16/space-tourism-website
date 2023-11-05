import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/shared/logo.svg"
      alt="Logo"
      className="ml-6 mt-6 sm:w-[48px]"
      width={40}
      height={40}
      quality={100}
    />
  );
}
