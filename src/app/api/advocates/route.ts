import { type NextRequest } from 'next/server';

import { advocatesService } from '@/advocates/api';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const limit = parseInt(searchParams.get('limit') ?? '10', 10);
  const search = searchParams.get('search') ?? '';

  const { advocates } = await advocatesService.get({ page, limit, search });

  const data = {
    advocates,
  };
  const errors = [];
  const systemErrors = [];

  const response = {
    data,
    errors,
    systemErrors,
  };

  const responseJSON = Response.json(response);

  return responseJSON;
};
