import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import AuthLayout from "./components/layouts/AuthLayout";

const App: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
