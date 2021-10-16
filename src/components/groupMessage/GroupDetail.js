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
            <h3 className='fs-5'>{group}</h3>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupDetail;
