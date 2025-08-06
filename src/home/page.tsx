'use client';

import { Advocates } from '@/advocates';

import { Header } from './header';

export const HomePage = () => {
  return (
    <main className='flex flex-col h-screen w-screen'>
      <Header />
      <article className='bg-card flex-1 overflow-auto p-0'>
        <Advocates />
      </article>
      <footer className='bg-secondary p-2'></footer>
    </main>
  );
};
