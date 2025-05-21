import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Iphone from './pages/IPhone';
import Samsung from './pages/Samsung';
import Xiaomi from './pages/Xiaomi';
import Cart from './pages/Cart';


function App() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routers>

            <Route
            index
            element = {<Home/>}
            />


            <Route
            path = '/iphone'
            element = {<Iphone/>}
            />

            <Route
            path = '/samsung'
            element = {<Samsung/>}
            />

            <Route
            path = '/xiaomi'
            element = {<Xiaomi/>}
            />

            <Route
            path = '/cart'
            element = {<Cart/>}
            />


        </Routers>
        </BrowserRouter>
    );
}

export default App;
