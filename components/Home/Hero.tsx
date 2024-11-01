import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-pattern w-full h-[calc(100vh-30vh)] flex justify-center flex-col">
      {/* Hero Grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div className="">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase">
            <span className="text-primary-500">Next</span>ify{" "}
            <span className="text-rose-600">Special</span> Offer up to{" "}
            <span className="text-green-500">60%</span> off
          </h1>
          <p className="text-base lg:text-lg text-white text-opacity-70 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            eligendi doloribus quaerat culpa ea, tempore reprehenderit officiis
            iste odit reiciendis aut ducimus quidem cumque possimus nisi
            deleniti, temporibus nostrum aliquid?
          </p>
          <div className="flex mt-6 items-center space-x-4">
            {/* <Button className="bg-blue-700" size={"lg"}>
              Shop Now
            </Button> */}
            <Link
              href="#products"
            >
              <Button className="bg-blue-700" size={"lg"}>
                Shop Now
              </Button>
            </Link>
            <Button className="bg-green-600" size={"lg"}>
              Explore More
            </Button>
          </div>
        </div>
        {/* Image Stuff */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <Image
            src="/assets/hero4.svg"
            width={500}
            height={500}
            alt="Hero Image"
            className="lg:h-[50%] lg:w-[50%] xl:w-[70%] xl:h-[70%] rounded-full border-[7px] border-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
