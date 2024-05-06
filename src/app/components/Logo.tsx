import Image from "next/image";

type LogoTypes = { className: string };

export default function Logo({ className }: LogoTypes) {
  return (
    <Image
      src="/assets/shared/logo.svg"
      alt="Logo"
      className={className}
      width={40}
      height={40}
      quality={100}
    />
  );
}
