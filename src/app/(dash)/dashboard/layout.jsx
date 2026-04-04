"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, FileText, Users, Box, Wrench, Settings } from "lucide-react";
export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Control responsive sidebar
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    const timer = setTimeout(() => {
      if (window.innerWidth >= 768) setIsSidebarOpen(true);
    }, 10);

    window.addEventListener("resize", checkScreenSize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/dashboard", icon: Home },
    { name: "Facturas", href: "/dashboard/invoices", icon: FileText },
    { name: "Clientes", href: "/dashboard/clients", icon: Users },
    { name: "Productos", href: "/dashboard/products", icon: Box },
    { name: "Servicios", href: "/dashboard/services", icon: Wrench },
    { name: "Configuración", href: "/dashboard/settings", icon: Settings },
  ];
  return (
    <div className="bg-slate-50 flex h-screen overflow-hidden text-text-primary antialiased">
      {/* Overlay móvil */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-text-primary/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-sidebar-bg
           text-white flex flex-col shadow-2xl transition-all duration-300 ${
             isSidebarOpen
               ? "translate-x-0 md:ml-0"
               : "-translate-x-full md:-ml-72"
           }`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-sidebar-hover bg-sidebar-bg">
          <h2 className="text-2xl font-black tracking-widest">MILAS</h2>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-2 rounded-lg hover:bg-sidebar-active"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  window.innerWidth < 768 && setIsSidebarOpen(false)
                }
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-sidebar-active text-white"
                    : "text-emerald-100 hover:bg-sidebar-active"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-bg-primary"
            >
              ☰
            </button>

            <h1 className="text-base md:text-lg font-bold text-text-primary">
              {navLinks.find((l) => l.href === pathname)?.name || "Panel"}
            </h1>
          </div>

          <button className="text-sm font-bold text-red-600 bg-red-50 px-4 py-2 rounded-lg">
            Salir
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-bg-primary">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 h-full flex flex-col items-center justify-center text-center">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
