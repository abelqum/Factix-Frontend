import Link from "next/link";
import { links } from "../_constants/links";

export default function NavResponsive({ menuOpen, setMenu }) {
  return (
    <div
      className={`
        fixed top-[88px] left-0 w-full min-h-screen md:hidden z-40
        transition-all duration-500 overflow-hidden
       
        ${menuOpen ? "visible" : "invisible"}
      `}
      id="menu-resp"
    >
      <div
        className={`
          absolute inset-0 bg-black/40 transition-opacity duration-500
          ${menuOpen ? "opacity-100" : "opacity-0"}
        `}
        onClick={() => setMenu(false)}
      ></div>

      <div
        className={`
          absolute top-0 right-0 w-[55%] min-h-screen bg-sidebar-bg shadow-2xl
          transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="w-full text-bg-primary flex flex-col items-center gap-8 py-10 font-poppins font-medium">
          {links.map((el, id) => (
            <li key={id}>
              <Link
                href={el.url}
                onClick={() => setMenu(false)}
                className="hover:scale-105 hover:text-sidebar-active transition-all duration-200 text-lg block px-4 py-2"
              >
                {el.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
