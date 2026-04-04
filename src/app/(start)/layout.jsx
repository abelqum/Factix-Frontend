import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "../_components/Logo"; // Asegúrate de que la ruta sea correcta

export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen w-full flex bg-white font-sans">
      {/* 🌟 LADO IZQUIERDO: MARCA (Solo Desktop) 🌟 */}
      {/* Ocupa el 50% de la pantalla. Un panel fijo, limpio y corporativo. */}
      <section className="hidden lg:flex flex-col justify-between w-1/2 bg-gradient-to-br from-[#3B82F6] via-[#6D6AF6] to-[#8B5CF6] p-12 relative overflow-hidden">
        {/* Botón de regreso para Desktop */}
        <Link
          href="/"
          className="text-white/80 hover:text-white transition-colors w-fit flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Volver al inicio
        </Link>

        {/* Mensaje de marca y Logo */}
        <div className="relative z-10 max-w-md">
          {/* Si tienes un logo blanco, úsalo aquí. Si no, le puedes poner la clase "brightness-0 invert" a la imagen en tu componente Logo */}
          <Logo />
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white mt-8 leading-tight tracking-tight">
            El sistema de facturación que tu negocio merece.
          </h1>
          <p className="text-indigo-100 mt-6 text-lg">
            Timbra, gestiona y crece sin límites ni complicaciones técnicas.
          </p>
        </div>

        <div className="text-white/60 text-sm">
          © 2026 Factix. Todos los derechos reservados.
        </div>
      </section>

      {/* 🌟 LADO DERECHO: CONTENIDO (Formularios) 🌟 */}
      {/* En celular ocupa todo el ancho. En Desktop ocupa la otra mitad. */}
      <section className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative">
        {/* Botón de regreso para Móvil (Solo visible en celular) */}
        <Link
          href="/"
          className="lg:hidden absolute top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        {/* El contenedor sagrado de 400px. NUNCA se estirará de más. */}
        <div className="w-full max-w-[400px]">{children}</div>
      </section>
    </main>
  );
}
