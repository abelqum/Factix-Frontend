import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/logo-vectorizado.webp"
        alt="logo factix"
        width={100}
        height={40}
        className="w-auto h-8 md:h-7 object-contain"
      />
    </Link>
  );
}
