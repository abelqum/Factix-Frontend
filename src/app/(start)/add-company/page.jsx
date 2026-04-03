import InputForm from "@/app/_components/InputForm";
import Form from "next/form";
import ForgPass from "@/app/_components/ForgPass";
import RememberMe from "@/app/_components/RememberMe";
import Link from "next/link";
import StarTitle from "@/app/_components/StaTtIle";
export default function AddCompany() {
  return (
    <section className="p-8 md:p-0 md:h-screen rounded-3xl md:rounded-none flex items-center justify-center shadow-2xl md:shadow-0">
      <div>
        <StarTitle title="¡Bienvenido a Factix! ">
          Agrega los datos de tu negocio para configurar Factix
        </StarTitle>
        <div className="flex flex-col items-center justify-center">
          <Form className="w-[90%] mx-auto ">
            <InputForm
              type="email"
              label="Email:"
              placeholder="Ej: usuario@empresa.com"
              req={true}
            />
            <InputForm
              type="password"
              label="Contraseña:"
              placeholder="********"
              req={true}
            />
            <div className="flex justify-between">
              <RememberMe />
              <ForgPass />
            </div>

            <div className="flex justify-center">
              <Link
                href="/add-company"
                className="mt-8 inline-block w-fit bg-gradient-to-r from-[#3B82F6] from-0% via-[#6D6AF6] via-[31%] to-[#8B5CF6] to-[64%] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Ingresar
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
