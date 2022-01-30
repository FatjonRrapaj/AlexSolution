export default async function fetchStates() {
  const response = await fetch(
    'https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019',
  );
  const result = await response.json();
  return result.data;
}
