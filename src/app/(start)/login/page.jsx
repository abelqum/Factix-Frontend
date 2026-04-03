import InputForm from "@/app/_components/InputForm";
import Form from "next/form";
import ForgPass from "@/app/_components/ForgPass";
import RememberMe from "@/app/_components/RememberMe";
import Link from "next/link";
export default function Login() {
  return (
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
          href="/login"
          className="mt-8 inline-block w-fit bg-gradient-to-r from-[#3B82F6] from-0% via-[#6D6AF6] via-[31%] to-[#8B5CF6] to-[64%] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Crear cuenta gratis
        </Link>
      </div>
    </Form>
  );
}
