import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useMessage } from '../../context/message/messageContext';

const Form = ({ presetMessageData, create }) => {
  const { createPresetMessage, updatePresetMessage, success } = useMessage();
  const [edit, setEdit] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm({ mode: 'all', defaultValues: { title: '', content: '' } });

  useMemo(() => {
    if (presetMessageData) {
      setValue('title', presetMessageData.title);
      setValue('content', presetMessageData.content);
    }
  }, [presetMessageData, setValue]);

  const onSubmit = (data) => {
    if (presetMessageData) {
      updatePresetMessage(presetMessageData._id, data);
      history.push('/preset-messages');
      reset();
      return;
    }

    createPresetMessage(data);
    if (success) {
      history.push('/preset-messages');
      reset();
    }
  };

  return (
    <div className='card'>
      <div className='card-header pt-3'>
        {create ? (
          <h4 className='fs-5'>Add Preset Message</h4>
        ) : !edit && presetMessageData ? (
          <button
            className='btn btn-secondary btn-sm mb-3'
            onClick={() => setEdit(true)}
          >
            Edit Message
          </button>
        ) : (
          <h4 className='fs-5'>Editing "{presetMessageData.title}"</h4>
        )}
      </div>
      <div className='card-body py-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='title'
                placeholder=''
                readOnly={!create && !edit ? true : false}
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
                readOnly={!create && !edit ? true : false}
                style={{ height: '100px' }}
                {...register('content', { required: true, maxLength: 500 })}
              />

              <label htmlFor='message' className='form-label'>
                Message Content
              </label>
            </div>

            {errors.content && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          {!presetMessageData ? (
            <div className='d-grid'>
              <div className='mt-4'>
                <button className='btn btn-primary shadow-sm'>
                  Add Message
                </button>
              </div>
            </div>
          ) : (
            edit && (
              <>
                <button
                  className='btn btn-outline-secondary shadow-sm'
                  onClick={() => {
                    setEdit(false);
                    history.push('/preset-messages');
                  }}
                >
                  Cancel
                </button>
                <button
                  className='btn btn-primary shadow-sm ms-3'
                  disabled={!isValid || !isDirty}
                >
                  {isSubmitting ? '...Uploading Message' : 'Update Message'}
                </button>
              </>
            )
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
