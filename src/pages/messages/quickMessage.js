import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import QuickMessageForm from '../../components/sendMessage/QuickMessageForm';

const QuickMessagePage = () => {
  const data = {
    title: 'Groups',
    metaData: {
      title: 'Groups',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} />
      <QuickMessageForm />
    </Layout>
  );
};

export default QuickMessagePage;
