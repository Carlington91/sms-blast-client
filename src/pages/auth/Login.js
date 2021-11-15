import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

const Login = () => {
  const { login } = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    login(data, history);
  };

  return (
    <section className='auth vw-100 vh-100 bg-light d-flex justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-4 card auth-form border-0'>
        <div className='card-body p-5'>
          <div className='auth-header text-center mb-5'>
            <h1 className=' fs-3'>Message Blast</h1>
            <h2 className='fs-4 my-4'>Welcome Back</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <input
                type='email'
                className='form-control py-2'
                placeholder='Email'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='mb-3'>
              <input
                type='password'
                className='form-control py-2'
                placeholder='Password'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>

            <div className='actions d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <input type='checkbox' />
                <label className='ms-1'>Remember me</label>
              </div>
              <p>Forgot Password?</p>
            </div>

            <div className='d-grid '>
              <button type='submit' className='btn btn-primary mt-3 btn-lg'>
                Log In
              </button>
            </div>
          </form>
          <hr />
          Don't have an account? Sign Up
        </div>
      </div>
    </section>
  );
};

export default Login;
