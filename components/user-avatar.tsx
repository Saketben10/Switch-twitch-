import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",

      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarprops extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  isLive?: boolean;
  username: String;
  showBadge?: boolean;
}

export const Useravatar = ({
  imageUrl,
  isLive,
  username,
  size,
  showBadge,
}: UserAvatarprops) => {
  const canshowBadge = isLive && showBadge;
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-background", avatarSizes({size : "lg"})
        
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          {username[0]}
          {username[username.length -1]}
        </AvatarFallback>
      </Avatar>
      {canshowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform-translate-x-1/2">IsLive</div>
      )}
    </div>
  );
};
