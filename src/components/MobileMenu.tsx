import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import hamburger from "../../public/hamburger-menu.svg";
import Image from "next/image";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Image src={hamburger} alt="hamburger" width={36} height={36} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col">
          <Link href="/" className="p-2 rounded-md hover:underline">
            Home
          </Link>
          <Link href="/profile" className="p-2 rounded-md hover:underline">
            Profile
          </Link>
          <Link href="/contact" className="p-2 rounded-md hover:underline">
            Contact
          </Link>
          <Link href="/user/hamza" className="p-2 rounded-md hover:underline">
            Profile
          </Link>
          <Link href="/counter" className="p-2 rounded-md hover:underline">
            Counter
          </Link>
          <Link href="/streaming" className="p-2 rounded-md hover:underline">
            Streaming
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
