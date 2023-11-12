import Links from "./Links";
import HamburguerMenu from "./HamburguerMenu";
import Logo from "./Logo";

export default function Nav() {
  return (
    <div className="absolute flex w-full items-center justify-between">
      <Logo />
      <HamburguerMenu className="sm:hidden" />
      <Links className="sm:flex" />
    </div>
  );
}
