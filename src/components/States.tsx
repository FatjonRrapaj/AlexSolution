import { lazy } from 'react';
import { useQuery } from 'react-query';

import fetchStates from '../api/fetchStates';

const State = lazy(() => import('./State'));

const States = () => {
  const { data, isFetching } = useQuery('Recipes', fetchStates);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-row flex-wrap">
      {data.map(
        ({
          Population: population,
          State: stateName,
          Year: year,
          'ID State': id,
        }: {
          Population: number;
          State: string;
          Year: string;
          'ID State': string;
        }) => (
          <State key={id} stateName={stateName} population={population} year={year} />
        ),
      )}
    </div>
  );
};

export default States;
