import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import type { ReactNode } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solace Candidate Assignment',
  description: 'Show us what you got',
};

type RootLayoutProps = {
  readonly children: ReactNode;
};
export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang='en' className={`text-sm`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};
