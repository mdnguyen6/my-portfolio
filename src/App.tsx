import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./components/pages/Intro.page";
import MySkills from "./components/pages/MySkills.page";
import Works from "./components/pages/Works.page";

function App() {
  return (
    <div className="relative h-screen w-screen m-auto">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/myskills" element={<MySkills />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
