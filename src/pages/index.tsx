import { Suspense, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import Loader from "widgets/Loader/Loader";

export const Routing = memo(() => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routeConfig.map((route) => (
                    <Route
                        path={route.path}
                        element={route.elem}
                        key={route.name}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});

export default memo(Routing);