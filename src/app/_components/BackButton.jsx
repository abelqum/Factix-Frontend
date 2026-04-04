import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link
      href="/"
      className=" absolute top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors"
    >
      <ArrowLeft className="w-6 h-6" />
    </Link>
  );
}
