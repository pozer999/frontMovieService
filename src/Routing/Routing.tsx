import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/UI/MainPage';
import LoginPage from '../pages/LoginPage/ui/LoginPage';

export const RoutePath = {
  MAIN: "/",
  LOGIN: "/login"
}

const Routing = () => {
  return (
    <Routes>
        <Route path={RoutePath.MAIN} element={<MainPage />} />
        <Route path={RoutePath.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;