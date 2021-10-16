import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGroup } from '../../context/group/groupContext';
import GroupDetail from './GroupDetail';

const GroupMessageForm = () => {
  const { fetchGroups, groups } = useGroup();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    fetchGroups();
    return () => fetchGroups();
    //eslint-disable-next-line
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <section>
      <div className='row'>
        <div className='col col-md-8 '>
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
                <select
                  className='form-select'
                  id='message'
                  placeholder=''
                  {...register('message', { required: true })}
                >
                  <option value=''>Select...</option>
                  {groups.map((group) => (
                    <option key={group._id} value={group.name}>
                      {group.name}
                    </option>
                  ))}
                </select>
                <label htmlFor='message'>Select Message Template</label>
              </div>
              {errors.message && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>

            <GroupDetail control={control} />

            <div className='d-grid'>
              <button className='btn btn-primary shadow-sm '>
                Send Message To Group
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GroupMessageForm;
