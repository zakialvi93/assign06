import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{listStyle:"none"}}>
          <li>
            <Link to="/">Video Searching</Link>
          </li>
          
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;