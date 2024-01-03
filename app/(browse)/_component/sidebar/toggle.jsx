"use client";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import {   useSideBar } from "@/store/side-bar";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } =  useSideBar((state) => state);

 
  const label = collapsed ? "expand" : "collapse";

  return (
    <>
      {!collapsed ? (
        <div className="p-5 pl-6 mb-2 flex justify-between items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side={"right"} asChild>
          <Button size={"sm"} variant={"ghost"} onClick={onCollapse}>
            <ArrowLeftFromLine />
          </Button>
          </Hint>
        </div>
      ) : (
        <div  className="lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="left" asChild>
            <Button size= "sm" variant='ghost' onClick={onExpand} className="sm:hidden" >
                <ArrowRightFromLine/>
            </Button>
            </Hint>
        </div>
      )}
    </>
  );
};
