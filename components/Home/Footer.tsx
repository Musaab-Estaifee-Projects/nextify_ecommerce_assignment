import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="w-4/5 border-b-[1.2px] pb-4 border-b-slate-300 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1st Element */}
        <div>
          <h1 className="text-[20px] uppercase font-semibold pb-3">
            Nextify Shop
          </h1>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur a ullam veniam odit aliquid temporibus. Omnis sit
            magnam ipsa, eius molestias maiores odit delectus optio quia cum
            rerum tempora similique?
          </p>
          <p className="text-base mt-2 opacity-90">
            ( +963 ) 912 345678 - nextify@gmail.com
          </p>
        </div>
        {/* 2nd Element */}
        <div className="lg:mx-auto">
          <h1 className="footer-title font-bold">Information</h1>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Shipping Policy</p>
          <p className="footer-link">About us</p>
        </div>
        {/* 3rd Element */}
        <div className="lg:mx-auto">
          <h1 className="footer-title font-bold">Account</h1>
          <p className="footer-link">Dashboard</p>
          <p className="footer-link">Track Orders</p>
          <p className="footer-link">Account Details</p>
        </div>
        {/* 4th Element */}
        <div className="lg:mx-auto">
          <h1 className="footer-title font-bold">Shop</h1>
          <p className="footer-link">Best Sellers</p>
          <p className="footer-link">Latest Products</p>
          <p className="footer-link">Sell Products</p>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm">© Copyright Nextify reserved 2024</p>
        <Image
          src="/assets/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto max-sm:mt-3"
        />
      </div>
    </div>
  );
};

export default Footer;
