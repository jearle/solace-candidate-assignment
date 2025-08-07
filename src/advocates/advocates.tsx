import { DataTable } from '@/components/ui/data-table';

import { useAdvocatesResult } from './state';
import { COLUMNS } from './columns';

export const Advocates = () => {
  const { advocates } = useAdvocatesResult();

  return (
    <div className={`h-full w-full`}>
      <DataTable columns={COLUMNS} data={advocates} />
    </div>
  );
};
