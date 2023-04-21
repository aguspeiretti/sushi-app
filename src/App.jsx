import "./App.css";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FoodMenu from "./components/foodMenu/FoodMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<FoodMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
