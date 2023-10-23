import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Apply from "./pages/Apply";
import ErrorPage from "./pages/Error";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="/apply/:id" element={<Apply />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
