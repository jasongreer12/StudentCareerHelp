import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import MainPage from "./Main.js"; // Main page with the button
import CSHierarchyPage from "./D3TreeGraph.js"; // Page for the D3 graph

function App() {
  return (
    <Router> {/* Wrap your Routes with a Router */}
      <Routes>
        {/* Define routes for your pages */}
        <Route path="/" element={<MainPage />} />
        <Route path="/D3TreeGraph" element={<CSHierarchyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
