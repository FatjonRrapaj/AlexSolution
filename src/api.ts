function wrapPromise(promise: Promise<any>): any {
  let status = 'pending';
  let result: State[] | Error;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

interface State {
  stateName: string;
  year: number;
  population: number;
}

function makeApiCall() {
  return new Promise((resolve, reject) => {
    const response = fetch(
      'https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019',
    )
      .then((response) => response.json())
      .then((result) => resolve(result.data))
      .catch((e) => reject(e));
  });
}

function fetchStates(): any {
  let statesPromise = makeApiCall();
  return wrapPromise(statesPromise);
}

export default fetchStates;
