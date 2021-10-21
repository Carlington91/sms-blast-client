import { useWatch } from 'react-hook-form';
const GroupDetail = ({ control }) => {
  const group = useWatch({
    control,
    name: 'group',
    defaultValue: '',
  });

  const message = useWatch({
    control,
    name: 'message',
    defaultValue: '',
  });

  return (
    <>
      {(group || message) && (
        <div className='card my-3'>
          <div className='card-body'>
            {group ? (
              <div className='mb-3'>
                <p className='fs-6'>
                  <span className='fw-bold'> Message will sent to:</span>{' '}
                  <span className='text-primary'>{group} </span>
                </p>
              </div>
            ) : (
              ''
            )}

            {message ? (
              <>
                <p className='fs-6'>
                  <span className='fw-bold'>Message Content:</span>{' '}
                  <span>{message}</span>
                </p>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GroupDetail;
