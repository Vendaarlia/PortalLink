import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-[5px] bg-[--pink]", className)} {...props} />);
}

export { Skeleton }
