import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Iphone from './pages/IPhone';
import Samsung from './pages/Samsung.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/iphone"
                    element={<Iphone />}
                />
                <Route
                    path="/samsung"
                    element={<Samsung />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
