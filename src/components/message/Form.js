import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='card p-4 shadow-sm'>
      <div className='card-body'>
        <h2 className='fs-5 mb-3'>Add Preset Message</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='title'
                placeholder=''
                {...register('title', { required: true, maxLength: 100 })}
              />
              <label htmlFor='title'>Message Title</label>
            </div>

            {errors.title && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>

          <div className='mb-3'>
            <div className='form-floating'>
              <textarea
                className='form-control'
                id='message'
                rows='5'
                placeholder=''
                style={{ height: '100px' }}
                {...register('message', { required: true, maxLength: 500 })}
              />

              <label htmlFor='message' className='form-label'>
                Message Content
              </label>
            </div>

            {errors.message && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='mt-4'>
            <button className='btn btn-primary shadow-sm'>Add Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
