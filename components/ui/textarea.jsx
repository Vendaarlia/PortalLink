import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-[5px] border border-[--pink] px-3 py-2 text-sm ring-offset-[--pink] placeholder:text-[--crem] text-[--crem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--pink] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
