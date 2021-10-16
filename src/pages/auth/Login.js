import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='auth vw-100 vh-100 bg-light d-flex justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-4 card shadow'>
        <div className='card-body p-5'>
          <h1 className='text-center'>Login</h1>
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
    </div>
  );
};

export default Login;
