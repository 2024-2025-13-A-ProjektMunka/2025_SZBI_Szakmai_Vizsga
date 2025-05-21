import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
          <div>
            <Link to="/Home">Home</Link>
          </div>
          <div>
            <Link to="/Samsung">Samsung</Link>
          </div>
          <div>
            <Link to="/IPhone">IPhone</Link>
          </div>
          <div>
            <Link to="/Cart">Cart</Link>
          </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;