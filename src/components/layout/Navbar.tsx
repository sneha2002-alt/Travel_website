import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/index";
import Button from "../Button";
import DropdownNavItem from "./DropdownNavItem";
import MobileMenuSheet from "./NavSheet";

const Navbar = () => {
  return (
    <nav className="w-full flexBetween max-container padding-container relative z-30 pt-4 pb-2 border-b-2 border-gray-100">
      <div className="relative">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={400}
            height={400}
            className="lg:w-36 md:w-28 w-20"
          />
        </Link>
      </div>
      <ul className="w-full hidden h-full gap-12 lg:flexCenter">
        {NAV_LINKS.map((link) =>
          link.items ? (
            <DropdownNavItem
              key={link.key}
              label={link.label}
              items={link.items}
            />
          ) : (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          )
        )}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* Mobile Menu Sheet */}
      <MobileMenuSheet />
    </nav>
  );
};

export default Navbar;
