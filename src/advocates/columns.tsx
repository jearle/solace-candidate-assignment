'use client';

import { type ColumnDef, type CellContext } from '@tanstack/react-table';

import { type Advocate } from './schema';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

export const COLUMNS: ColumnDef<Advocate>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'degree',
    header: 'Degree',
  },
  {
    accessorKey: 'specialties',
    header: 'Specialties',
    cell: (props: CellContext<Advocate, unknown>) => {
      const { row } = props;

      const specialtiesRaw: string[] = row.getValue(`specialties`);
      const specialties = specialtiesRaw.join(`, `);

      return (
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className='text-left block w-48 truncate cursor-pointer underline hover:text-primary'>
                {specialties}
              </TooltipTrigger>
              <TooltipContent className='max-w-xs p-2'>
                <ul className='list-disc list-inside'>
                  {specialtiesRaw.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
  {
    accessorKey: 'yearsOfExperience',
    header: 'Years of Experience',
    cell: (props: CellContext<Advocate, unknown>) => {
      const { row } = props;

      const yearsOfExperience: number = row.getValue(`yearsOfExperience`);

      return <div className={`text-center`}>{yearsOfExperience}</div>;
    },
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
    cell: ({ row }: CellContext<Advocate, unknown>) => {
      const phoneNumberRaw = `${row.getValue(`phoneNumber`)}`;

      const phoneNumber = `(${phoneNumberRaw.slice(
        0,
        3,
      )}) ${phoneNumberRaw.slice(3, 6)}-${phoneNumberRaw.slice(6)}`;

      return <span className={`whitespace-nowrap`}>{phoneNumber}</span>;
    },
  },
];
