import { ButtonGhosted } from "@/components/lib/buttons/ButtonGhosted";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {}
export default function Pagination({}: PaginationProps) {
  return (
    <>
      <div className="w-full flex gap-6 justify-end">
        <ButtonGhosted.Root>
          <ButtonGhosted.Icon icon={ChevronLeft} />
          Anterior
        </ButtonGhosted.Root>
        <ButtonGhosted.Root>
          <ButtonGhosted.Icon icon={ChevronRight} />
          Próxima
        </ButtonGhosted.Root>
      </div>
    </>
  );
}
