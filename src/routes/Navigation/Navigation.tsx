import { Route, Routes } from "react-router-dom";

import { ERoute, publicRoutes } from "../routes.config";

export const Navigation = () => {
  return (
    <Routes>
      {Object.entries(publicRoutes).map(([key, value]) => {
        return <Route key={key} path={key as ERoute} element={value.element} />
      })}
    </Routes>
  );
};
