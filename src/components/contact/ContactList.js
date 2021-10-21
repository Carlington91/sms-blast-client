import { useEffect, useState, useMemo } from 'react';
import { useContact } from '../../context/contact/contactContext';
import { useGroup } from '../../context/group/groupContext';
import CustomTable from '../CustomTable';

const ContactList = () => {
  const { fetchContacts, contacts } = useContact();
  const { fetchGroups, groups } = useGroup();

  const [groupId, setGroupId] = useState('');

  useMemo(() => {
    setGroupId(groups[0]?._id);
  }, [groups]);

  useEffect(() => {
    fetchContacts(groupId);

    return () => fetchContacts(groupId);
    //eslint-disable-next-line
  }, [groupId]);

  useEffect(() => {
    fetchGroups();

    return () => fetchGroups();
    //eslint-disable-next-line
  }, []);

  // console.log('groupId: ', group);

  const handleEdit = (id) => console.log(id);

  const handleDelete = (id) => console.log(id);

  const header = [
    {
      title: 'Last Name',
      prop: 'lastname',
      sortable: true,
    },
    { title: 'First Name', prop: 'firstname', sortable: true },
    { title: 'Phone', prop: 'phone' },
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
      <div className='card shadow-sm py-3'>
        <div className='card-body'>
          <div className='mb-5'>
            <label htmlFor='group' className='form-label'>
              Contacts are filtered by groups
            </label>
            <div className='form-floating'>
              <select
                className='form-select'
                id='group'
                name='groupId'
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

              <label htmlFor='group' className='form-label'>
                Type to search or select group
              </label>
            </div>
          </div>

          <CustomTable
            tableHeaders={header}
            tableBody={contacts ? contacts : []}
            rowsPerPage={2}
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
