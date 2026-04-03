import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Importamos el icono

export default function StartLayout({ children }) {
  return (
    // Agregamos "relative" al main para que el botón flote en relación a este contenedor
    <main className="w-full h-screen relative flex items-center justify-center md:grid md:grid-cols-2">
      {/* 🌟 BOTÓN DE REGRESO FLOTANTE 🌟 */}
      <Link
        href="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/50 md:bg-white/10 backdrop-blur-sm text-text-primary md:text-white hover:-translate-x-1 transition-transform"
        title="Volver al inicio"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <section className="hidden md:flex items-center justify-center h-screen bg-gradient-to-r from-[#3B82F6] from-0% via-[#6D6AF6] via-[31%] to-[#8B5CF6] to-[64%]">
        <Image
          src="/img/x-blanca.webp"
          alt="Logo Factix"
          width={500}
          height={500}
          className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain"
          priority
        />
      </section>

      {children}
    </main>
  );
}
