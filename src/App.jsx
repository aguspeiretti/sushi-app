import "./App.css";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodMenu from "./components/foodMenu/FoodMenu";
import ProductPage from "./components/Productpage/ProductPage";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Menu" element={<FoodMenu />} />
          <Route path="/Registro" element={<Register />} />
          <Route path="/Producto/:name" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
