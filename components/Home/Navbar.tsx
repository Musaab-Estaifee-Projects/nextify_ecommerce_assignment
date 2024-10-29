import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchDialog from "../Helper/SearchDialog";

const Navbar = () => {
  return (
    <div className="h-[9vh] sticky top-0 z-[1] bg-black shadow-2xl">
      <div className="flex items-center justify-between w-[95%] md:w-5/5 mx-auto h-full">
        {/* Website Logo */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/vercel.svg" alt="logo" width={22} height={22} />
          <h1 className="text-xl font-bold">Nextify</h1>
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Box */}
          <SearchDialog />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
