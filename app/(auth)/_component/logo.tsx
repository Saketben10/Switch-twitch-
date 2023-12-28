import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className={cn("bg-white  rounded-full mb-1")}>
        <Image src="/spooky.svg" alt="productLogo" height={80} width={80} />
      </div>
      <div className={cn("  mb-3 gap-y-2", font.className)}>
        <p className="font-semibold">let&apos;s play</p>
        <p className="font-bold">In Switch</p>
      </div>
    </div>
  );
};
