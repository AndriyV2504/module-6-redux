import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return <main className={css.containe}>{children}</main>;
};

export default Layout;
