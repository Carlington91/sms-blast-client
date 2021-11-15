import { useWatch } from 'react-hook-form';

const GroupDetail = ({ control, groups }) => {
  const group = useWatch({
    control,
    name: 'group',
    defaultValue: '',
  });

  const presetMessage = useWatch({
    control,
    name: 'message',
    defaultValue: '',
  });

  const groupDetails = groups?.find((data) => data._id === group);

  return (
    <>
      {group || presetMessage ? (
        <div className='card my-3'>
          <div className='card-body'>
            {group ? (
              <div className='mb-3'>
                <p className='fs-6'>
                  <span className='fw-bold'> Message will sent to:</span>{' '}
                  <span className='text-primary'>{groupDetails.name} </span>
                </p>
              </div>
            ) : (
              ''
            )}

            {presetMessage ? (
              <>
                <p className='fs-6'>
                  <span className='fw-bold'>Message Content:</span>{' '}
                  <span>{presetMessage}</span>
                </p>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default GroupDetail;
