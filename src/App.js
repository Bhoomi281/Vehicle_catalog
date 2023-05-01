
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vehicle from "./Vehicle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vehicle />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

 export default App;

