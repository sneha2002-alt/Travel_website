import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { NAV_LINKS } from "@/data/index";
import Image from "next/image";

const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </SheetTrigger>
      <SheetContent side="right" className="w-[75%] sm:w-[50%]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4 mt-4">
          {NAV_LINKS.map((link) =>
            link.items ? (
              <li key={link.key} className="text-md font-normal">
                {link.label}
              </li>
            ) : (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-md font-normal text-gray-900 hover:text-gray-700"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSheet;
