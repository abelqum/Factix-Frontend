import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/logo vectorizado.svg"
        alt="logo milas"
        width="80"
        height="80"
        className="w-auto h-10  md:h-6 "
      />
    </Link>
  );
}
