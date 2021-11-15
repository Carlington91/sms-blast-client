import { useForm } from 'react-hook-form';
// import excelToJson from 'convert-excel-to-json';
import readXlsxFile from 'read-excel-file';

import { useContact } from '../../context/contact/contactContext';

const UploadForm = ({ groups }) => {
  const { createFromFileUpload } = useContact();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { fileOptions: 'excel' },
  });

  const fileTypes = ['csv', 'excel'];

  const schema = {
    Firstname: {
      // JSON object property name.
      prop: 'firstname',
      type: String,
    },
    Lastname: {
      prop: 'lastname',
      type: String,
      required: true,
    },
    Middlename: {
      prop: 'middlename',
      type: String,
    },
    Phone: {
      prop: 'phone',
      type: String,
      required: true,
    },
    Email: {
      prop: 'email',
      type: String,
      required: true,
    },
  };

  const onSubmit = async (data) => {
    const file = await readXlsxFile(data.formFile[0], { schema });
    data.formFile = file;
    createFromFileUpload(data);
  };

  return (
    <div className='card  border-top-0'>
      <div className='card-body'>
        <h2 className='fs-5 mb-3'>Import Contact from CSV/Excel</h2>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='mb-2'>
            {fileTypes.map((f) => (
              <div className='form-check form-check-inline' key={f}>
                <input
                  className='form-check-input'
                  type='radio'
                  name='uploadOptions'
                  id={f}
                  value={f}
                  {...register('fileOptions', { required: true })}
                />
                <label className='form-check-label' htmlFor='csv'>
                  {f}
                </label>
              </div>
            ))}
          </div>

          <div className='m-0 mb-3 col '>
            <label htmlFor=''>Choose file</label>
            <input
              className={`form-control ${errors.formFile ? 'is-invalid' : ''}`}
              type='file'
              id='formFile'
              accept={
                watch('fileOptions') === 'csv'
                  ? 'text/csv'
                  : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
              }
              {...register('formFile', {
                required: 'This field is required',
              })}
            />
            {errors.formFile && (
              <span className='invalid-feedback'>
                {errors.formFile.message}
              </span>
            )}
          </div>

          <div className='m-0 mb-3 col'>
            <label htmlFor='group'>Add to Group</label>
            <select
              className={`form-select ${errors.group ? 'is-invalid' : ''}`}
              aria-label='select group'
              {...register('group', {
                required: 'This field is required',
              })}
            >
              <option value=''>Select from Group</option>
              {groups &&
                groups.map((group) => (
                  <option key={group._id} value={group._id}>
                    {group.name}
                  </option>
                ))}
            </select>
            {errors.group && (
              <span className='invalid-feedback'>{errors.group.message}</span>
            )}
          </div>

          <div className='d-grid mt-5 shadow-sm'>
            <button className='btn btn-primary'>Upload Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
