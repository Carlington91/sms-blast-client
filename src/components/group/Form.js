import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useGroup } from '../../context/group/groupContext';

const Form = () => {
  const { createGroup, updateGroup, fetchGroups, group } = useGroup();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  useMemo(() => {
    setValue('name', group && group.name, {
      shouldValidate: group ? true : false,
    });
    setValue('desc', group && group.desc, {
      shouldValidate: group ? true : false,
    });
  }, [group, setValue]);

  const onSubmit = async (data) => {
    if (group) {
      updateGroup(group._id, data);
      reset();
      return;
    }
    createGroup(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <div className='form-floating'>
          <input
            type='text'
            id='name'
            className='form-control'
            placeholder=''
            {...register('name', { required: true })}
          />
          <label htmlFor='group'>Group Name</label>
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
          {group ? 'Update Group' : 'Add Group'}
        </button>
      </div>
    </form>
  );
};

export default Form;
