import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import SentMessages from '../../components/sendMessage/SentMessages';
import { BiMessageDetail } from 'react-icons/bi';

const SentMessagesPage = () => {
  const data = {
    title: 'Sent Messages',
    metaData: {
      title: 'Sent Messages',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} Icon={BiMessageDetail} />
      <SentMessages />
    </Layout>
  );
};

export default SentMessagesPage;
