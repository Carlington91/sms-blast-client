import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

const Login = () => {
  const { signUp, user } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  useEffect(() => {
    user && history.push('/dashboard');
    //eslint-disable-next-line
  }, [user]);

  const onSubmit = (data) => {
    signUp(data);
  };

  return (
    <section className='auth vw-100 vh-100 bg-light'>
      <div className='auth-wrap '>
        <div className='row'>
          <div className='col col-md-7'>
            <div className='card auth-form border-0 vh-100 px-md-5'>
              <div className='card-body p-5'>
                <div className='form-header mb-4'>
                  <h1 className='fs-3'>Create Account</h1>
                  <p>
                    Already a member? <Link to='/'>Sign In</Link>
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='row g-3'>
                  <div className='mb-3 col-sm-12 col-md-6'>
                    <label className='fw-bold' htmlFor='firstname'>
                      First Name
                    </label>
                    <input
                      type='firstname'
                      className={`form-control ${
                        errors.firstname ? 'is-invalid' : ''
                      }`}
                      id='firstname'
                      {...register('firstname', {
                        required: 'This field is required',
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Invalid characters',
                        },
                      })}
                    />
                    {errors.firstname && (
                      <span className='invalid-feedback'>
                        {errors.firstname.message}
                      </span>
                    )}
                  </div>
                  <div className='mb-3 col-sm-12 col-md-6'>
                    <label className='fw-bold' htmlFor='lastname'>
                      Last Name
                    </label>
                    <input
                      type='lastname'
                      className={`form-control ${
                        errors.lastname ? 'is-invalid' : ''
                      }`}
                      id='lastname'
                      {...register('lastname', {
                        required: 'This field is required',
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Invalid characters',
                        },
                      })}
                    />
                    {errors.lastname && (
                      <span className='invalid-feedback'>
                        {errors.lastname.message}
                      </span>
                    )}
                  </div>

                  <div className='mb-3'>
                    <label className='fw-bold' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      className={`form-control ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                      id='email'
                      {...register('email', {
                        required: 'This field is required',
                      })}
                    />
                    {errors.email && (
                      <span className='invalid-feedback'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className='mb-3'>
                    <label className='fw-bold' htmlFor='password'>
                      Password
                    </label>
                    <input
                      type='password'
                      placeholder='6 or more characters'
                      className={`form-control ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      id='password'
                      {...register('password', {
                        required: 'This field is required',
                        minLength: {
                          value: 6,
                          message: 'Password must have at least 6 characters',
                        },
                      })}
                    />
                    {errors.password && (
                      <span className='invalid-feedback'>
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <div className='mb-3'>
                    <label className='fw-bold' htmlFor='password'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      className={`form-control ${
                        errors.password2 ? 'is-invalid' : ''
                      }`}
                      id='password2'
                      {...register('password2', {
                        required: true,
                        validate: (value) =>
                          value === watch('password', '') ||
                          'The passwords do not match',
                      })}
                    />
                    {errors.password2 && (
                      <span className='invalid-feedback'>
                        {errors.password2 && 'The passwords do not match'}
                      </span>
                    )}
                  </div>
                  <div className='d-grid '>
                    <button
                      type='submit'
                      className='btn btn-primary mt-3 btn-lg'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='col-md-5 '>
            <div className='pt-5 d-flex justify-content-center align-items-start flex-column px-5'>
              <h4>Welcome</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                a nemo dignissimos est. Asperiores, totam non quasi dolore quis
                unde?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
