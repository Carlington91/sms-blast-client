import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import Form from '../../components/sender/Form';
import SenderList from '../../components/sender/SenderList';
import Modal from '../../components/Modal';
import { useSender } from '../../context/sender/senderContext';
import { FaPlus } from 'react-icons/fa';

const SendersIDPage = () => {
  const { clearSenderForm } = useSender();
  return (
    <Layout>
      <PageTitle title='Senders' />
      <button
        type='button'
        className='btn btn-primary shadow-sm'
        data-bs-toggle='modal'
        data-bs-target='#modal'
        onClick={() => clearSenderForm()}
      >
        <FaPlus /> Add Sender
      </button>

      <Modal modalTitle='Add Sender' modalFooter='test'>
        <Form />
      </Modal>
      <SenderList />
    </Layout>
  );
};

export default SendersIDPage;
