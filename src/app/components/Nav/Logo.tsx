import Image from "next/image";

export default function Logo({ className }: { className: string }) {
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
