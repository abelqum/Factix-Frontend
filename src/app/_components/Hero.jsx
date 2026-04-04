import Link from "next/link";
import Image from "next/image";
import H1 from "./H1";

export default function Hero() {
  return (
    <main className="w-full flex justify-center mt-8 md:mt-10 px-6">
      {/* max-w-[1100px] es la medida perfecta para que no se separen de más en pantallas grandes */}
      <section className="grid md:grid-cols-3 items-center gap-7 md:gap-16 w-full max-w-[1100px]">
        {/* Lado izquierdo */}
        <div className="  col-start-1 col-span-2 flex flex-col items-center md:items-start text-center md:text-left w-full">
          <H1>
            Facturación CFDI 4.0{" "}
            <span className="text-accent-secondary">ultra fluida</span> para
            dueños de negocios en México.
          </H1>

          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-[450px]">
            Diseñado para la precisión financiera. Factix elimina la fricción de
            la contabilidad para que puedas enfocarte en lo que realmente
            importa: el crecimiento de tu empresa.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-block w-fit bg-gradient-to-r from-[#3B82F6] from-0% via-[#6D6AF6] via-[31%] to-[#8B5CF6] to-[64%] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Crear cuenta gratis
          </Link>
        </div>

        {/* Lado derecho */}
        <div className="col-start-3 col-span-4 justify-center md:justify-end w-full hidden md:flex">
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
