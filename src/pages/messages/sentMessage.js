import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import SentMessage from '../../components/sendMessage/SentMessage';
import { BiMessageDetail } from 'react-icons/bi';

const SentMessagePage = () => {
  const data = {
    title: 'Sent Message',
    metaData: {
      title: 'Sent Message',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} Icon={BiMessageDetail} />
      <SentMessage />
    </Layout>
  );
};

export default SentMessagePage;
