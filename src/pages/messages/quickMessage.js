import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import QuickMessageForm from '../../components/sendMessage/QuickMessageForm';
import { RiMailLine } from 'react-icons/ri';

const QuickMessagePage = () => {
  const data = {
    title: 'Quick Message',
    metaData: {
      title: 'Quick Message',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} Icon={RiMailLine} />
      <QuickMessageForm />
    </Layout>
  );
};

export default QuickMessagePage;
