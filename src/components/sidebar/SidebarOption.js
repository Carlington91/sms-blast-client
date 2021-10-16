import { NavLink } from 'react-router-dom';

const SidebarOption = ({ label, to, Icon }) => {
  return (
    <NavLink to={to} className='nav-link' aria-current='page'>
      {Icon && <Icon className='me-2 fs-6 ' />}
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarOption;
