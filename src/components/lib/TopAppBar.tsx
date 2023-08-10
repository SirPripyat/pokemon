import Image from "next/image";
import pokeLogo from "../../../public/pokeLogo.svg";
import Link from "next/link";

interface TopAppBarProps {}
export function TopAppBar({}: TopAppBarProps) {
  return (
    <>
      <header className="fixed top-0 left-0 w-screen px-6 py-4 flex justify-center items-center dark:bg-zinc-900 border-b border-b-red-600 z-50">
        <Link href="/">
          <Image
            src={pokeLogo}
            alt="Pokemon's Logo"
            width={undefined}
            height={undefined}
            className="h-10 w-auto"
          />
        </Link>
      </header>
    </>
  );
}
