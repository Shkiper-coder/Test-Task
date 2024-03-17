import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import About from "../pages/About";
import PostPages from "../pages/PostPages";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

import { Login } from '../pages/Login';

import { RequireAuth } from "../PrivedRoute/RequireAuth"
import { AuthProvider } from "../PrivedRoute/AuthProvider"

const AppRouter = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <RequireAuth>
            {/* <Route path="/" element={<PostPages />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/postPages" element={<PostPages />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/*" element={<Error />} />
          </RequireAuth>
        } />
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;