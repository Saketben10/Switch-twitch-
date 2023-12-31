import { currentUser, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { cn } from "@/lib/utils";

const Action =  async () => {
const user = await currentUser();


  return (
    <div className="flex items-center justify-end ml-4 gap-x-2 lg:ml-0" >{
        !user && (
            <div>
          <SignInButton> 
            <Button size={'sm'} variant ={"primary"} > <p className="font-semibold">Log In</p></Button>
          </SignInButton>
        </div>
        )
    } 
    {!!user && (
         <div className="flex items-center gap-x-4">
         <Button size={'sm'} variant={'ghost'} className="text-muted-foreground hover:text-primary" asChild >
           <Link href={`/u/${user.username}`}>
             <Clapperboard  className="h-5 w-5 lg:mr-2">
               <span className="hidden lg:block">dashboard</span>
             </Clapperboard>

           </Link>
         
         </Button>
         <UserButton afterSignOutUrl="/" />
       </div>
    )}
    </div>
  )
}

export default Action;