"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Useravatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/side-bar";
import Link from "next/link";

import { usePathname } from "next/navigation";

interface Useritemprops {
  username: String;
  isLive?: boolean;
  imageUrl: string;
}

export const Useritem = ({ username, isLive, imageUrl }: Useritemprops) => {
  const pathname = usePathname();

  const href = `/${username}`;

  const { collapsed } = useSideBar((state) => state);
  const isActive = href === pathname;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "h-12 w-full ",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link
        href={href}
        className={cn(
          "flex items-center w-full gap-x-4 ",
          collapsed && "justify-center"
        )}
      >
        <Useravatar username={username} imageUrl={imageUrl} isLive={isLive} />
      </Link>
    </Button>
  );
};
