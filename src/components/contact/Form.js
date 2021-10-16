import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGroup } from '../../context/group/groupContext';

const Form = () => {
  const { groups, fetchGroups } = useGroup();

  useEffect(() => {
    fetchGroups();
    //eslint-disable-next-line
  }, []);

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

  const groupsName = groups && groups.map((group) => group.name);

  return (
    <div className='card p-3 shadow-sm'>
      <div className='card-body'>
        <h2 className='fs-5 mb-3'>Add New Contact</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row g-3 '>
            <div className='col col-md-4 mb-3'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='lastname'
                  placeholder=''
                  {...register('lastname', { required: true })}
                />
                <label htmlFor='lastname'>Last Name</label>
              </div>
              {errors.lastname && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='col col-md-4 mb-3'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='firstname'
                  placeholder=''
                  {...register('firstname', { required: true })}
                />
                <label htmlFor='firstname'>First Name</label>
              </div>
              {errors.firstname && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='col col-md-4 mb-3'>
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
                  className='form-control'
                  id='phone'
                  placeholder=''
                  {...register('phone', { required: true })}
                />
                <label htmlFor='phone'>Phone Number</label>
              </div>
              {errors.phone && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>

            <div className='col-md'>
              <div className='form-floating'>
                <input
                  type='date'
                  className='form-control'
                  id='dob'
                  placeholder=''
                />
                <label htmlFor='lastname'>Date of Birth</label>
              </div>
            </div>
          </div>

          <div className='row g-3 mb-3'>
            <div className='col-md'>
              <div className='form-floating'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder=''
                  {...register('email', { required: true })}
                />
                <label htmlFor='email'>Email</label>
              </div>
              {errors.email && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='col-md'>
              <div className='form-floating'>
                <select
                  className='form-select'
                  id='groups'
                  {...register('group', { required: true })}
                >
                  <option value=''>Select...</option>
                  {groupsName &&
                    groupsName.map((name, i) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                </select>
                <label htmlFor='groups'>Add to Group</label>
              </div>
              {errors.email && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
          </div>
          <button className='btn btn-primary shadow-sm'>Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
