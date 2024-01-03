import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

export const getRecommended = async () => {
  const recommendedUsers = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return recommendedUsers;
};
