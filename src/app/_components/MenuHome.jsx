import { links } from "../_constants/links";
import Link from "next/link";
export default function MenuHome() {
  return (
    <menu className="w-max ">
      <ul className=" w-max flex justify-around">
        {links.map((el, i) => (
          <li key={i}>
            <Link href={el.url} key={i}>
              {el.link}
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  );
}
