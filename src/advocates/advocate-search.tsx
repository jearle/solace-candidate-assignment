import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { useSearchText } from './state';
import { ChangeEvent, useCallback } from 'react';

export const AdvocateSearch = () => {
  const { searchText, setSearchText } = useSearchText();

  const onChangeSearchInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setSearchText(value);
    },
    [setSearchText],
  );

  return (
    <div className='relative'>
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
      <Input
        placeholder={`search`}
        className='bg-background pl-10'
        value={searchText}
        onChange={onChangeSearchInput}
      />
    </div>
  );
};
