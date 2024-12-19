
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <header className="w-full border-b-2">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-10 py-4 h-auto sm:h-24">
        {/* Logo Section */}
        <h1 className="text-2xl  sm:text-xl font-bold uppercase text-black cursor-pointer">Greemind</h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
          <Link
            href="/"
            className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
          >
            About
          </Link>
          <Link
            href="/categories"
            className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
          >
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="hidden sm:flex items-center gap-4">
          <IoCartOutline className="text-xl md:text-2xl cursor-pointer hover:text-blue-500" />
          <IoPersonOutline className="text-xl md:text-2xl cursor-pointer hover:text-blue-500" />
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <FiMenu className="text-2xl cursor-pointer hover:text-blue-500" />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col items-start gap-4 text-sm md:text-base">
                <Link
                  href="/"
                  className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
                >
                  About
                </Link>
                <Link
                  href="/categories"
                  className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
                >
                  Categories
                </Link>
                <Link
                  href="/contact"
                  className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 px-4 py-2 rounded"
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-4 mt-4">
                <IoCartOutline className="text-xl md:text-2xl cursor-pointer hover:text-blue-500" />
                <IoPersonOutline className="text-xl md:text-2xl cursor-pointer hover:text-blue-500" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
