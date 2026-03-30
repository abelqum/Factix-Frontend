import { links } from "../_constants/links";
import Link from "next/link";
export default function MenuHome() {
  return (
    <nav className="hidden md:block ">
      <ul className=" flex items-center gap-8">
        {links.map((el, i) => (
          <li key={i}>
            <Link
              href={el.url}
              key={i}
              className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
            >
              {el.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
