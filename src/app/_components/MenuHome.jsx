"use client";

import { links } from "../_constants/links";
import Link from "next/link";
import NavResponsive from "./NavResponsive";
import ResponsiveIcon from "./ResponsiveIcon";
import { useState } from "react";
export default function MenuHome() {
  const [menuOpen, setMenu] = useState(false);
  return (
    <nav className="flex items-center justify-end w-full">
      <ul className="  gap-8  md:flex justify-around items-center hidden  font-semibold w-full">
        {links.map((el, i) =>
          i == links.length - 1 ? (
            <li key={i}>
              <Link
                href={el.url}
                key={i}
                className="text-accent-secondary hover:text-accent-primary text-sm font-medium transition-color"
              >
                {el.link}
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link
                href={el.url}
                key={i}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
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
