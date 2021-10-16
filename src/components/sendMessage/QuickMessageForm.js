import { useForm } from 'react-hook-form';

const QuickMessageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='card p-4 shadow-sm'>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <div class='form-floating'>
              <select
                className='form-select'
                id='senderId'
                {...register('senderId', { required: true })}
              >
                <option value=''>Choose Sender ID</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
              <label htmlFor='senderId' className='form-label fw-bold'>
                Choose Sender ID
              </label>
            </div>
            {errors.senderId && (
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
                {...register('message', { required: true })}
              />
              <label htmlFor='message' className='form-label fw-bold'>
                Message
              </label>
            </div>
            {errors.message && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>

          <div className='mb-3'>
            <div class='form-floating'>
              <input
                class='form-control'
                list='datalistOptions'
                id='contacts'
                placeholder='Type to search contacts...'
                {...register('contacts', { required: true })}
              />
              <label htmlFor='contacts' className='form-label fw-bold'>
                Type to search contacts...
              </label>
            </div>

            <datalist id='datalistOptions' multiple>
              <option value='San Francisco' />
              <option value='New York' />
              <option value='Seattle' />
              <option value='Los Angeles' />
              <option value='Chicago' />
            </datalist>
            {errors.contacts && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>

          <div className='mt-4'>
            <button className='btn btn-primary shadow-sm'>
              Send Quick Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickMessageForm;
