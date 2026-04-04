import Link from "next/link";

export default function AddCompany() {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Cabecera del Formulario */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Comienza ahora
        </h2>
        <p className="text-slate-500 mt-2">
          Configura los datos de tu empresa en segundos.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        {/* Input Razón Social */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Razón Social
          </label>
          <input
            type="text"
            placeholder="Mi Empresa S.A. de C.V."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Input RFC */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            RFC
          </label>
          <input
            type="text"
            placeholder="ABC123456T89"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900 uppercase"
          />
        </div>

        {/* Input Correo */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Correo de administrador
          </label>
          <input
            type="email"
            placeholder="admin@empresa.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Input Contraseña */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Crea una contraseña
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Botón Principal (Usa tu degradado porque es el registro) */}
        <button
          type="button"
          className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4"
        >
          Crear cuenta y continuar
        </button>
      </form>

      {/* Enlace a Login */}
      <p className="text-center text-sm text-slate-500 mt-8">
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/login"
          className="font-bold text-[#6D6AF6] hover:underline"
        >
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
