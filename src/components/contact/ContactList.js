import { useEffect } from 'react';
import { useContact } from '../../context/contact/contactContext';
import { useGroup } from '../../context/group/groupContext';
import CustomTable from '../CustomTable';

const ContactList = () => {
  const { fetchContacts, contacts } = useContact();
  const { fetchGroups, groups } = useGroup();

  useEffect(() => {
    fetchContacts();
    return () => fetchContacts();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchGroups();

    return () => fetchGroups();
    //eslint-disable-next-line
  }, []);

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
        <>
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
        </>
      ),
    },
  ];

  return (
    <section>
      <div className='card shadow-sm py-3'>
        <div className='card-body'>
          <div className='mb-5'>
            <div className='form-floating'>
              <input
                class='form-control'
                list='datalistOptions'
                id='group'
                placeholder='Type to search...'
              />
              <label htmlFor='group' class='form-label'>
                Select Group
              </label>
            </div>
            <datalist id='datalistOptions'>
              {groups.map((group) => (
                <option>{group.name}</option>
              ))}
            </datalist>
          </div>

          <CustomTable
            tableHeaders={header}
            tableBody={contacts ? contacts : []}
            rowsPerPage={2}
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

export default ContactList;
