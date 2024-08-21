import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="flex gap-2 justify-between mb-2 p-3">
      <div className="invisible md:visible">
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
      </div>
      <div className="visible md:invisible">
        <MobileMenu />
      </div>
    </div>
  );
};
