import React from "react";
import { Route, Routes } from "react-router-dom";

import { ACTION_ROUTES } from "./routesData";
import Home from "../page/Home";
import CreateForm from "../features/CreateForm/intex";
import FormPreview from "../features/FormPreview";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ACTION_ROUTES.CREATE_FORM?.path} element={<CreateForm />} />
      <Route
        path={ACTION_ROUTES.PREVIEW_FORM?.path}
        element={<FormPreview />}
      />
    </Routes>
  );
};

export default AppRoutes;
