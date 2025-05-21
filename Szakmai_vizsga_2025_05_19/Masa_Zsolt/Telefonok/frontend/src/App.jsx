import './App.css';
import Home from './Home';
import Iphone from './App.css';
import Xiaomi from './App.css';
import Samsung from './App.css';

function App() {
    return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Iphone />} />
          <Route index element={<Xiaomi />} />
          <Route index element={<Samsung />} />
        </Route>
      </Routes>
    </BrowserRouter>)
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
