import Logo from "./Logo";
import H1 from "./H1";

export default function StarTitle({ title, children }) {
  return (
    <div className="text-center leading-tight flex flex-col items-center justify-center gap-5 mb-7">
      <Logo />
      <H1 clasess="text-center">{title}</H1>
      <p className="text-center">{children}</p>
    </div>
  );
}
