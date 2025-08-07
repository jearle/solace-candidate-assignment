'use client';

import { Advocates } from '@/advocates';

import { Header } from './header';
import { Footer } from './footer';

export const HomePage = () => {
  return (
    <main className='flex flex-col h-screen w-screen'>
      <Header />
      <article className='bg-card flex-1 overflow-auto p-0'>
        <Advocates />
      </article>
      <Footer />
    </main>
  );
};
