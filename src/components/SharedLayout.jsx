import { Suspense } from 'react';
import { Navigation } from './Navigation';
import { ClipLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<ClipLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
