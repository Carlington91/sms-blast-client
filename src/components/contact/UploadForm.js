const UploadForm = () => {
  return (
    <div className='card shadow-sm'>
      <div className='card-body'>
        <h2 className='fs-5'>Import Contact from CSV/Excel</h2>
        <form>
          <div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='uploadOptions'
                id='csv'
                value='csv'
              />
              <label className='form-check-label' htmlFor='csv'>
                CSV
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='uploadOptions'
                id='excel'
                value='excel'
              />
              <label className='form-check-label' htmlFor='excel'>
                Excel
              </label>
            </div>
          </div>

          <div className='row'>
            <div className='mb-3 col'>
              <label htmlFor=''>Choose file</label>
              <input className='form-control' type='file' id='formFile' />
            </div>

            <div className='col mb-3'>
              <label htmlFor=''>Add to Group</label>
              <select
                className='form-select'
                aria-label='Default select example'
              >
                <option value=''>Select from Group</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
          <div className='mt-3'>
            <button className='btn btn-primary shadow-sm'>
              Upload Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
