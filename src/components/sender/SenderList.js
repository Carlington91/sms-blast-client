import { useEffect } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useSender } from '../../context/sender/senderContext';
import CustomTable from '../CustomTable';

const SenderList = () => {
  const { fetchSenders, deleteSender, setSenderUpdateForm, senders } =
    useSender();

  useEffect(() => {
    fetchSenders();
    return () => fetchSenders();
    //eslint-disable-next-line
  }, []);

  const handleEdit = (val) => {
    setSenderUpdateForm(val);
  };

  const handleDelete = (id) => {
    deleteSender(id);
  };

  const header = [
    { title: 'Name', prop: 'name', sortable: true },
    {
      title: 'Action',
      prop: '_id',
      cell: (row) => (
        <div className='d-flex'>
          <FaEdit
            className='text-success fs-5 user-select me-2 '
            data-bs-toggle='modal'
            data-bs-target='#modal'
            onClick={() => handleEdit(row)}
          />

          <FaRegTrashAlt
            className='text-danger fs-5 user-select'
            onClick={() => handleDelete(row._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <section className='mt-3'>
      <div className='card shadow-sm py-3'>
        <div className='card-body'>
          <CustomTable
            tableHeaders={header}
            tableBody={senders ? senders : []}
            rowsPerPage={5}
            rowsPerPageOption={[5, 10, 15, 20]}
          />
        </div>
      </div>
    </section>
  );
};

export default SenderList;
