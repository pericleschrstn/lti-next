import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const headerVariants = cva("p-3 sticky z-10 top-0", {
  variants: {
    intent: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      white: "bg-white",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface HeaderProps extends VariantProps<typeof headerVariants> {
  logotipoSrc: string;
}

export default function Header({ intent, logotipoSrc, ...props }: HeaderProps) {
  return (
    <header className={headerVariants({ intent })} {...props}>
      <div className="mx-auto max-w-7xl">
        <nav className="flex justify-between">
          <Image src={logotipoSrc} alt="Logotipo"></Image>
          <Sheet>
            <SheetTrigger>
              <Menu />
              Menu
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our
                  servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
