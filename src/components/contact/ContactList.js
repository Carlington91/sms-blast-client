import { useEffect, useState, useMemo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useContact } from '../../context/contact/contactContext';
import { useGroup } from '../../context/group/groupContext';
import CustomTable from '../CustomTable';
import { formatter } from '../../helpers/formatPhoneNumber';
import { FaPlus } from 'react-icons/fa';

const ContactList = () => {
  const { fetchContacts, contacts } = useContact();
  const { fetchGroups, groups } = useGroup();

  const [groupId, setGroupId] = useState('');
  const history = useHistory();

  useMemo(() => {
    setGroupId(groups[0]?._id);
  }, [groups]);

  useEffect(() => {
    fetchGroups();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (groupId) fetchContacts(groupId);
    // eslint-disable-next-line
  }, [groupId]);

  const handleEdit = (id) => {
    history.push(`/contact/edit?id=${id}`);
  };

  const handleDelete = (id) => console.log(id);

  const header = [
    {
      title: 'Last Name',
      prop: 'lastname',
      sortable: true,
    },
    { title: 'First Name', prop: 'firstname', sortable: true },
    { title: 'Phone', prop: 'phone', cell: (row) => formatter(row.phone) },
    {
      title: 'Last Updated',
      prop: 'updatedAt',
      sortable: true,
      cell: (row) => new Date(row.updatedAt).toLocaleDateString(),
    },
    {
      title: 'Action',
      prop: '_id',
      cell: (row) => (
        <div className='d-flex'>
          <button
            className='btn btn-primary btn-sm me-2'
            onClick={() => handleEdit(row._id)}
          >
            edit
          </button>
          <button
            className='btn btn-danger btn-sm'
            onClick={() => handleDelete(row._id)}
          >
            delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='mb-4 w-50'>
          <h3 className='fs-5'>Contacts are filtered by groups</h3>
          <select
            className='form-select'
            value={groupId}
            placeholder='Type to search...'
            onChange={(e) => setGroupId(e.target.value)}
          >
            {groups?.map((group) => (
              <option key={group._id} value={group._id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>

        <Link to={'/contact/new'} className='btn btn-primary'>
          <FaPlus /> New Contact
        </Link>
      </div>

      <div className='card pb-3'>
        <div className='card-body'>
          <CustomTable
            tableHeaders={header}
            tableBody={contacts ? contacts : []}
            rowsPerPage={5}
            rowsPerPageOption={[5, 10, 15, 20]}
            classes={{
              table: 'table table-striped table-hover table-responsive',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactList;
