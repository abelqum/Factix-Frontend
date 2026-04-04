import Logo from "./Logo";
import Image from "next/image";
export default function StarTitle({ title, children }) {
  return (
    <div className="mb-5 text-center flex flex-col items-center gap-3">
      <Image
        src="/img/logo-vectorizado.webp"
        alt="logo factix"
        width={100}
        height={40}
        className="w-auto h-5 object-contain "
      />
      <h2 className="md:text-4xl text-3xl font-extrabold text-slate-900 tracking-tight ">
        {title}
      </h2>
      <p className="text-slate-500 ">{children}</p>
    </div>
  );
}
