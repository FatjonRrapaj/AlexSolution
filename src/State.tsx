interface Props {
  stateName: string;
  year: string;
  population: number;
}

const State: React.FC<Props> = ({ stateName, year, population }: Props) => (
  <div className="bg-white shadow-md p-5 rounded-lg flex-col ml-10 mb-10">
    <div className="customText">{stateName}</div>
    <div className="separator" />
    <div className="customText text-basic-grey">Population: {year}</div>
    <div className="separator" />
    <div className="customText text-basic-grey">
      Jahr: {Math.round(Math.abs(Number(population)) / 1.0e6) / 10 + 'M'}
    </div>
  </div>
);

export default State;
