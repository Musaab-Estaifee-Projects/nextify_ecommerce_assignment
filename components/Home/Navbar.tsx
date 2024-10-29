import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchDialog from "../Helper/SearchDialog";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";

const Navbar = () => {
  return (
    <div className="h-[10vh] sticky top-0 z-[1] bg-black shadow-2xl">
      <div className="flex items-center justify-between w-[93%] md:w-5/5 mx-auto h-full">
        {/* Website Logo */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/vercel.svg" alt="logo" width={22} height={22} />
          <h1 className="text-xl font-bold flex items-center justify-center tracking-wide">
            <p className="text-primary-500">Next</p>ify
          </h1>
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Dialog */}
          <SearchDialog />
          <HeartIcon size={26} cursor={"pointer"} />
          {/* Shopping Cart Button */}
          <ShoppingCartButton />
          {/* User Button */}
          <UserIcon size={26} cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
