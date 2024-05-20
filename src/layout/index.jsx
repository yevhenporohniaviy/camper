import Header from "../components/Header/index";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./Layout.styled.js";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
