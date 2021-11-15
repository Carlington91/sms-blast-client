import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSender } from '../../context/sender/senderContext';

const Form = () => {
  const { createSender, updateSender, sender } = useSender();

  // console.log(sender);

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
    setValue('name', sender && sender.name, {
      shouldValidate: sender ? true : false,
    });
  }, [sender, setValue]);

  const onSubmit = async (data) => {
    if (sender) {
      updateSender(sender._id, data);
      reset();
      return;
    }
    createSender(data);
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
          <label htmlFor='sender'>Sender Name</label>
        </div>
        {errors.name && (
          <span className='text-danger'>This field is required</span>
        )}
      </div>

      <div className='d-grid'>
        <button
          className='btn btn-primary shadow-sm '
          data-bs-dismiss={isValid && 'modal'}
        >
          {sender ? 'Update Sender' : 'Add Sender'}
        </button>
      </div>
    </form>
  );
};

export default Form;
