import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={<div className="center-content">About</div>}
      />
    </Routes>
  );
}

export default App;
