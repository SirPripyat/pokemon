"use client";

import { ButtonGhosted } from "@/components/lib/buttons/ButtonGhosted";
import { ChevronLeft, ChevronRight } from "lucide-react";
import usePagination from "./usePagination";
import useDisabledPaginationButton from "./useDisabledPaginationButton";
import { useRef } from "react";

export default function Pagination() {
  const { goToNextPage, goToPreviousPage } = usePagination();

  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const { disabledPreviousButton, disabledNextButton } =
    useDisabledPaginationButton({});

  return (
    <>
      <div className="w-full flex gap-6 justify-center md:justify-end">
        <ButtonGhosted.Root
          ref={previousButtonRef}
          disabled={disabledPreviousButton()}
          onClick={() => goToPreviousPage()}
        >
          <ButtonGhosted.Icon icon={ChevronLeft} />
          Anterior
        </ButtonGhosted.Root>
        <ButtonGhosted.Root
          ref={nextButtonRef}
          disabled={disabledNextButton()}
          onClick={() => goToNextPage()}
        >
          Próxima
          <ButtonGhosted.Icon icon={ChevronRight} />
        </ButtonGhosted.Root>
      </div>
    </>
  );
}
