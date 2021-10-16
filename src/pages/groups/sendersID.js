import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import SenderIdForm from '../../components/SendersId';

const SendersIDPage = () => {
  return (
    <Layout>
      <PageTitle title='Senders' />
      <SenderIdForm />
    </Layout>
  );
};

export default SendersIDPage;
