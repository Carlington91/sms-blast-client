import Logo from '../../branding';
import SideMenu from './SideMenu';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div
        className='offcanvas offcanvas-start sidebar-wrap'
        data-bs-scroll='true'
        tabIndex='-1'
        id='offcanvas'
        aria-labelledby='offcanvasLabel'
      >
        <div className='offcanvas-body p-0'>
          <div className='p-sm-3 p'>
            <Logo />
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
