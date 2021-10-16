import { FaPlus } from 'react-icons/fa';
import Form from '../../components/group/Form';
import GroupList from '../../components/group/GroupList';
import Layout from '../../components/layout';
import MetaData from '../../components/MetaData';
import Modal from '../../components/Modal';
import PageTitle from '../../components/pageTitle';
import { useGroup } from '../../context/group/groupContext';

const GroupPage = () => {
  const { clearGroupForm } = useGroup();

  const data = {
    title: 'Groups',
    metaData: {
      title: 'Groups',
      desc: 'Add new groups',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} />

      <button
        type='button'
        className='btn btn-primary shadow-sm'
        data-bs-toggle='modal'
        data-bs-target='#modal'
        onClick={() => clearGroupForm()}
      >
        <FaPlus /> Add Group
      </button>

      <Modal modalTitle='Add Groups' modalFooter='test'>
        <Form />
      </Modal>

      <GroupList />
    </Layout>
  );
};

export default GroupPage;
