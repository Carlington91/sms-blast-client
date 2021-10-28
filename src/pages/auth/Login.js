import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

const Login = () => {
  const { login, user, error } = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  useEffect(() => {
    return !user ? false : history.push('/dashboard');

    //eslint-disable-next-line
  }, [user, history]);

  const onSubmit = (data) => {
    login(data);
    user && history.push('/dashboard');
  };

  return (
    <section className='auth vw-100 vh-100 bg-light d-flex justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-4 card auth-form border-0'>
        <div className='card-body p-5'>
          <h1 className='text-center'>Login</h1>
          {error && error}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control'
                id='email'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>

            <div className='d-grid '>
              <button type='submit' className='btn btn-primary mt-3 btn-lg'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
