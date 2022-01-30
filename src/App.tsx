import { Suspense, useEffect } from 'react';
import { useQueryClient } from 'react-query';

import States from './States';
import ErrorBoundary from './ErrorBoundary';

import fetchStates from './fetchStates';

export default function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery('states', fetchStates);
  }, []);

  return (
    <div className="flex min-h-screen flex-col ml-1 mr-1 mb-10 mt-10">
      <div className="customText text-5xl text-basic-blue ml-20 mb-10">Population der Staaten</div>
      <Suspense fallback={<h1 className="ml-40">Loading ...</h1>}>
        <ErrorBoundary>
          <States />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
