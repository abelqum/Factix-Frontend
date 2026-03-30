import Logo from "./Logo";
import MenuHome from "./MenuHome";
export default function HeaderHome() {
  return (
    <header className="w-max">
      <div className="w-[90%] m-auto">
        <Logo />
        <MenuHome />
      </div>
    </header>
  );
}
