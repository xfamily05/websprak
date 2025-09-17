import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl shadow-lg",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-2xl shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-2xl shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-lg",
        heroOutline: "border-2 border-white text-white font-semibold hover:bg-white hover:text-hero-blue transition-all duration-300 rounded-2xl shadow-lg backdrop-blur-sm bg-white/10",
        floating: "bg-card text-card-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl shadow-lg float-3d",
        gradient: "bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-2xl px-4",
        lg: "h-14 rounded-2xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };