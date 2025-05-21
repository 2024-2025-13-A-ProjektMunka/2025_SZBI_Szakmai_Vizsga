import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Iphone from "./pages/Iphone";
import Samsung from "./pages/Samsung";
import Xiaomi from "./pages/Xiaomi";

function App() {
    return ( 
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="Samsung" element={<Samsung />} />
          <Route path="Xiaomi" element={<Xiaomi />} />
    </Routes>
    </BrowserRouter>
    
    );
}

export default App;
