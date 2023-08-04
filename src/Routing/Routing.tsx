import React, { Suspense, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../widgets/Loader/Loader';
import { routeConfig } from '../shared/config/routeConfig';

const Routing = memo(() => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routeConfig.map((route) => (
          <Route path={route.path} element={route.elem} key={route.name} />
        ))}
      </Routes>
    </Suspense>
  );
});

export default memo(Routing);
