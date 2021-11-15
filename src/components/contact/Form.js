import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useContact } from '../../context/contact/contactContext';
import { formatter } from '../../helpers/formatPhoneNumber';

const Form = ({ groups, contact, edit }) => {
  const intialValues = {
    lastname: '',
    firstname: '',
    middlename: '',
    phone: '',
    email: '',
    group: '',
  };

  const { updateContact, createContact, success } = useContact();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: intialValues,
  });

  useMemo(() => {
    if (edit && contact) {
      const { _id, updatedAt, createdAt, __v, group, ...others } = contact;
      Object.entries(others).forEach(([key, val]) => {
        setValue(key, val);
      });
      setValue('group', contact?.group?._id);
    }
  }, [setValue, contact, edit]);

  const onSubmit = async (data) => {
    if (edit && contact) {
      updateContact(contact._id, data);
      success && history.push('/contacts');
      return;
    }

    createContact(data);
    success && history.push('/contacts');
  };

  return (
    <div className='card p-md-3 border-top-0'>
      <div className='card-body'>
        <h2 className='fs-5 mb-3'>
          {edit && contact
            ? `Updating ${contact.firstname} ${contact.lastname} `
            : 'Add New Contact'}
        </h2>

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
                  placeholder=''
                  value={watch('phone') || ''}
                  maxLength='14'
                  {...register('phone', {
                    required: 'This field is required',
                    setValueAs: (v) => formatter(v),
                  })}
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
                  {...register('dob', { valueAsDate: true })}
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
                      <option key={group._id} value={group._id}>
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
          <div className='d-grid mt-5 shadow'>
            <button className='btn btn-primary shadow-sm'>
              {edit ? 'Update Contact' : 'Add Contact'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
