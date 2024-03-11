"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/gallery",
    name: "Gallery",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-8">
      {Links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex text-xl font-medium hover:border-b-2 border-black ease-in-out duration-200",
            { "border-b-2 text-2xl": pathname === link.href }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
