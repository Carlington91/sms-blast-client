import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
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
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm top-nav'>
      <div className='container-fluid'>
        <div className='d-flex'>
          <Logo />
          <button
            className='navbar-toggler border-0 side-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvas'
            aria-controls='offcanvas'
          >
            <BiDotsVerticalRounded />
          </button>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse top-nav' id='navbarContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <div className='nav-item dropdown'>
              <div
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {user && user.firstname}
              </div>
              <ul
                className='dropdown-menu dropdown-menu-lg-end'
                aria-labelledby='navbarDropdown'
              >
                <DropdownLinks to='/users/profile' label='Profile' />
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <button className='dropdown-item' onClick={logout}>
                  Logout
                </button>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
