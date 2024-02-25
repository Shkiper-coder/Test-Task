import React from "react";
import "./styles/App.modules.css"
import { Routes, Route, Router } from "react-router-dom";
import About from "./pages/About";
import PostPages from "./pages/PostPages";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/postPages" element={<PostPages />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
