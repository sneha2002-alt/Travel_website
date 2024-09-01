import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/index";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full flexBetween max-container padding-container relative z-30 py-4">
      <div className="relative w-[10%]">
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" width={400} height={400} />
        </Link>
      </div>
      <ul className="w-full hidden h-full gap-12 lg:flexCenter">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="md:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
