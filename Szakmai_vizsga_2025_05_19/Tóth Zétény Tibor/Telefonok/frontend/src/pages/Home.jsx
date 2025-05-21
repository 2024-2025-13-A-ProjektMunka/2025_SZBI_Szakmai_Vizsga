import { BrowserRouter, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-kategori">
        <div className="home-kategoriak">
        <div className="home-kategoria">
            <Link to="/">Home</Link>
        </div>
        <div className="home-kategoria">
            <Link to="/Cart">Kosár</Link>
        </div>
        </div>
        <div className="home-kategoria">
        <Link to="/Samsung">Samsung</Link>
        </div>
        <div className="home-kategoria">
        <Link to="/Iphone">Iphone</Link>
        </div>
        <div className="home-kategoria">
        <Link to="/Xiaomi">Xiaomi</Link>
        </div>
        </div>

      <Outlet />
    </>
  )
};

export default Home;