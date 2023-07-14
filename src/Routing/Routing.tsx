import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/UI/MainPage';

export const RoutePath = {
  MAIN: "/"
}

const Routing = () => {
  return (
    <Routes>
        <Route path={RoutePath.MAIN} element={<MainPage />} />
    </Routes>
  );
};

export default Routing;