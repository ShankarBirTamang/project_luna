import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
