import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/UI/MainPage';

const Routing = () => {
  return (
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
  );
};

export default Routing;