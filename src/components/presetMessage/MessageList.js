import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaRegTrashAlt } from 'react-icons/fa';
import { useMessage } from '../../context/message/messageContext';
import CustomTable from '../CustomTable';

const MessageList = () => {
  const { fetchPresetMessages, deletePresetMessage, presetMessages } =
    useMessage();

  useEffect(() => {
    fetchPresetMessages();
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    deletePresetMessage(id);
  };

  const header = [
    { title: 'Message Title', prop: 'title', sortable: true },
    {
      title: 'Message Content',
      prop: 'content',
      sortable: true,
      cell: (row) => row.content.substr(0, 100).concat('...'),
    },
    {
      title: 'Action',
      prop: '_id',
      cell: (row) => (
        <div className='d-flex'>
          <Link to={`/update-preset-message/${row._id}`}>
            <FaEye className='text-primary fs-5 user-select me-2' />
          </Link>

          {
            <FaRegTrashAlt
              className='text-danger fs-5 user-select'
              onClick={() => handleDelete(row._id)}
            />
          }
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className='card shadow-sm py-3'>
        <div className='card-body'>
          <CustomTable
            tableHeaders={header}
            tableBody={presetMessages ? presetMessages : []}
            rowsPerPage={5}
            rowsPerPageOption={[5, 10, 15, 20]}
            classes={{
              table: 'table table-striped table-hover table-responsive',
              td: 'py-3',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MessageList;
