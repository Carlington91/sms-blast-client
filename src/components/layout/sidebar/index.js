// import { useEffect, useState } from 'react';
import Logo from '../../branding';
import SideMenu from './SideMenu';

const Sidebar = () => {
  // const [show, setShow] = useState('');

  // useEffect(() => {
  //   setShow('true');
  // }, []);

  // console.log('s', show);
  return (
    <div
      className={`offcanvas  sidebar-wrap sidebar show`}
      data-bs-scroll='true'
      data-bs-backdrop='false'
      tabIndex='-1'
      id='offcanvas'
      aria-labelledby='offcanvas'
      style={{ visibility: 'visible', transform: 'none' }}
    >
      <div className='offcanvas-body p-0'>
        <div className='p-3'>
          <Logo />
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
