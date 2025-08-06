import { useAdvocatesResult } from './state';

export const AdvocatesPage = () => {
  const { advocates, state, errors, systemErrors } = useAdvocatesResult();
  console.log({ advocates, state, errors, systemErrors });
  return <div>Advocates</div>;
};
