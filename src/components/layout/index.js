import Sidebar from '../sidebar';
import Topbar from '../topbar';

const Layout = ({ children }) => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <main>
        <Topbar />
        <div className='container px-5'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
