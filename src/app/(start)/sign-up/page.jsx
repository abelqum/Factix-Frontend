import StarTitle from "@/app/_components/StaTtIle";
import ButtonForm from "@/app/_components/ButtonForm";
export default function SignUp() {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <StarTitle title="Crea tu cuenta">
        Crea una cuenta de administrador para poder manejar a tu empresa.
      </StarTitle>
      <form className="flex flex-col gap-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Nombre(s):
          </label>
          <input
            type="text"
            placeholder="Juan Carlos"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Apellidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
              Apellido paterno:
            </label>
            <input
              type="text"
              placeholder="García"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
              Apellido materno:
            </label>
            <input
              type="text"
              placeholder="López"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
            />
          </div>
        </div>

        {/* Correo */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Correo:
          </label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Contraseña:
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Teléfono:
          </label>
          <input
            type="tel"
            placeholder="55 1234 5678"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D6AF6] focus:border-transparent transition-all text-slate-900"
          />
        </div>

        {/* Botón */}
        <ButtonForm>Crear cuenta</ButtonForm>
      </form>
    </div>
  );
}
