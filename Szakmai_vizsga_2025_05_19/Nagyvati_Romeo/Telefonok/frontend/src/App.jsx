import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import IPhone from './pages/IPhone';
import Samsung from './pages/Samsung';
// import Home from './pages/Home';
import Xiaomi from './pages/Xiaomi';

function App() {
    <BrowserRouter>
    <Routes>
        <Route path='/' element ={<Cart/>} />
        {/* <Route path='cart' element={<Cart />}/> */}
        <Route path='iphone' element={<IPhone />}/>
        <Route path='samsung' element={<Samsung />}/>
        <Route path='xiaomi' element={<Xiaomi />}/>
    </Routes>
    </BrowserRouter>
}

export default App;
