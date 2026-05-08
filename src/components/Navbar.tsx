import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-[60px] py-10 lg:py-14">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/common/Logo green land 1.svg"
            alt="Green Land Capital Logo"
            width={150}
            height={64}
            className="w-[120px] h-auto lg:w-[150px]"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="glass flex h-[51px] w-[184px] items-center justify-center rounded-[125px] text-base font-extrabold text-white transition-all hover:bg-white/20 active:scale-95"
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
}
