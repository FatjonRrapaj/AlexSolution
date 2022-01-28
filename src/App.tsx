import { Suspense } from 'react';
import States from './States';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
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
