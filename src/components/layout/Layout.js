import Sidebar from './sidebar';
import Topbar from './TopBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className='wrapper'>
        <Sidebar />
        <main className='d-flex flex-column  w-100 '>
          <Topbar />
          <div className='container-fluid px-md-5'>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
