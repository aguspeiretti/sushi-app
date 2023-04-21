import "./App.css";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodMenu from "./components/foodMenu/FoodMenu";
import ProductPage from "./components/Productpage/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/producto/:name" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
