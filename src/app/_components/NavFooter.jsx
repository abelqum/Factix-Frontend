import { links } from "../_constants/links";
import Link from "next/link";

export default function NavFooter() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium">
      {links.map((el, id) => (
        <Link
          key={id}
          href={el.url}
          className="hover:text-text-primary transition-colors"
        >
          {el.link}
        </Link>
      ))}
    </div>
  );
}
