import Image from 'next/image';

import { AdvocateSearch } from '@/advocates';

export const Header = () => {
  return (
    <header className='bg-secondary p-2 flex justify-between items-end'>
      <div className='flex items-end'>
        <Image
          src={`/solace-header.svg`}
          alt={`Solace Logo`}
          className={`flex-shrink-0`}
          width={120}
          height={40}
          priority={true}
        />
        <span className='font-light text-sm text-white'>Advocates</span>
      </div>
      <div>
        <AdvocateSearch />
      </div>
    </header>
  );
};
