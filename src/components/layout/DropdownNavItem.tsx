import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
interface NavItem {
  label: string;
  href: string;
}

interface DropdownNavItemProps {
  label: string;
  items: NavItem[];
}

const DropdownNavItem = ({ label, items }: DropdownNavItemProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold">
          {label}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownNavItem;
