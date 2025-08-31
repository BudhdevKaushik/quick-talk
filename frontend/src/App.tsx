import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
