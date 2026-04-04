import Logo from "./Logo";
import MenuHome from "./MenuHome";
export default function HeaderHome() {
  return (
    <header className=" w-[90%]  mx-auto mb-4 flex items-center justify-between p-3 md:p-6">
      <div className="flex-1 flex justify-start">
        <Logo />
      </div>
      <div className="flex-1 flex justify-center">
        <MenuHome />
      </div>
    </header>
  );
}
