import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import IPhone from "./pages/IPhone";
import Samsung from "./pages/Samsung";
import Xiaomi from "./pages/Xiaomi";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/Home' />
                <Route path='/IPhone' />
                <Route path='/Samsung' />
                <Route path='/Xiaomi' />
                <Route path='/Cart' />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
