import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useAuth } from '../../context/auth/authContext';
import Logo from '../branding';

const DropdownLinks = ({ label, to }) => (
  <li>
    <Link to={to} className='dropdown-item'>
      {label}
    </Link>
  </li>
);

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className=' navbar-light bg-white top-nav'>
      <div className='d-flex align-items-center justify-content-between mx-3 mx-md-0 top-nav-inner'>
        <div className='d-flex'>
          <Logo />

          <button
            className='sidebar-toggler border-0 '
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvas'
            aria-controls='offcanvas'
          >
            <BiMenu />
          </button>
        </div>

        <div className='dropdown me-3'>
          <span
            className='dropdown-toggle'
            type='button'
            id='dropdownMenu'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {user && user.firstname}
          </span>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenu'>
            <DropdownLinks label='Profile' to='/user/profile' />
            <DropdownLinks label='Profile' to='/user/profile' />
            <hr className='dropdown-divider' />
            <span className='dropdown-item btn-logout' onClick={() => logout()}>
              Login
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
