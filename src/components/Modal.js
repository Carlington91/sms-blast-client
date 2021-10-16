const Modal = ({ children, modalTitle, modalFooter }) => {
  return (
    <div>
      <div
        className='modal fade'
        id='modal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                {modalTitle && modalTitle}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>{children}</div>
            <div className='modal-footer'>{modalFooter && modalFooter}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
