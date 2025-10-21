import Image from 'next/image';
import Link from 'next/link';
import pokeLogo from '../../public/pokeLogo.svg';

export function TopAppBar() {
  return (
    <header
      className={`fixed top-0 left-0 w-screen px-6 py-4 flex justify-between items-center bg-zinc-900 border-b border-b-red-600 z-50`}
    >
      <Link href="/" className="mx-auto">
        <Image
          src={pokeLogo}
          alt="Pokemon's Logo"
          width={undefined}
          height={undefined}
          className="h-10 w-auto"
        />
      </Link>
    </header>
  );
}
