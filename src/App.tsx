import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Shares from "./pages/Shares";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Share" element={<Shares />} />
      </Routes>
    </Router>
  );
};

export default App;