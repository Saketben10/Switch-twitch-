"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
   

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-10 gap-2">
      <h1 className=" flex font-bold text-3xl text-violet-700">
     only authenticated users can see this
      </h1>
 <UserButton afterSignOutUrl="/"  />

      
    </div>

  );
};

export default page;
