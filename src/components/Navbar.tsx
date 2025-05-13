import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="shadow-[0_2px_3px_rgba(0,0,0,0.4)] h-[10vh] px-4 md:px-8 lg:px-16 xl:32 2xl:64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <div>
          <Link href="/">
            <div className="text-2xl tracking-wide font-bold text-found">Foundich</div>
          </Link>
        </div>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo2.png" alt="logo" width={35} height={35} />
            <div className="text-2xl tracking-wide font-bold  text-found">Foundich</div>
          </Link>
          <nav className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
