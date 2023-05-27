import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ERoute, publicRoutes } from "../routes.config";
import { Spinner } from "../../components";

export const Navigation = () => {
  return (
    <Routes>
      {Object.entries(publicRoutes).map(([key, value]) => {
        return (
          <Route key={key} path={key as ERoute} element={<Suspense fallback={<Spinner />}>{value.element}</Suspense>} />
        );
      })}
    </Routes>
  );
};
