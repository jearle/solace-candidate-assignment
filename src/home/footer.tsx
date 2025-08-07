'use client';

import { AdvocatePaging } from '@/advocates';

export const Footer = () => {
  return (
    <footer className='bg-secondary p-2 flex justify-between items-center'>
      <AdvocatePaging />
    </footer>
  );
};
