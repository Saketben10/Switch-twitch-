"use client"

import { cn } from "@/lib/utils";
import {  useSideBar } from "@/store/side-bar";
 

interface Containerprops {
  children: React.ReactNode;
}

export const Container = ({ children }: Containerprops) => {
  const { collapsed, onCollapse, onExpand } =   useSideBar((state) => state);
  

 
 
  
  return (
    <div
      className={cn(
        "flex-1 h-full",
        collapsed ? "ml-[70px]  " : "ml-[70px] lg:ml-60"
      )}
    >
      {children}
    </div>
  );
};
