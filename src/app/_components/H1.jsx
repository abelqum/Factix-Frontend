export default function H1({ children, clasess = "" }) {
  return (
    <h1
      className={`${clasess} text-4xl md:text-5xl lg:text-[54px] font-extrabold text-text-primary leading-[1.15]`}
    >
      {children}
    </h1>
  );
}
