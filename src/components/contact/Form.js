import { useForm } from 'react-hook-form';

const Form = ({ groups }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className='card p-md-3 border-top-0'>
      <div className='card-body'>
        <h2 className='fs-5 mb-3'>Add New Contact</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row g-md-3 '>
            <div className='col-sm-12 col-md-4 mb-3'>
              <div className='form-floating'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.lastname ? 'is-invalid' : ''
                  }`}
                  id='lastname'
                  placeholder=''
                  {...register('lastname', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: 'Invalid characters',
                    },
                  })}
                />
                <label htmlFor='lastname'>Last Name</label>

                {errors.lastname && (
                  <span className='invalid-feedback'>
                    {errors.lastname.message}
                  </span>
                )}
              </div>
            </div>
            <div className='col-sm-12 col-md-4 mb-3'>
              <div className='form-floating'>
                <input
                  type='text'
                  className={`form-control ${
                    errors.firstname ? 'is-invalid' : ''
                  }`}
                  id='firstname'
                  placeholder=''
                  {...register('firstname', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: 'Invalid characters',
                    },
                  })}
                />
                <label htmlFor='firstname'>First Name</label>

                {errors.firstname && (
                  <span className='invalid-feedback'>
                    {errors.firstname.message}
                  </span>
                )}
              </div>
            </div>
            <div className='col-sm-12 col-md-4 mb-3'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='middlename'
                  placeholder=''
                />
                <label htmlFor='middlename'>Middle Name</label>
              </div>
            </div>
          </div>

          <div className='row g-3 mb-3'>
            <div className='col-md'>
              <div className='form-floating'>
                <input
                  type='tel'
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id='phone'
                  placeholder=''
                  {...register('phone', { required: 'This field is required' })}
                />
                <label htmlFor='phone'>Phone Number</label>

                {errors.phone && (
                  <span className='invalid-feedback'>
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className='col-md'>
              <div className='form-floating'>
                <input
                  type='date'
                  className='form-control'
                  id='dob'
                  placeholder=''
                />
                <label htmlFor='date'>Date of Birth</label>
              </div>
            </div>
          </div>

          <div className='row g-3 mb-3'>
            <div className='col-md'>
              <div className='form-floating'>
                <input
                  type='email'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id='email'
                  placeholder=''
                  {...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Entered value does not match email format',
                    },
                  })}
                />
                <label htmlFor='email'>Email</label>

                {errors.email && (
                  <span className='invalid-feedback'>
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className='col-md'>
              <div className='form-floating'>
                <select
                  className={`form-select ${errors.group ? 'is-invalid' : ''}`}
                  id='groups'
                  {...register('group', { required: 'This field is required' })}
                >
                  <option value=''>Select...</option>
                  {groups &&
                    groups.map((group) => (
                      <option key={group._id} value={group.name}>
                        {group.name}
                      </option>
                    ))}
                </select>
                <label htmlFor='groups'>Add to Group</label>

                {errors.group && (
                  <span className='text-danger'>{errors.group.message}</span>
                )}
              </div>
            </div>
          </div>
          <button className='btn btn-primary shadow-sm'>Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
