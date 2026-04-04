import BackButton from "../_components/BackButton";
import Logo from "../_components/Logo"; // Asegúrate de que la ruta sea correcta

export default function AuthLayout({ children }) {
  return (
    <main className="w-full flex bg-white font-sans justify-center items-center min-h-screen p-8">
      <section className="flex rounded-2xl mx-auto justify-center items-center p-6 sm:p-12 relative bg-white shadow-2xl shadow-sidebar-bg">
        <BackButton />
        {/* El contenedor sagrado de 400px. NUNCA se estirará de más. */}
        <div className="w-full max-w-[400px]">{children}</div>
      </section>
    </main>
  );
}
