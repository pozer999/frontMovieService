import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";

export const Routing = memo(() => {
    return (
        <Routes>
            {routeConfig.map(
                (route): React.ReactNode => (
                    <Route
                        path={route.path}
                        element={route.elem}
                        key={route.name}
                    />
                )
            )}
        </Routes>
    );
});
