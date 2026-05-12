import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[60px] py-6">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Logo"
            width={150}
            height={64}
            className="w-[130px] h-auto md:w-[150px]"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="glass flex h-[42px] w-[140px] md:h-[51px] md:w-[184px] items-center justify-center rounded-[125px] text-sm md:text-base font-extrabold text-white transition-all hover:bg-white/20 active:scale-95"
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
}
