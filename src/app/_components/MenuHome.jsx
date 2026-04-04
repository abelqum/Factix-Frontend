"use client";

import { links } from "../_constants/links";
import Link from "next/link";
import NavResponsive from "./NavResponsive";
import ResponsiveIcon from "./ResponsiveIcon";
import { useState } from "react";
export default function MenuHome() {
  const [menuOpen, setMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full relative">
      <ul className="  gap-8  md:flex justify-around items-center hidden  font-semibold w-full">
        {links.map((el, i) =>
          i == links.length - 1 ? (
            <li key={i}>
              <Link
                href={el.url}
                key={i}
                className="relative text-sm font-medium text-accent-secondary transition-colors duration-300 hover:text-accent-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {el.link}
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link
                href={el.url}
                key={i}
                className="relative text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {el.link}
              </Link>
            </li>
          ),
        )}
      </ul>

      <ResponsiveIcon setMenu={setMenu} menuOpen={menuOpen} />
      <NavResponsive menuOpen={menuOpen} setMenu={setMenu} />
    </nav>
  );
}
