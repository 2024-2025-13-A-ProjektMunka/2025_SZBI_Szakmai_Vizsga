import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Home.css';
import './IPhone.css';
import './Samsung.css';
import './Cart.css';
import { Route, Router, } from 'express';



function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="IPhone" element={<IPhone />} />
          <Route path="Samsung" element={<Samsung />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
