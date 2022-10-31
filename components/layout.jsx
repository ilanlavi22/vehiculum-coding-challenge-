import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container my-10">{children}</main>
    </>
  );
};

export default Layout;
