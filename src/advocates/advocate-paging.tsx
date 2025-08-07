'use client';

import { useCallback } from 'react';

import { Button } from '@/components/ui/button';

import { usePage } from './state';

export const AdvocatePaging = () => {
  const { page, setPage } = usePage();

  const onPreviousPage = useCallback(() => {
    setPage((prev) => Math.max(1, prev - 1));
  }, [setPage]);

  const onNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  const isPreviousDisabled = page <= 1;

  return (
    <>
      <Button onClick={onPreviousPage} disabled={isPreviousDisabled}>
        Previous
      </Button>
      <span className={`text-white`}>Page {page}</span>
      <Button onClick={onNextPage}>Next</Button>
    </>
  );
};
