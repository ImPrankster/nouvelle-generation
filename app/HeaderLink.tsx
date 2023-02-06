"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const HeaderLink = ({ children, href, className, ...props }: Prop) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={className + " " + (isActive ? " ring-2 ring-inset" : " ")}
      {...props}
    >
      {children}
    </Link>
  );
};

type Prop = {
  href: string;
  children?: ReactNode;
  className?: string;
};

export default HeaderLink;
