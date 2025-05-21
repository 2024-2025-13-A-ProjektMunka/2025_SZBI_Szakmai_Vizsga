import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
          <li>
            <Link to="../Home.jsx">Home</Link>
          </li>
          <li>
            <Link to="">Iphone</Link>
          </li>
          <li>
            <Link to="">Xiaomi</Link>
          </li>
          <li>
            <Link to="">Samsung</Link>
          </li>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;