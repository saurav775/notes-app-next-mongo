import Navbar from "../Navbar";
import { Wrapper } from "./style";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};
export default Layout;
