"use client";

import { useSideBar } from "@/store/side-bar";
import { user } from "@prisma/client";
import { Useritem } from "./useritem";

interface Recommededprops {
  data: user[];
}

export const Recommeded = ({ data }: Recommededprops) => {
  const { collapsed } = useSideBar((state) => state);
  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">
            {data.map((user) => (
              <Useritem key={user.id}  username={user.username} isLive={false}  imageUrl={user.imageUrl}/> 
            ))}
          </p>
        </div>
      )}
    </div>
  );
};
