import State from './State';

import fetchStates from './api';

const states = fetchStates();

const States = () => {
  const statesData = states.read();

  return (
    <div className="flex flex-row flex-wrap">
      {statesData.map(
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
