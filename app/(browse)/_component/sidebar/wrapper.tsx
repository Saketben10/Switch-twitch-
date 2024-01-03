"use client"

import { cn } from "@/lib/utils";
import {  useSideBar } from "@/store/side-bar";

interface WrapperProps  {
    children : React.ReactNode ;
}
 
export const Wrapper = ({children} :WrapperProps )=>{

    

    const {collapsed} = useSideBar((state)=> state);

    return (
        <aside className={cn("fixed left-0 h-full w-60 bg-background border-r border-[#2D2E35] z-50" , collapsed && "w-[70px]")}>
            {children}
        </aside>
    )

}