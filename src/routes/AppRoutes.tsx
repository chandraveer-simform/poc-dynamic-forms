import React from "react";
import { Route, Routes } from "react-router-dom";

import FormList from "../page/FormList";
import CreateForm from "../containers/Forms/CreateForm";
import { ActionRoutes } from "./routesData";
import FormPreview from "../containers/Forms/FormPreview";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FormList />} />
      <Route path={ActionRoutes.CREATE_FORM?.path} element={<CreateForm />} />
      <Route path={ActionRoutes.PREVIEW_FORM?.path} element={<FormPreview />} />
    </Routes>
  );
};

export default AppRoutes;
