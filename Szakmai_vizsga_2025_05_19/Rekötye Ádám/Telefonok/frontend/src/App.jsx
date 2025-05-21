import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Samsung from './pages/Samsung.jsx';
import Iphone from './pages/IPhone.jsx';
import Xiaomi from './pages/Xiaomi.jsx';

function App() {
    return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/samsung" element={<Samsung />}/>
        <Route path="/iphone" element={<Iphone />}/>
        <Route path="/xiaomi" element={<Xiaomi />}/>
      </Routes>
    </BrowserRouter></>;
}

export default App;
