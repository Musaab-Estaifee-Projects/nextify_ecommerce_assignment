import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchDialog from "../Helper/SearchDialog";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-[11vh] sticky top-0 z-[1] bg-black shadow-2xl">
      <div className="flex items-center justify-between w-[93%] md:w-5/5 mx-auto h-full">
        {/* Website Logo */}
        <Link href="/" className="flex items-center justify-center gap-1">
          <Image src="/assets/cartLogo.svg" alt="logo" width={50} height={50} />
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
          {/* SignedIn User */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 max-xs:size-[26px]",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
          {/* !SignedIn User */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
