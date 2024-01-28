"use client";

import Image from "next/image";
import Link from "next/link";
import pokeLogo from "../../../../public/pokeLogo.svg";
import useTopAppBar from "./useTopAppBar";
import { ArrowLeft } from "lucide-react";
import IconButton from "@/components/lib/IconButton";
import { ButtonGhosted } from "../buttons/ButtonGhosted";

export function TopAppBar() {
  const { arrowBackIsVisible, goToPreviousRoute } = useTopAppBar();

  return (
    <header
      className={`fixed top-0 left-0 w-screen px-6 py-4 flex justify-between items-center bg-zinc-900 border-b border-b-red-600 z-50`}
    >
      {arrowBackIsVisible && (
        <>
          <div className="md:hidden">
            <IconButton onClick={goToPreviousRoute} icon={ArrowLeft} />
          </div>
          <div className="hidden md:block">
            <ButtonGhosted.Root onClick={goToPreviousRoute}>
              <ButtonGhosted.Icon icon={ArrowLeft} />
              Voltar
            </ButtonGhosted.Root>
          </div>
        </>
      )}
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
