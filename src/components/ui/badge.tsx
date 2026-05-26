import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.5px]",
  {
    variants: {
      variant: {
        default: "bg-primary-dark text-text-inverse",
        accent: "bg-primary-accent text-primary-dark",
        warning: "bg-warning text-white",
        error: "bg-error text-white",
        outline: "border border-border-light text-text-secondary",
        success: "bg-primary-accent/10 text-primary-accent",
      },
      size: {
        default: "h-6",
        sm: "h-5 px-2 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
