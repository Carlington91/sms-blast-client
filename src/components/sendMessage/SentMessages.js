import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMessage } from '../../context/message/messageContext';
import CustomTable from '../CustomTable';

const SentMessages = () => {
  const { fetchSentMessages, sentMessages } = useMessage();
  const history = useHistory();

  useEffect(() => {
    fetchSentMessages();
    return () => fetchSentMessages();

    // eslint-disable-next-line
  }, []);

  const header = [
    {
      title: 'Group Name',
      prop: 'group',
      sortable: true,
      cell: (row) => row.group.name,
    },
    {
      title: 'Message',
      prop: 'message',
      cell: (row) => row.message.substr(0, 100).concat('...'),
    },

    {
      title: 'Date',
      prop: 'createdAt',
      sortable: true,
      cell: (row) => new Date(row.updatedAt).toLocaleDateString(),
    },
  ];

  function onRowClick(row) {
    history.push(`/sent-messages/${row._id}`);
  }

  return (
    <div className='sent-message'>
      <CustomTable
        tableHeaders={header}
        tableBody={sentMessages ? sentMessages : []}
        rowsPerPage={5}
        rowsPerPageOption={[5, 10, 15, 20]}
        onRowClick={onRowClick}
        classes={{
          table: 'table table-striped table-hover table-responsive',
        }}
      />
    </div>
  );
};

export default SentMessages;
