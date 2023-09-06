import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import Loader from "../../widgets/Loader/Loader";

export const WithRouter = (component: () => React.ReactNode) => () => (
    <HashRouter>
        <Suspense fallback={<Loader />}>{component()}</Suspense>
    </HashRouter>
);
