import React from "react";
import { Routes } from "@/types/commun";

const HomePage = React.lazy(() => import("@/pages/Home"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFound"));

export const routes: Routes = [
    {
        id: "home",
        path: "/",
        Page: HomePage,
    },
    {
        id: "not-found",
        path: "*",
        Page: NotFoundPage,
    },
];

export default { routes };