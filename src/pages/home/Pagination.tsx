import { ButtonGhosted } from '@/components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQueryParams } from '@/hooks';

type Props = {
  maxPages: number;
};

export const Pagination = ({ maxPages }: Props) => {
  const { page, setParams } = useQueryParams();

  const goToPrevious = () =>
    setParams({
      page: page - 1,
    });

  const goToNext = () =>
    setParams({
      page: page + 1,
    });

  return (
    <>
      <div className="w-full flex gap-6 justify-center md:justify-end">
        <ButtonGhosted.Root disabled={page === 1} onClick={goToPrevious}>
          <ButtonGhosted.Icon icon={ChevronLeft} />
          Anterior
        </ButtonGhosted.Root>

        <ButtonGhosted.Root disabled={page === maxPages} onClick={goToNext}>
          Próxima
          <ButtonGhosted.Icon icon={ChevronRight} />
        </ButtonGhosted.Root>
      </div>
    </>
  );
};
