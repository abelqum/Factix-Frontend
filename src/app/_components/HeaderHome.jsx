import Logo from "./Logo";
import MenuHome from "./MenuHome";
export default function HeaderHome() {
  return (
    <header className="w-full max-w-7xl mx-auto  mb-15 flex items-center justify-between px-6 py-6 bg-transparent relative z-20">
      <div className="flex-1 flex justify-start">
        <Logo />
      </div>
      <div className="flex-1 flex justify-center">
        <MenuHome />
      </div>
    </header>
  );
}
