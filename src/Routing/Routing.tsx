import React, {Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/UI/MainPage';
import Loader from '../widgets/Loader/Loader';

export const RoutePath = {
  MAIN: "/",
  LOGIN: "/login"
}

const Routing = () => {
  const LoginPage = React.lazy(() => import('../pages/LoginPage/ui/LoginPage'));

  return (
    <Suspense fallback={<Loader/>}>
       <Routes>
          <Route path={RoutePath.MAIN} element={<MainPage />} />
          <Route path={RoutePath.LOGIN} element={<LoginPage />}/>
      </Routes>
    </Suspense>
    
  );
};

export default Routing;