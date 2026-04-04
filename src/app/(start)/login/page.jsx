import ButtonForm from "@/app/_components/ButtonForm";
import StarTitle from "@/app/_components/StaTtIle";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Cabecera del Formulario */}
      <StarTitle title="Iniciar Sesión">
        Ingresa tus credenciales para acceder.
      </StarTitle>

      <form className="flex flex-col gap-5">
        {/* Input Correo */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Correo Electrónico:
          </label>
          <input
            type="email"
            placeholder="admin@empresa.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Input Contraseña con link de recuperación */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-sm font-bold text-slate-700">
              Contraseña:
            </label>
            <Link
              href="/recuperar"
              className="text-xs font-bold text-[#6D6AF6] hover:text-[#3B82F6] transition-colors"
            >
              ¿La olvidaste?
            </Link>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Botón */}
        <ButtonForm>Ingresar</ButtonForm>
      </form>

      {/* Enlace a registro */}
      <p className="text-center text-sm text-slate-500 mt-8">
        ¿No tienes cuenta?{" "}
        <Link
          href="/sign-up"
          className="font-bold text-[#6D6AF6] hover:underline"
        >
          Crea una gratis
        </Link>
      </p>
    </div>
  );
}
