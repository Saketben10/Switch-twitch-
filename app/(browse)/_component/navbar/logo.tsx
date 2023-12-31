
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="  flex items-center gap-x-3 hover:opacity-75 transition">
        <div className=" shrink-0 mr-4 bg-white rounded-full p-1  lg:mr-0 lg:shrink">
          <Image  src= "/spooky.svg" alt={'productlogo'}  height={30} width={30} />
        </div>
        <div className={cn(font.className , "hidden lg:block")}>
          <p className="text-lg font-semibold">let's play</p>
          <p className="text-xs text-muted-foreground ">In Switch</p>
        </div>

        
      </div>
    </Link>
  );
};
