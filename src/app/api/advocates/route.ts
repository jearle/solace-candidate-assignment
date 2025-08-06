import { advocatesService } from '@/advocates/api';

export const GET = async () => {
  const { advocates } = await advocatesService.get();

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
