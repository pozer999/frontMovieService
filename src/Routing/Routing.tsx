import React, {Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import Loader from '../widgets/Loader/Loader';
import { Pages } from './Pages';

// export const RoutePath = {
//   MAIN: "/",
//   LOGIN: "/login"
// }

// export const Pages = [
//   {
//     name: "LoginPage",
//     path: RoutePath.LOGIN,
//     elem: <LoginPageLazy/>
//   }, 
//   {
//     name: "MainPage",
//     path: RoutePath.MAIN,
//     elem: <MainPage/>
//   }
// ];


const Routing = () => {

  return (
    <Suspense fallback={<Loader/>}>
       <Routes>
        {Pages.map((route) => 
            <Route path={route.path} element={route.elem} key={route.name}/>
          )
        }
      </Routes>
    </Suspense>
    
  );
};

export default Routing;