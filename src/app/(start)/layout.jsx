import Image from "next/image";

export default function StartLayout({ children }) {
  return (
    <main className="w-full grid grid-cols-2">
      <section className="flex items-center justify-center h-screen bg-gradient-to-r from-[#3B82F6] from-0% via-[#6D6AF6] via-[31%] to-[#8B5CF6] to-[64%]">
        <Image
          src="/img/x-blanca.webp"
          alt="Logo Factix"
          width={500}
          height={500}
          className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain"
          priority
        />
      </section>
      <section className="h-screen ">{children}</section>
    </main>
  );
}
