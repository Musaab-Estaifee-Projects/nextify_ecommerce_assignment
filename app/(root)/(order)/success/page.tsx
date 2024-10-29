import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuccessfulPaymentPage = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col">
      <Image
        src="/assets/order.svg"
        alt="success payment"
        width={300}
        height={300}
        // className="object-cover mx-auto"
      />
      <h1 className="mb-8 text-2xl mt-2 font-bold uppercase text-green-500">
        Order Successfully Fulfilled
      </h1>
      <Link href="/">
        <Button className="bg-primary-500 font-semibold">Go To Home</Button>
      </Link>
    </div>
  );
};

export default SuccessfulPaymentPage;
