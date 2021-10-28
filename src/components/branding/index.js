import { RiMessage2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

const Logo = () => {
  const { user } = useAuth();
  return (
    <Link
      to={user ? '/dashboard' : '/'}
      className='d-flex align-items-center ps-md-3 py-2 navbar-brand logo'
    >
      <RiMessage2Line className='fs-3 me-2 text-primary' />
      <span className='fs-4 fw-bold'>Logo</span>
    </Link>
  );
};

export default Logo;
