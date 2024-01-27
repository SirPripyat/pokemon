"use client";

import Image from "next/image";
import Link from "next/link";
import pokeLogo from "../../../../public/pokeLogo.svg";
import useTopAppBar from "./useTopAppBar";
import { ArrowLeft } from "lucide-react";
import IconButton from "@/components/lib/IconButton";

export function TopAppBar() {
  const { arrowBackIsVisible, goToPreviousRoute } = useTopAppBar();

  return (
    <header
      className={`fixed top-0 left-0 w-screen px-6 py-4 flex ${
        arrowBackIsVisible ? "justify-between" : "justify-center"
      } items-center bg-zinc-900 border-b border-b-red-600 z-50`}
    >
      {arrowBackIsVisible && (
        <div className="md:hidden">
          <IconButton onClick={goToPreviousRoute} icon={ArrowLeft} />
        </div>
      )}
      <Link href="/">
        <Image
          src={pokeLogo}
          alt="Pokemon's Logo"
          width={undefined}
          height={undefined}
          className="h-10 w-auto"
        />
      </Link>
      {arrowBackIsVisible && <div className="w-8"></div>}
    </header>
  );
}
