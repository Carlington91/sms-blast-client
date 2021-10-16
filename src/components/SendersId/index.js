import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGroup } from '../../context/group/groupContext';

const SenderIdForm = () => {
  const { fetchGroups, groups } = useGroup();

  useEffect(() => {
    fetchGroups();
    return () => fetchGroups();
    //eslint-disable-next-line
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = async (data) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <div className='form-floating'>
          <select
            className='form-select'
            id='group'
            placeholder=''
            {...register('group', { required: true })}
          >
            <option value=''>Select Group Name</option>
            {groups.map((group) => (
              <option key={group._id} value={group.name}>
                {group.name}
              </option>
            ))}
          </select>
          <label htmlFor='group'>Select Group Name</label>
        </div>
        {errors.name && (
          <span className='text-danger'>This field is required</span>
        )}
      </div>

      <div className='mb-3'>
        <div className='form-floating'>
          <textarea
            className='form-control'
            id='desc'
            rows='5'
            placeholder=''
            style={{ height: '100px' }}
            {...register('desc', { required: true, maxLength: 500 })}
          />

          <label htmlFor='desc' className='form-label'>
            Description
          </label>
        </div>

        {errors.desc && (
          <span className='text-danger'>This field is required</span>
        )}
      </div>

      <div className='d-grid'>
        <button
          className='btn btn-primary shadow-sm '
          data-bs-dismiss={isValid && 'modal'}
        >
          Send Message To Group
        </button>
      </div>
    </form>
  );
};

export default SenderIdForm;
