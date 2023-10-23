import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Apply from "./pages/Apply";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
