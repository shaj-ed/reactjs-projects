import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";

const SharedLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
