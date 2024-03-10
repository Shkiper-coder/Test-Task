import React from 'react';
import { Routes, Route, Router } from "react-router-dom";
import About from "../pages/About";
import PostPages from "../pages/PostPages";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { tripRoute } from "../router/tripRoute"

console.log(tripRoute);

const AppRouter = () => {
  return (
    <Routes>
       {/* {tripRoute.map(newRoute =>
        <Route
          component={newRoute.component}
          path={newRoute.path}
        />
      )} */}
      <Route path="/" element={<PostPages />} />
      <Route path="/about" element={<About />} />
      <Route path="/postPages" element={<PostPages />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>

  );
};

export default AppRouter;