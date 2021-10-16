import Logo from '../branding';
import SideMenu from './SideMenu';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Logo />
      <div className='px-3'>
        <SideMenu />
      </div>
    </div>
  );
};

export default Sidebar;
