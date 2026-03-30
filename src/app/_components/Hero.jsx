import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="w-full flex justify-center mt-5 md:mt-0 px-6">
      {/* max-w-[1100px] es la medida perfecta para que no se separen de más en pantallas grandes */}
      <section className="grid md:grid-cols-2 items-center gap-7 md:gap-16 w-full max-w-[1100px]">
        {/* Lado izquierdo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.15]">
            Gestión y Análisis de Facturación
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-[450px]">
            Automatiza, migra y visualiza tu negocio. La herramienta que
            necesitabas, sin complicaciones.
          </p>

          {/* El Link ahora tiene las clases del botón directamente */}
          <Link
            href="/login"
            className="mt-8 inline-block w-fit bg-gradient-to-r from-[#3B82F6] from-0% via-[#6D6AF6] via-[31%] to-[#8B5CF6] to-[64%] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Crear cuenta gratis
          </Link>
        </div>

        {/* Lado derecho */}
        <div className=" justify-center md:justify-end w-full hidden md:flex">
          <Image
            src="/img/X color.png"
            alt="Logo Factix"
            width={500}
            height={500}
            className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
}
