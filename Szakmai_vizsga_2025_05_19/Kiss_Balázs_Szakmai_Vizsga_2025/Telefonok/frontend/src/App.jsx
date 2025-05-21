import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Samsung from './pages/Samsung'
import Xiaomi from './pages/Xiaomi'
import IPhone from './pages/IPhone'
import Cart from './pages/Cart'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/samsung' element={<Samsung/>} />
                <Route path='/iphone' element={<IPhone/>} />
                <Route path='/xiaomi' element={<Xiaomi/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
