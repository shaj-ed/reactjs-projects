import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="h-screen bg-cyan-900 grid items-center">
      <Outlet />
    </main>
  );
};

export default Layout;
