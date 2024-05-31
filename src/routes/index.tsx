import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { Route as RouteInterface } from "@/types/commun";

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ id, path, Page }: RouteInterface, index: number) => {
          return (
            <Route
              key={`router-key-${id}-${index}`}
              path={path}
              element={<Page />}
            />
          );
        })}
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
