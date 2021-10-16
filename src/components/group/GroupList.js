import { useEffect } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import CustomTable from '../CustomTable';
import { useGroup } from '../../context/group/groupContext';

const GroupList = () => {
  const { fetchGroups, deleteGroup, setGroupUpdateForm, groups } = useGroup();

  useEffect(() => {
    fetchGroups();
    return () => fetchGroups();
    //eslint-disable-next-line
  }, []);

  const handleEdit = (val) => {
    setGroupUpdateForm(val);
  };

  const handleDelete = (id) => {
    deleteGroup(id);
  };

  const header = [
    { title: 'Name', prop: 'name', sortable: true },
    { title: 'Description', prop: 'desc' },
    {
      title: 'Action',
      prop: '_id',
      cell: (row) => (
        <>
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
        </>
      ),
    },
  ];

  return (
    <section className='mt-3'>
      <div className='card shadow-sm py-3'>
        <div className='card-body'>
          <CustomTable
            tableHeaders={header}
            tableBody={groups ? groups : []}
            rowsPerPage={5}
            rowsPerPageOption={[5, 10, 15, 20]}
          />
        </div>
      </div>
    </section>
  );
};

export default GroupList;
